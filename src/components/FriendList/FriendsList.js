import PropTypes from 'prop-types';
import Friends from './Friends';
import style from "./FriendsList.module.css";
function FriendsList ({data})  {
    return (
        
        <ul className={style.friendList} key="id">
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