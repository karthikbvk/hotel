import './Menustyle.css' 



export default function MenuCard({
  Menudata 
} ){
 
  return (
    <>
        <section className="main-card--cointainer"> 
        {Menudata.map((ele)=> {

          const { id,name,category,description,image} = ele;
          return(
            <>
              <div className="card-container" key={ele.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle" >{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title"> {category}</h2>
                    <span className="card-description subtle">
                     {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                    <img src={image} alt="images" className="card-media" />  

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
              </>
          );
          })
        }
              
      </section>
    </>
  );
}

