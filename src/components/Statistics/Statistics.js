import PropTypes from 'prop-types';
// const items = { label, percentage };
const Statistics = ({items}) => {
  return (  
    
  <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {items.map(item=> (<li className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
    </li>))}
        
    </ul>
</section>)
}
Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
export default Statistics;