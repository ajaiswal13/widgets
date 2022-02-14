import React, { useState ,useEffect,useRef, useReducer} from "react";
const Dropdown = ({options,selectedOption,onOptionChange}) => {

    const [showClass,toggleClasses] = useState(false);
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener("click",(event) => {

            if(ref.current.contains(event.target)){
                      return;
            }
            
            toggleClasses(false);
          },{ capture: true }
        );
      }, []);

    const optionsDropdown = options.map(
         (option)  => {
             if(option.value === selectedOption.value){
                       return null;
             }

             return (
             <div key={options.value} className="item" onClick={() => onOptionChange(option)}>
                 {option.label}
             </div>
             );
         }
    );

    console.log(ref.current);
     return (
      <div ref={ref} className="ui form">
          <div className="field">
              <label className="label">
                  Select any fruit
              </label>
              <div className={`ui selection dropdown ${showClass ?'visible active' : ''} `} onClick={() => toggleClasses(!showClass)}>
                <i className="dropdown icon"></i>
                <div className="text">{selectedOption.label}</div>
                <div className={`menu ${showClass ?'visible transition' : ''}`}>
                   {optionsDropdown}
                </div>
              </div>
          </div>
       </div>
     );
}

export default Dropdown;