import './App.css';
import {BrowserRouter , Routes , Route , Link , NavLink} from 'react-router-dom'

//PAGES
import HOME from './PAGES/HOME.jsx';
import Product from './PAGES/PRODUCT.jsx';
import Contact from "./PAGES/Contact.jsx"

function App() {
  return (
    <BrowserRouter>
    <header className=' h-1' >
      <nav className=' ml-14 items-center'>
        
        <div className="company">SHOP.CO</div>
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='product'>Product</NavLink>
        <NavLink to='Contact'>Contact Us</NavLink>
        <div className="right-section">
    
          <input
            className="input pl-5 mb-5 "
            type="text"
            placeholder="Search for products..."
          />
          <img className="shopping-cart mb-5 justify-end" src="./ICONS/shopping-cart.png" />
          </div>
       
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<HOME />} />
        <Route path='Product' element={<Product />} />
        <Route path='Contact' element={<Contact />}/>
      </Routes>
    </main>
    </BrowserRouter>


);
}

export default App;