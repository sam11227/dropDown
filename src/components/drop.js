import React, { useEffect, useState , useRef, useContext } from "react";

const Dropdown = ({ options , selected , onSelectedChange, label}) => {

    const [open, setopen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current.contains(event.target)){
                return;
            }
            setopen(false);
        },{ capture:true});
    }, []);

    // const options = useContext(Dropdata);
    // console.log('here' options)
    const renderedOptions = options.map((option) =>{
        if(option.value === selected.value){
            return null;
        }
        
        return(
            <div 
            key={option.value} 
            option={options}
            className="item"
            onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div 
                onClick={() => setopen(! open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;