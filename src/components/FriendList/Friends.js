import PropTypes from 'prop-types';
import style from './Friends.module.css';
const Friends = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.friend}>
      <span className={style[isOnline]}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friends;
