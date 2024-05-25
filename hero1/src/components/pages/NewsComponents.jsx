import React,{useEffect,useState} from 'react'

function NewsComponents() {
    const [news, setNews]=useState([])
    useEffect(()=>{
       fetch("https://newsapi.org/v2/everything?q=apple&from=2024-04-08&to=2024-04-08&sortBy=popularity&apiKey=ede10291dace4b8089d9be06f7bb1264")
       .then((response)=>{
        return response.json();
    
       }).then((data)=>{
        setNews(data.articles)
    }).catch((e)=>{
            console.log("Error",e)

        })
       
    },[])
   
  return (
    <>
    <div className="row">
        <div className="col-md-12">
            <h1>News list</h1>
        </div>
        
    </div>
    <div className="row">
        {
            news.map((items, index)=>{
                return(
                    <div className='col-md-4' mb-3 key={index}>

        
           
                    <div className="card" >
                    <img src={items.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">{items.description}</p>
                    <a href={items.url} className="btn btn-primary">Read More</a>
                    </div>
                   </div>
                  
               
               
               
       
       
               
       
               </div>
       

                )
            })
        }
       
    </div>
    </>
  )}


export default NewsComponents