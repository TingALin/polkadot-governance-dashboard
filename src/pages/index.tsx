import PageButtons from "../library/button";
import { useState, useEffect } from "react";
import Overview from "./overview";
import Intro from "./intro";
import Page1 from "./page";
import Page2 from "./page2";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";

export const PAGE_CATEGORIES = [
    {
        _id: 1,
        session: 'default'
    },
    {
        _id: 2,
        session: 'main'
    },
    {
        _id: 3,
        session: 'others'
    }
];

export const PAGE_CONFIG = [
    {
        category: 1,
        id: 1,
        title: 'Overview',
        url: '/',
        Entry: Overview
    },
    {
        category: 2,
        id: 2,
        title: 'Intro',
        url: '/introduction',
        Entry: Intro
    },
    {
        category: 3,
        id: 3,
        title: 'Page1',
        url: '/page1',
        Entry: Page1
    },
    {
        category: 3,
        id: 4,
        title: 'Page2',
        url: '/page2',
        Entry: Page2
    }
];

export const Router = () => {
    return (
        <Routes>
            {PAGE_CONFIG.map((page) => {
                const { Entry } = page;
                return (
                    <Route
                        path={page.url}
                        element={<Entry page={page} />}
                    />
                );
            }
            )}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
};

export const Pages = () => {
    const [page, setPage] = useState<number>(1);

    let navigate = useNavigate();
    const { pathname } = useLocation();

    const nextPage = page + 1 > PAGE_CONFIG.length ? null : page + 1;
    const prevPage = page - 1 < 1 ? 0 : page - 1;

    useEffect(() => {
        PAGE_CONFIG.map((page) => {
            if (page.url === pathname) {
                setPageTo(page.id);
            }
        })
    }, [pathname]);

    const setPageTo = (value: number) => {
        setPage(value);

        PAGE_CONFIG.map((page) => {
            if (page.id === value) {
                navigate(page.url);
            }
        })

    };

    return (
        <div className="flex flex-row flex-nowrap flex-[2] content-end  justify-around">
            <div>
                {prevPage !== 0 &&
                    <>
                        <PageButtons icon='<' onClick={() => { setPageTo(prevPage) }} />
                        &nbsp;
                        {
                            PAGE_CONFIG.map((page) => {
                                if (page.id === prevPage) {
                                    return (page.title);

                                }
                            })
                        }
                    </>
                }
            </div>
            <div>
                {nextPage !== null &&
                    <>
                        &nbsp;
                        {
                            PAGE_CONFIG.map((page) => {
                                if (page.id === nextPage) {
                                    return (page.title);

                                }
                            })
                        }
                        &nbsp;
                        <PageButtons icon='>' onClick={() => { setPageTo(nextPage) }} />
                    </>
                }
            </div>
        </div>
    );
};

export default Pages;