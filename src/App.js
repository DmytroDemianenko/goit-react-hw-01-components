//  import PaintingList from './components/PaintingList';
import Profile from './components/Profile/Profile';
import Section from './components/Section';
import user from './components/Profile/user.json';
//  import paintings from './painting.json';
 export default function App() {
     return (<div>
         <Section title="Top week">
             <Profile userName={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
         </Section>
     </div>);
 }