import SideMenu from './library/SideMenu/index';
import { Router, Pages } from './pages';
import { BrowserRouter } from 'react-router-dom';

export const Entry = () => {
    return (
        <div className='bg-[#fbfbfb] h-[100vh] w-full flex flex-col flex-nowrap '>
            <div className='flex flex-1 flex-row flex-nowrap min-h-[400px]'>
                {/* Tooltip */}
                <BrowserRouter>
                    <div className='flex flex-col flex-nowrap h-full min-w-[200px]'>
                        <SideMenu />
                    </div>
                    <div className='flex flex-col flex-nowrap w-full h-full '>
                        <Router />
                        <Pages />
                    </div>
                </BrowserRouter>
            </div>
            {/* Network status and network details */}
        </div>
    );
}

export default Entry;