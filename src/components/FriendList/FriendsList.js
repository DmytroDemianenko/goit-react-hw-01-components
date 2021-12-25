import PropTypes from 'prop-types';
import Friends from './Friends';
function FriendsList ({data})  {
    return (
        <ul className="friend-list" key="id">
  {data.map((item) =>
  (
      <Friends avatar={item.avatar}
                name={item.name}
          isOnline={item.isOnline} />
  ))}
</ul>
    )
}
FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}
export default FriendsList;