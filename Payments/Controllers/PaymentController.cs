using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.BusinessLogic;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace Payments.Controllers
{
    [Route("api/[controller]")]
    public class PaymentController : Controller
    {
        [HttpGet]
        public List<payment> GetPayments()
        {
            using (var bl = new BLPayment())
                return bl.GetPayments();
        }


        [HttpPost]
        public payment AddPayment([FromBody]payment payment)
        {
            using (var bl = new BLPayment())
                return bl.AddPayment(payment);
        }

        [HttpDelete]
        public int DeletePost([FromBody]int id)
        {
            using(var bl = new BLPayment())
            {
                return bl.DeletePayment(id);
            }
        }

        [HttpPut]
        public payment UpdatePayment([FromBody]payment payment)
        {
            using (var bl = new BLPayment())
            {
                return bl.UpdatePayment(payment);
            }
        }

    }
}