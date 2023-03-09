import Nav from './Nav.js';

function Home() {
    return (
        <div className="home">
            <Nav />
            <div className="home-container">
                <div className="search-container">
                    <div className="search-box">
                        <form action="" id="search-form"> 
                        {/* https://www.youtube.com/watch?v=35LJPwBpb34 */}
                            {/* Town */}
                            <select id="town" name="town" for="search-form">
                                <option value="any">Town:</option>
                            </select>
                            
                            {/* Make */}
                            <select id="make" name="make" for="search-form">
                                <option value="any">Make:</option>
                            </select>
                            
                            {/* Model */}
                            <select id="model" name="model" for="search-form">
                                <option value="any">Model:</option>
                            </select>
                            
                            {/* Min Price */}
                            <select id="min-price" name="min-price" for="search-form">
                                <option value="any">Min Price:</option>
                            </select>
                            
                            {/* Max Price */}
                            <select id="max-price" name="max-price" for="search-form">
                                <option value="any">Max Price:</option>
                            </select>
                            
                            {/* Min Miles */}
                            <select id="min-miles" name="min-miles" for="search-form">
                                <option value="any">Min Miles:</option>
                            </select>
                            
                            {/* Max Miles */}
                            <select id="max-miles" name="max-miles" for="search-form">
                                <option value="any">Max Miles:</option>
                            </select>
                            
                            {/* Colours */}
                            <fieldset id="colours">
                                <legend>Colours:</legend>

                                <input type="checkbox" id="red" name="red" value="1"></input>
                                <label for="red"> Red</label>

                                <input type="checkbox" id="blue" name="blue" value="1"></input>
                                <label for="blue"> Blue</label>
                                
                                <input type="checkbox" id="bronze" name="bronze" value="1"></input>
                                <label for="bronze"> Bronze</label>
                                
                                <input type="checkbox" id="black" name="black" value="1"></input>
                                <label for="black"> Black</label>
                                <br></br>
                                <input type="checkbox" id="gold" name="gold" value="1"></input>
                                <label for="gold"> Gold</label>
                                
                                <input type="checkbox" id="green" name="green" value="1"></input>
                                <label for="green"> Green</label>
                                
                                <input type="checkbox" id="grey" name="grey" value="1"></input>
                                <label for="grey"> Grey</label>

                                <input type="checkbox" id="lemon" name="lemon" value="1"></input>
                                <label for="lemon"> Lemon</label>
                                <br></br>
                                <input type="checkbox" id="orange" name="orange" value="1"></input>
                                <label for="orange"> Orange</label>
                                
                                <input type="checkbox" id="pink" name="pink" value="1"></input>
                                <label for="pink"> Pink</label>
                                
                                <input type="checkbox" id="silver" name="silver" value="1"></input>
                                <label for="silver"> Silver</label>
                                <br></br>
                                <input type="checkbox" id="white" name="white" value="1"></input>
                                <label for="white"> White</label>
                                
                                <input type="checkbox" id="yellow" name="yellow" value="1"></input>
                                <label for="yellow"> Yellow</label>

                                <input type="checkbox" id="pale-blue" name="pale-blue" value="1"></input>
                                <label for="pale-blue"> Pale Blue</label>
                            </fieldset>
                            
                            <input id="submit" type="submit" value="Search"></input>
                        </form>
                    </div>
                </div>
                <div className="title-container">
                    <h1>Find your newest motor with us!</h1>
                </div>
                <div className="about-text">
                    <h2>With plenty of vehicles to choose from, you will always...</h2>
                </div>
                <div className="about-text">
                    <h2>drive away happy!</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;