import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';


function StatisticsList ({items})  {
  return (  
  
  <ul className={s.list} key="id">
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