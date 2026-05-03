using FinAlert_Service.Implementations;
using FinAlert_Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinAlert_API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertController : ControllerBase
    {
        public readonly IAlertService service;

        public AlertController(IAlertService service)
        {
            this.service = service;
        }

        [HttpGet("{choice}")]
        public IActionResult Action(int choice)
        {
            var result = service.GetAlert(choice);

            if (result == null)
                return NotFound("Invalid choice");

            return Ok(result);
        }
    }
}
