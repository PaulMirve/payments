using DataAccess.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DataAccess
{
    public class DAPayment : IDAPayment
    {
        Entities context = new Entities();

        public payment AddPayment(payment payment)
        {
            context.payments.Add(payment);
            context.SaveChanges();
            return payment;
        }

        public int DeletePayment(int id)
        {
            context.payments.Remove(context.payments.FirstOrDefault(payment => payment.id_payment == id));
            context.SaveChanges();
            return id;
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public List<payment> GetPayments()
        {
            return context.payments.ToList();
        }

        public payment UpdatePayment(payment payment)
        {
            payment Payment = context.payments.FirstOrDefault(pymt => pymt.id_payment == payment.id_payment);
            Payment.motive = payment.motive;
            Payment.receiver = payment.receiver;
            Payment.amount = payment.amount;
            context.SaveChanges();
            return Payment;
        }
    }
}
