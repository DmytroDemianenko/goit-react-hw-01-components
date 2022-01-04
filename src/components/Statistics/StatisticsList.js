import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';

function StatisticsList ({ title, items }) {

  return (
    <div>
      { title && (<h2 className={s.title}> {title} </h2>) }
      <ul className={s.list}>
      {items.map(item => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
      </ul>
      </div>
  )
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
export default StatisticsList;
