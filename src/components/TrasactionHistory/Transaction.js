import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{Number(amount)}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
