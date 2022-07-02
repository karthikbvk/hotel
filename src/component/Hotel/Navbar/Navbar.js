import React from 'react' 


export default function Navbar({
    Menudata,
    filterItems ,
    menuList
    })
    { 

         
  return (  
    <> 
    <nav className="navbar">
        <div className="btn-group"> 
              {
                menuList.map((ele)=>{  
                    return( 
                        <button  
                        className="btn-group__item"
                        onClick={()=> filterItems(ele)}>
                        {ele}
                        </button>
                    );
                })
              }
              
              
        </div>
      </nav>
    </>
  )
}

