import routes from './page-hoc-route';
import {lazy, useEffect, useMemo} from 'react';
import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';

export default function ReactRoutes() {
    const _routes = useMemo(()=> {
        return routes?.map((i) => {
            const Page = lazy(() => import(`.${i?.path}`));
            return {
                path: i?. dirPath,
                element: <Page/> ,
            };
        })
    },[]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {useRoutes(_routes)}
        </Suspense>
    );
}
