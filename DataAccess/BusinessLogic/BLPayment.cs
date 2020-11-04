using DataAccess.DataAccess;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.BusinessLogic
{
    public class BLPayment : IDisposable
    {
        DAPayment da = new DAPayment();

        public void Dispose()
        {
            da.Dispose();
        }
        public List<payment> GetPayments()
        {
            try
            {
                return da.GetPayments();
            }
            catch
            {
                throw;
            }
        }
        public payment AddPayment(payment payment)
        {
            try
            {

                return da.AddPayment(payment);
            }
            catch
            {
                throw;
            }
        }
        public payment UpdatePayment(payment payment)
        {
            try
            {
               return da.UpdatePayment(payment);
            }
            catch
            {
                throw;
            }
        }
        public int DeletePayment(int id)
        {
            try
            {
                return da.DeletePayment(id);
            }
            catch
            {
                throw;
            }
        }
    }
}
