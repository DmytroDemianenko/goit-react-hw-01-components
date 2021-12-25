import PropTypes from 'prop-types';
import Statistics from './Statistics';
// import s from './Statistics.module.css';
// import data from './data.json';
function StatisticsList ({items})  {
  return (  
  
  <ul className="stat-list" key="id">
            {items.map((item ) => (
                  <Statistics label={item.label}
                  percentage={item.percentage}/>
                  ))}
      </ul>
  )
}
StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}
export default StatisticsList;