
import HomeUi from '../pages/main/home.ui';
import routes from './Routes';
import stacks from './stack';



const route = [

    {
        stack: stacks.APP,
        route: routes.home,
        Page: HomeUi,
    },
   
]

export default route
