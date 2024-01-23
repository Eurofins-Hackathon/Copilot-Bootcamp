using Microsoft.AspNetCore.Mvc;
using WrightBrothersApi.Models;

namespace WrightBrothersApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlanesController : ControllerBase
    {
        private readonly ILogger<PlanesController> _logger;

        public PlanesController(ILogger<PlanesController> logger)
        {
            _logger = logger;
        }

        private static readonly List<Plane> Planes = new List<Plane>
        {
            new Plane
            {
                Id = 1,
                Name = "Wright Flyer",
                Year = 1903,
                Description = "The first successful heavier-than-air powered aircraft.",
                RangeInKm = 12
            },
            new Plane
            {
                Id = 2,
                Name = "Wright Flyer II",
                Year = 1904,
                Description = "A refinement of the original Flyer with better performance.",
                RangeInKm = 24
            }
        };

        [HttpGet]
        public ActionResult<List<Plane>> GetAll()
        {
            _logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");

            return Ok(Planes);
        }

        [HttpGet("{id}")]
        public ActionResult<Plane> GetById(int id)
        {
            _logger.LogInformation($"GET ✈✈✈ {id} ✈✈✈");

            var plane = Planes.Find(p => p.Id == id);

            if (plane == null)
            {
                return NotFound();
            }

            return Ok(plane);
        }

        // search by name
        [HttpGet("search")]
        public ActionResult<List<Plane>> GetByName([FromQuery] string name)
        {
            _logger.LogInformation($"GET ✈✈✈ {name} ✈✈✈");

            var planes = Planes.FindAll(p => p.Name.Contains(name));

            if (planes == null)
            {
                return NotFound();
            }

            return Ok(planes);
        }

        [HttpPost]
        public ActionResult<Plane> Post(Plane plane)
        {
            Planes.Add(plane);

            return CreatedAtAction(nameof(GetById), new { id = plane.Id }, plane);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Plane plane)
        {
            if (id != plane.Id)
            {
                return BadRequest();
            }

            var existingPlane = Planes.Find(p => p.Id == id);

            if (existingPlane == null)
            {
                return NotFound();
            }

            existingPlane.Name = plane.Name;
            existingPlane.Year = plane.Year;
            existingPlane.Description = plane.Description;
            existingPlane.RangeInKm = plane.RangeInKm;

            return NoContent();
        }

    }
}
