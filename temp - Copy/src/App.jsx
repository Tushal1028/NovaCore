import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import SearchResults from './pages/SearchResults';
import Profile from './pages/Profile';
import Category from './pages/Category';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Upload from './pages/Upload';
// import Thanks from './pages/Thanks';
// import SetPassword from './pages/SetPassword';
// import Reset from './pages/Reset';
// import RestPassword from './pages/RestPassword';
import ImageView from './pages/ImageView';
// import EditImage from './pages/EditImage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileEdit from './pages/ProfileEdit';


// Layout component to conditionally include header and footer
const Layout = ({ children }) => {
  // console.log(user)
  const noHeaderFooterPaths = ['/sign-in', '/sign-up', '/user/upload', '/user/edit'];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  return (
    <div>
      {showHeaderFooter && <Header />}
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      {/* <Route path="/search" element={<Layout><SearchResults /></Layout>} /> */}
      <Route path="/category/:category_name" element={<Layout><Category /></Layout>} />
      <Route path="/accounts/about" element={<Layout><About /></Layout>} />
      {/* <Route path="/accounts/rest-password" element={<RestPassword />} /> */}
      {/* <Route path="/accounts/reset" element={<Reset />} /> */}
      {/* <Route path="/accounts/set-password-complate" element={<SetPassword />} /> */}
      <Route path="/image/:id" element={<Layout>< ImageView /></Layout>} />
      <Route path="/accounts/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/accounts/sign-in" element={<SignIn />} />
      <Route path="/accounts/sign-up" element={<SignUp />} />
      <Route path="/accounts/profile/edit" element={<ProfileEdit />} />
      <Route path="/upload" element={<Upload />} />
      {/* <Route path="/thanks" element={<Thanks />} /> */}
      {/* <Route path="/user/edit" element={<EditImage />} /> */}
    </Routes>
  </Router>
);

export default App;
