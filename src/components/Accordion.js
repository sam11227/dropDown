import React , {useState} from "react";

const Accordion = ({items}) =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) =>{
        console.log('index',index);
    }
    const renderdItems = items.map((item , index) =>{
        const active = index === activeIndex ? 'active' : '';
        return (
            <div
             key={item.title}>
            <div className={`title ${active}`}
            onClick={() => setActiveIndex(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </div>)
    })
    return(
        <div className="ui style accordion">
            {renderdItems}            
        </div>
    )
};

export default Accordion;
