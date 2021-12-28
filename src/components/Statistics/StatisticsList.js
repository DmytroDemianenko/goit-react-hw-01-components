import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';


const StatisticsList = ({ title, items }) => {
  
  return (  
  <h2 className={s.title}> {title} </h2>
  <ul className={s.list} >
            {items.map((item ) => (
                  <Statistics key={item.id} label={item.label}
                  percentage={item.percentage}/>
                  ))}
  </ul>
  )
}
StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}
export default StatisticsList;