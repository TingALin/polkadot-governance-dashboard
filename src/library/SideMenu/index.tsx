import Heading from './Heading';
import Item from './Item';
import { useLocation } from 'react-router-dom';
import { PAGE_CATEGORIES, PAGE_CONFIG } from '../../pages';
import React from 'react';
import { useEffect } from 'react';

export const SideMenu = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <div className='bg-[#f2f2f2] flex-1 w-full rounded-xl py-4 px-2 '>
            {PAGE_CATEGORIES.map((category) =>
                <React.Fragment>
                    {category.session !== 'default' && <Heading title={category.session} />}
                    {PAGE_CONFIG.map((page) =>
                        <React.Fragment>
                            {page.category === category._id && <Item name={page.title} to={page.url} active={page.url === pathname} />}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </div>
    );
}

export default SideMenu;