using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Interfaces
{
    interface IDAPayment : IDisposable
    {
        List<payment> GetPayments();
        payment AddPayment(payment payment);
        payment UpdatePayment(payment payment);
        int DeletePayment(int id);
    }
}
