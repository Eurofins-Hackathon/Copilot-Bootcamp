using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace WrightBrothersApi.Tests.Controllers
{
    public class FlightsControllerTests
    {
        private readonly FlightsController _controller;
        private readonly Mock<ILogger<FlightsController>> _loggerMock;

        public FlightsControllerTests()
        {
            _loggerMock = new Mock<ILogger<FlightsController>>();
            _controller = new FlightsController(_loggerMock.Object);
        }

        [Fact]
        public void Post_Should_Add_Flight_To_Flights_List()
        {
            // Arrange
            var flight = new Flight
            {
                Id = 4,
                FlightNumber = "WB004",
                Origin = "New York, NY",
                Destination = "Los Angeles, CA",
                DepartureTime = new DateTime(2022, 1, 1, 8, 0, 0),
                ArrivalTime = new DateTime(2022, 1, 1, 12, 0, 0),
                Status = FlightStatus.Scheduled,
                FuelRange = 200,
                FuelTankLeak = false,
                FlightLogSignature = "010122-DEP-ARR-WB004"
            };

            // Act
            var result = _controller.Post(flight);

            // Assert
            result.Value.Should().BeEquivalentTo(flight);
        }

        [Fact]
        public void GetById_Should_Return_Flight_With_Correct_Id()
        {
            // Arrange
            var flightId = 2;

            // Act
            var result = _controller.GetById(flightId);

            // Assert
            result.Value.Should().NotBeNull();
        }

        [Fact]
        public void GetById_Should_Return_NotFound_When_Flight_Not_Found()
        {
            // Arrange
            var flightId = 10;

            // Act
            var result = _controller.GetById(flightId);

            // Assert
            result.Result.Should().BeOfType<NotFoundResult>();
        }

        // Add more tests for other controller methods...

    }
}