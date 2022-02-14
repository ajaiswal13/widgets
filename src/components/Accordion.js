import React,{useState} from "react";



const Accordion = ({items}) => {
       const [indexClicked,storeIndex] = useState(0);

       const onTileClick = (index) => {
            storeIndex(index);
       }
       const displayElement = items.map(
             (item,index) => {

                     const active = index === indexClicked ? 'active' : '';
                     return (
                             <React.Fragment key={item.title}>
                                  <div className={`title ${active}`} onClick={() => onTileClick(index)}>
                                   <i className="dropdown icon"></i>
                                   {item.title}
                                  </div>
                                  <div className={`content ${active}`}>
                                   <p> {item.content} </p>
                                  </div>
                             </React.Fragment>
                     );
             }
       );
       return <div className="ui styled accordion">
             {displayElement}
       </div>;
};

export default Accordion;