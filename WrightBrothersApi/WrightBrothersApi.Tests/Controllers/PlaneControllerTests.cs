using WrightBrothersApi.Controllers;
using WrightBrothersApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WrightBrothersApi.Tests.Controllers
{
    public class PlanesControllerTests
    {
        private readonly ILogger<PlanesController> _logger;
        private readonly PlanesController _planesController;

        public PlanesControllerTests()
        {
            _logger = Substitute.For<ILogger<PlanesController>>();
            _planesController = new PlanesController(_logger);
        }

        [Fact]
        public void GetAll_ReturnsListOfPlanes()
        {
            // Act
            var result = _planesController.GetAll();

            // Assert
            result.Value.Should().NotBeEmpty();
        }

        [Fact]
        public void Post_AddsPlaneAndReturnsCreated()
        {
            // Arrange
            var newPlane = new Plane
            {
                Id = 3,
                Name = "Test Plane",
                Year = 2022,
                Description = "A test plane.",
                RangeInKm = 1000
            };

            // Act
            var result = _planesController.Post(newPlane);

            // Assert
            result.Result.Should().BeOfType<CreatedAtActionResult>();

            var createdAtActionResult = (CreatedAtActionResult)result.Result!;
            var returnedPlane = (Plane)createdAtActionResult.Value!;
            returnedPlane.Should().BeEquivalentTo(newPlane);
        }

        [Fact]
        public void Post_WithInvalidPlane_ReturnsBadRequest()
        {
            // Arrange
            var newPlane = new Plane
            {
                Id = 3,
                Name = "Test Plane",
                Year = 2022,
                Description = "A test plane.",
                RangeInKm = -1000
            };

            // Act
            var result = _planesController.Post(newPlane);

            // Assert
            result.Result.Should().BeOfType<BadRequestObjectResult>();
        }

        // Search term | Amount of results | Description
        // Wright Plane 1 | 1 | Specific search
        // Wright Plane | 3 | General search
        // wright plane | 3 | Case insensitive
        //  Wright  Plane  | 3 | Extra spaces
        [Theory]
        [InlineData("Wright Plane 1", 1)]
        [InlineData("Wright Plane", 3)]
        [InlineData("wright plane", 3)]
        [InlineData(" Wright  Plane ", 3)]
        public void Search_ReturnsCorrectResults(string searchTerm, int expectedAmountOfResults)
        {
            // Act
            var result = _planesController.Sera(searchTerm);

            // Assert
            result.Value.Should().HaveCount(expectedAmountOfResults);
        }



    }
}