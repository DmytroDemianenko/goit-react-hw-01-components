import PropTypes from "prop-types";
import Transaction from './Transaction';

function TransactionHistory({items}) {
    return (
        <tbody>
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