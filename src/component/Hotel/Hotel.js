import React,{useState} from 'react'
import MenuCard from'./Menu/MenuCard'
import Menu from './Menu/Menuapi'
import Navbar from './Navbar/Navbar';

const updatedList = [...new Set( Menu.map((list) => {
    return  list.category;
       }
    )
    ),"All"].sort();  

export default function Hotel() { 
    const [Menudata,setMenudata] = useState(Menu);
    const [menuList,setmenuList] = useState(updatedList)

    const filterItems =(category) =>{
        if(category === 'All'){
            setMenudata(Menu);
            return;
        }
    
    const updateItem = Menu.filter((item)=>{
        return item.category === category;
    });
    setMenudata(updateItem); 
}
  return (
    <>
    <Navbar Menudata={Menudata} menuList={menuList} filterItems={filterItems}/>
    <MenuCard Menudata={Menudata}/>
    </>
  );
};

