import React,{useState,useEffect} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title:'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'How do we show content with React?',
        content: 'You use React by creating Components'
    },
    {
        title: 'Why is react useful for Engineers?',
        content: 'React is a famous JS library among Engineers'   
    }
];

const options = [
    { 
       label : 'Strawberry' ,
       value : 'Strawberry'
    },
    {
        label : 'Apple' ,
        value : 'Apple'
    },
    {
        label : 'Mango' ,
        value : 'Mango'
    }
];



const App = () => {
    const[selectedState,setSelected]  = useState(options[0])
    const[showDropdown,setShowDropdown] = useState(true)

    return (
        <button>Toggle dropdown</button>
        <div>
        {/*<Search></Search>*/}
          <Dropdown options={options} selectedOption={selectedState} onOptionChange={setSelected}></Dropdown>
        </div>
     );
};

export default App;