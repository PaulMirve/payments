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

            //UNCOMMENT THE CODE BELOW AND COMMENT THE LINES ABOVE IF YOU ARE NOT GOING TO USE A DATA BASE CONNECTION

            //return new List<payment> {
            //    new payment
            //    {
            //        id_payment = 1,
            //        amount = 200,
            //        motive = "Cena en restaurante",
            //        receiver = "Ricardo Hernandez Quintero"
            //    },new payment
            //    {
            //        id_payment = 2,
            //        amount = 500,
            //        motive = "Pago de renta",
            //        receiver = "Maria López Rodriguez"
            //    },
            //};
        }


        [HttpPost]
        public payment AddPayment([FromBody]payment payment)
        {
            using (var bl = new BLPayment())
                return bl.AddPayment(payment);

            //UNCOMMENT THE CODE BELOW AND COMMENT THE LINES ABOVE IF YOU ARE NOT GOING TO USE A DATA BASE CONNECTION

            //return payment;
        }

        [HttpDelete("{id:int}")]
        public int DeletePost(int id)
        {
            using (var bl = new BLPayment())
            {
                return bl.DeletePayment(id);
            }

            //UNCOMMENT THE CODE BELOW AND COMMENT THE LINES ABOVE IF YOU ARE NOT GOING TO USE A DATA BASE CONNECTION

            //return id;
        }

        [HttpPut]
        public payment UpdatePayment([FromBody]payment payment)
        {
            using (var bl = new BLPayment())
            {
                return bl.UpdatePayment(payment);
            }

            //UNCOMMENT THE CODE BELOW AND COMMENT THE LINES ABOVE IF YOU ARE NOT GOING TO USE A DATA BASE CONNECTION

            //return payment;
        }

    }
}