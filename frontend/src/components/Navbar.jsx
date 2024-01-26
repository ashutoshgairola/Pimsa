import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-[#3c4b49] text-[#d8e2df]  py-2 px-4 flex items-center justify-between">
            <div className="flex items-center hover:text-[#C5EDAC]">
                <Link to="/" className="flex items-center space-x-2">
                    <img className='aspect-square w-8' src="piggy-bank.png" alt="piggy" />
                    <span className="text-xl font-bold ">Pimsa</span>
                </Link>
            </div>
            <div className="flex items-center space-x-4 text-xl">
                <Link to="/insights" className="hover:text-[#C5EDAC] hover:text-2xl">
                    <i className="fas fa-chart-bar "></i>
                </Link>
                <Link to="/notifications" className='hover:text-[#C5EDAC] hover:text-2xl'>
                    <i className="fas fa-bell "></i>
                </Link>
                <Link to="/profile" className="hover:text-[#C5EDAC] hover:text-2xl">
                    <i className="fas fa-user "></i>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
