import React,{useState,useEffect} from "react";
import axios from "axios";
const Search = () => {

     const [currentText,changeText] = useState('programming');
     const [results,setResults] = useState([]);

     useEffect( 
            ()  => {
                 const search = async () => {
                    const {data}  =  await axios.get('https://en.wikipedia.org/w/api.php',{
                          params: {
                              action : 'query',
                              list : 'search',
                              origin : '*',
                              format : 'json',
                              srsearch : currentText
                          }
                      });
                      setResults(data.query.search)
                 }

                 if(currentText && !results.length){
                    search();
                 }else{
                    const lastExecutionTime = setTimeout( () => {
                         if(currentText){
                              search();
                         }
                      },1000)
     
                      return () => {
                           clearTimeout(lastExecutionTime)
                      }
                 }
            },[currentText]
     );

     const renderedList = results.map(
          (result) => {
               return <div key={result.pageid} className="item"> 
                    
                      <div className="right floated content">
                           <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                                Go
                           </a>
                      </div>
                        <div className="content">
                           <div className="header">
                              {result.title} 
                           </div>
                           <span dangerouslySetInnerHTML = {{__html:result.snippet}}></span>
                         </div>
                      </div>
          }
     )
     
     return (
          <div className="ui form"> 
                <div className="field">
                     <label>Enter Search Term</label>
                     <input className="input" onChange= {(e) => changeText(e.target.value)}></input>
                </div>
                <div className="ui celled list"> {renderedList} </div>
          </div>
     );
}

export default Search;