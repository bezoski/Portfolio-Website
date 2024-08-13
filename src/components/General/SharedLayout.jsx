import Navbar from '../../components/General/Navbar';
import Footer from '../../components/General/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const SharedLayout = () => {
  const location = useLocation();

  const getBackgroundStyle = () => {
    if (location.pathname === '/') {
      return 'bg-hero bg-cover bg-custom-position-mobile md:bg-custom-position';
    } else {
      return 'bg-neutral-night';
    }
  };

  return (
    <div className={`flex flex-col h-screen ${getBackgroundStyle()}`}>
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
