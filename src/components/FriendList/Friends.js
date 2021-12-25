import PropTypes from 'prop-types';

const Friends = ({ avatar, name, isOnline }) => {
    return (
        <li className="item">
  <span className="status">{isOnline ? 'online' : 'offline' }</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
</li>
    )
}
Friends.propTypes = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default Friends;