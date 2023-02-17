using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeSolutionApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        public CommonController()
        {
        }

        [HttpGet]
        [ActionName("PingServer")]
        public IActionResult Ping()
        {
            var dateTimeNow = DateTime.Now;
            return new JsonResult(dateTimeNow);
        }

        [HttpGet]
        [ActionName("SumValues")]
        public IActionResult SumValues(int a, int b)
        {
            var result = a + b;
            return new JsonResult(result);
        }
    }
}
