//  import PaintingList from './components/PaintingList';
import Profile from './components/Profile/Profile';
import Section from './components/Section';
import user from './components/Profile/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import data from './components/Statistics/data.json';
import FriendsList from './components/FriendList/FriendsList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TrasactionHistory/TransactionHistory';
import Transactions from './components/TrasactionHistory/transactions.json';
import s from '../src/components/Statistics/Statistics.module.css';
//  import paintings from './painting.json';

 export default function App() {
     return (<div>
         <Section>
            <Profile userName={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
         </Section>
         <Section className={s.statistics}>
            <StatisticsList title="Upload stats" items={data}/>
             
         </Section>
         <Section>
             <FriendsList data={friends}/>
         </Section>
         <Section>
             <TransactionHistory items={Transactions} />
         </Section>
     </div>);
 }