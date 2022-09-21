import SideMenu from './library/SideMenu/index';
import { Router, Pages } from './pages';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { TranslationComponent } from './translation/i18n';

export const Entry = () => {
    return (
        <I18nextProvider i18n={i18next}>
            <div className='bg-[#fbfbfb] h-[100vh] w-full flex flex-col flex-nowrap '>
                <div className='flex flex-1 flex-row flex-nowrap min-h-[400px]'>
                    {/* Tooltip */}
                    <BrowserRouter>
                        <div className='flex flex-col flex-nowrap h-full min-w-[200px]'>
                            <SideMenu />
                        </div>
                        <TranslationComponent />
                        <div className='flex flex-col flex-nowrap w-full h-full '>
                            <Router />
                            <Pages />
                        </div>
                    </BrowserRouter>
                </div>
                {/* Network status and network details */}
            </div>
        </I18nextProvider>
    );
}

export default Entry;