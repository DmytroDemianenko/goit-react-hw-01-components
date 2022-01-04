import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.heading}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.table}>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default TransactionHistory;
