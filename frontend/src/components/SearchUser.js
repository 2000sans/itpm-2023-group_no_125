import axios from "axios";
import { useEffect, useState } from "react";

function SearchUser() {
    const [searchby, setSearchBy] = useState("num");
    const [keyword, setKeyword] = useState("");

    function search(e) {
        e.preventDefault();
        window.location.replace(`http://localhost:3000/users/search/${searchby}/${keyword}`);
    }
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <br></br>
            <div style={{ width: "50%", margin: "auto" }}>
                <center>
                    <form role="search" onSubmit={search}>
                        <div className="row">
                            <div className="col-8">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                                    setKeyword(e.target.value);
                                }} required />
                            </div>
                            <div className="col-0">
                                <button type="submit">Search</button>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-2">
                                <b>Search By</b>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="searchby" id="flexRadioDefault1" value="num" onClick={(e) => {
                                    setSearchBy(e.target.value);
                                }} required />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    User ID
                                </label>
                            </div>
                        </div>
                    </form>
                </center>
            </div>
            <br></br>
        </div>
    )

}



export default SearchUser;