// import User from './user.json';
import PropTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
     <div className="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>   
  )
}
Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}
export default Profile;