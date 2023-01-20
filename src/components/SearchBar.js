import React from "react";

const SearchBar = () =>{
const onInputChange = (event) =>{
        console.log(event.target.value);
    }
    return(
            <div className="ui segment">
                <form className="ui form">
                    <div>
                        <label>Image Search</label>
                        <input type="text" onChange={onInputChange}/>
                    </div>
                </form>
            </div>
    );
}
 export default SearchBar;

