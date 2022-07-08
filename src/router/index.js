import HYDiscover from '@/pages/discover';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';

const routes = [
    {
        path: '/',
        exact: true,
        component: HYDiscover
    },
    {
        path: '/friend',
        exact: true,
        component: HYFriend
    },
    {
        path: '/mine',
        exact: true,
        component: HYMine
    }
];

export default routes;
