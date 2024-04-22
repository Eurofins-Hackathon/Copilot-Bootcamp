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
            var okObjectResult = (OkObjectResult)result.Result!;
            var returnedPlanes = (List<Plane>)okObjectResult.Value!;
            returnedPlanes.Should().NotBeEmpty();
        }

        [Theory]
        [InlineData("Wright Flyer III", 1)]
        [InlineData("Wright", 5)]
        [InlineData("wright flyer", 3)]
        [InlineData(" Wright flyer ", 3)]
        public void SearchByName_ReturnsExpectedPlanes(string searchTerm, int expectedCount)
        {
            // Arrange
            var planes = new List<Plane>
            {
                new Plane { Id = 1, Name = "Wright Flyer I", Year = 1903, Description = "First powered flight", RangeInKm = 37 },
                new Plane { Id = 2, Name = "Wright Flyer II", Year = 1904, Description = "Improved design", RangeInKm = 61 },
                new Plane { Id = 3, Name = "Wright Flyer III", Year = 1905, Description = "First practical plane", RangeInKm = 39 },
                new Plane { Id = 4, Name = "Wright Model A", Year = 1906, Description = "First production plane", RangeInKm = 100 },
                new Plane { Id = 5, Name = "Wright Model B", Year = 1910, Description = "Improved Model A", RangeInKm = 120 }
            };
            _planesController.SetupPlanesData(planes);

            // Act
            var result = _planesController.SearchByName(searchTerm);

            // Assert
            result.Result.Should().BeOfType<OkObjectResult>();
            var okObjectResult = (OkObjectResult)result.Result;
            var returnedPlanes = (List<Plane>)okObjectResult.Value;
            returnedPlanes.Count.Should().Be(expectedCount);
        }
    }
}