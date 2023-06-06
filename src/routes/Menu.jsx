
import Navbar from '../componentsUi/Navbar';

import ProductList from "../components/ProductList"
import ProductSelection from '../components/ProductSelection';
import { useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar';
import CartHolder from '../componentsUi/CartHolder';
import Footer from '../componentsUi/Footer';



function Menu() {
    
    const [isWindow, setWindow] = useState(false);
    const [burgerData, SetBurgerData] = useState([]);
    const [filterProductList, SetProductList] = useState([]);
    const [getItemNumberData, SetItemData] = useState(0);
    function getNotiWindow(isWindowF) {

        setWindow(isWindowF)
        console.log(isWindow)
       
        
    }
    function getData(data) {
        SetBurgerData(data);
        SetProductList(data);
    }
    function ChangeCart(props) {

        console.log(props, "MENU page test")
        SetItemData(props);
    }

    function SearchBurger(UserInput) {
        console.log(UserInput);

        const NewList = [...burgerData].filter((burger) =>{
            if(burger.name.toLowerCase().includes(UserInput.toLowerCase())){
                return true;
            }
        })
        SetProductList(NewList);
    }

    useEffect(() => {
        fetch("http://localhost:9000/Burgers").then((res) => res.json()).then((data) => {getData(data);})
    },[])
  
    return ( <div>
        <Navbar/>
        <ProductSelection GetNotificationNotImplemented={getNotiWindow} />
        <CartHolder GetItems={getItemNumberData}/>
        <Searchbar SearchB={SearchBurger}/>
        <div className='productlist-container'>
            {
                filterProductList.map((burger) => (
                    <ProductList
                    key={burger.id}
                    name={burger.name}
                    image={burger.image}
                    price={burger.price}
                    CartHolder={ChangeCart}
                    />
                ))
            }
        </div>
        <Footer/>
        
        
    </div>);
}

export default Menu;