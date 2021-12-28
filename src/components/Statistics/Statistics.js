import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function Statistics ({ label, percentage})  {
  return (  
     (<li className={s.item} >
          <span className="label">{label}</span>
          <span className="percentage">{Number(percentage)}%</span>
    </li>))}
        
Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
export default Statistics;