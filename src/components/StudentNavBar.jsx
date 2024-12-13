import logo from '../assets/images/Logontic.png'; 
import msg from '../assets/images/messages.png'; 
import profile from '../assets/images/profile.png'; 
import notification from '../assets/images/notification.png'; 
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="bg-sky-950 border-b border-sky-950 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-30 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <a className="flex flex-shrink-0 items-center mr-4" href="#">
                
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                  >Edulink</span
                >
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                <a
                    href="/student"
                    className="h-10 mt-2 mb-2 text-black bg-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2"
                    >Home</a
                  >
                <a href="#" className="rounded-md mt-3 mb-2 px-3 py-2">
                     <img className="h-5 w-auto" 
                     src={msg}
                      alt="Home" />
                </a>
                 <a href="#" className="rounded-mdmt-2 mb-2 mt-2 px-3 py-2">
                     <img className="h-7 w-auto"
                      src={notification}
                      alt="Student" />
                 </a>
                <a href="#" className="rounded-md mt-2 mb-2 px-3 py-2">
                      <img className="h-7 w-auto"
                       src={profile}
                       alt="Teacher" />
                 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );


}
export default NavBar ;