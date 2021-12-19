//  import PaintingList from './components/PaintingList';
import Profile from './components/Profile/Profile';
import Section from './components/Section';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
//  import paintings from './painting.json';
 export default function App() {
     return (<div>
         <Section>
             <Profile userName={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
         </Section>
         <Section>
             <Statistics label={data.label} percentage={data.percentage}/>
         </Section>
     </div>);
 }