import PropTypes from "prop-types";
import s from './Transaction.module.css';

const Transaction = ({ id, type, amount, currency }) => {
    return (
        <tr  key={id}>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
    )
}
Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}
export default Transaction;