import PropTypes from 'prop-types';
import Friends from './Friends';
import style from "./FriendsList.module.css";
function FriendsList ({data})  {
    return (
        
        <ul className={style.friendList} key={data.id}>
              {data.map((item) =>
  (
      <Friends key={item.id} avatar={item.avatar}
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