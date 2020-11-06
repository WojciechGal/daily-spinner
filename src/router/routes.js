import Spinner from '../views/Spinner';
import Configuration from '../views/Configuration';

const routes = [
    {
        path: '/',
        name: 'start',
        redirect: '/spinner'
    },
    {
        path: '/spinner',
        name: 'spinner',
        component: Spinner
    },
    {
        path: '/configuration',
        name: 'configuration',
        component: Configuration
    },
    {
        path: '*',
        name: 'unknown',
        redirect: '/spinner'
    }
];

export default routes;