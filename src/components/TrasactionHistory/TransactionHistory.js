import PropTypes from "prop-types";
import Transaction from './Transaction';
import s from './Transaction.module.css';

function TransactionHistory({items}) {
    return (
        <tbody className={s.table}>
            {items.map((item) =>
            (
                <Transaction type={item.type} amount={item.amount} currency={item.currency}/>
            ))}
        </tbody>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}
export default TransactionHistory;