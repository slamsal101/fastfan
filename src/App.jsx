import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import AssociationOverview from './pages/AssociationOverview';
import OurVision from './pages/OurVision';
import FromChairman from './pages/FromChairman';
import Members from './pages/Members';
import MemberDetail from './pages/MemberDetail';


const Layout =({children}) => {
return (
  <div className="min-h-screen flex flex-col">
  <Header/>
  <main className="flex-grow">
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
        <Route path="/committee" element={<div className="py-20 text-center">Committee Page - Coming Soon</div>} />
        <Route path="/news" element={<div className="py-20 text-center">News Page - coming soon</div>}/>
        <Route path="/events" element={<div className="py-20 text-center">Events Page - coming soon</div>}/>
        <Route path="/contact" element={<div className="py-20 text-center">Contact Page - coming soon</div>}/>
        

      </Routes>
    </Layout>
  </Router>

);
};

export default App;