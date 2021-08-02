import MernShoppingList from './assets/images/projects/shopping-list.jpg';
import FaceBookLite from './assets/images/projects/facebookLite.jpg'
import ShoppingCard from './assets/images/projects/react-shopping-cart.jpg'
import TodoApp from './assets/images/projects/react-todo-app.jpg'
import PollAll from './assets/images/projects/react-poll-app.jpg'
import MyStaticPortfolio from './assets/images/projects/static-portfolio.jpg'
import PstToHtml from './assets/images/projects/psd-to-html.jpg'
import LandingPage from './assets/images/projects/landing-page.jpg'
import ReactBlogApp from './assets/images/projects/react-blog-app.jpg'
import WeatherApp from './assets/images/projects/js-weather-app-with-dom.jpg'

const projects = [
    {
        image: MernShoppingList,
        name: 'This is a mern stack shopping list app inspired by google shopping list app',
        type: 'running',
        github: 'https://github.com/mhshuvoit/mern-shopping-list-app',
        live: 'https://mern-shopping-list-mhs.herokuapp.com'
    },
    {
        image: FaceBookLite,
        name: 'This is a mern stack app inspired by facebook',
        type: 'running',
        github: 'https://github.com/mhshuvoit/mern-facebook-lite',
        live: 'https://mern-facebook-lite-mhs.herokuapp.com'
    },
    {
        image: ShoppingCard,
        name: 'This is a shopping cart application with react',
        type: 'recent',
        github: 'https://github.com/mhshuvoit/react-shopping-cart-app',
        live: 'https://react-shopping-cart-mhs.netlify.app'
    },
    {
        image: PollAll,
        name: 'This is a simple poll app with react core features',
        github: 'https://github.com/mhshuvoit/react-poll-app',
        live: 'https://react-poll-app-mhs.netlify.app'
    },
    {
        image: TodoApp,
        name: 'This is a todo app with react core features',
        github: 'https://github.com/mhshuvoit/react-todo-app',
        live: 'https://react-todo-app-mhs.netlify.app'
    },
    {
        image: ReactBlogApp,
        name: 'Blog app but it is not working in live because upgrade required of this third party api. Check it locally.',
        github: 'https://github.com/mhshuvoit/blog-app',
        live: 'https://blog-app-mhs.netlify.app'
    },
    {
        image: WeatherApp,
        name: 'This is a simple weather app with DOM',
        github: 'https://github.com/mhshuvoit/js-weather-app-with-dom',
        live: 'https://js-weather-app-with-dom-mhs.herokuapp.com'
    },
    {
        image: MyStaticPortfolio,
        name: 'This is first portfolio with HTML, CSS',
        github: 'https://github.com/mhshuvoit/static-portfolio',
        live: 'https://static-portfolio-mhs.netlify.app'
    },
    {
        image: PstToHtml,
        name: 'PSD to HTML landing  page',
        github: 'https://github.com/mhshuvoit/psd-to-html',
        live: 'https://psd-to-html-mhs.netlify.app'
    },
    {
        image: LandingPage,
        name: 'A simple landing page with html, css and totally responsive',
        github: 'https://github.com/mhshuvoit/landing-page',
        live: 'https://landing-page-mhs.netlify.app'
    }
]

export default projects;
