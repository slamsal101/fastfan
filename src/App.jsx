import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AssociationOverview from './pages/AssociationOverview';
import OurVision from './pages/OurVision';
import FromChairman from './pages/FromChairman';
import Members from './pages/Members';
import MemberDetail from './pages/MemberDetail';
import OurCommittee from './pages/OurCommittee';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import NewsDetail from './pages/NewsDetail';
import NewsNotices from './pages/NewsNotices';
import ContactUs from './pages/ContactUs';
import ReportIssue from './pages/ReportIssue';


const Layout =({children}) => {
return (
  <div className="min-h-screen flex flex-col">
  <Header/>
  <main className="grow">
    {children}
  </main>
  <Footer/>
  </div>
);
};

const App =() => {
return(
  <Router>
    <Layout>
      <Routes>
        {/* homepage */}
        <Route path ="/" element={<HomePage/>}/>

        {/* aboutus page */}
        <Route path="/about/overview" element={<AssociationOverview/>}/>
        <Route path="/about/vision" element={<OurVision/>}/>
        <Route path="/about/chairman" element={<FromChairman/>}/>


        {/* members pages*/}
        <Route path="/members" element={<Members/>}/>
        <Route path="/members/:id" element={<MemberDetail/>}/>

        {/* other pages */}
        <Route path="/committee" element={<OurCommittee/>} />



        {/* news pages */}
          <Route path="/news" element={<NewsNotices />} />
          <Route path="/news/:id" element={<NewsDetail />} />


        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:id" element={<EventDetail />} />


        <Route path="/contact" element={<ContactUs/>}/>

         {/* report issue page */}
          <Route path="/report-issue" element={<ReportIssue />} />
        

      </Routes>
    </Layout>
  </Router>

);
};

export default App;

