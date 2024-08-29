import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/index.jsx'
import About from '../pages/About/index.jsx'
import Services from '../pages/Services/index.jsx'
import News from '../pages/News/index.jsx'
import ContactUs from '../pages/ContactUs/index.jsx'
import Notfound from '../pages/Notfound/index.jsx'
import MainLayout from '../layout/index.jsx'

const router = createBrowserRouter([
 {
  path: '/',
  element: <MainLayout />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   {
    path: '/about',
    element: <About />,
   },
   {
    path: '/services',
    element: <Services />,
   },
   {
    path: '/news',
    element: <News />,
   },
   {
    path: '/contact',
    element: <ContactUs />,
   },
   {
    path: '/*',
    element: <Notfound />,
   },
  ],
 },
])

export default router
