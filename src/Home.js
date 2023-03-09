function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="search-container">
                    <div className="search-box">
                        <form action="" id="search-form">

                            <select id="town" name="town" for="search-form">
                                <option value="any">Town:</option>
                            </select>

                            <select id="make" name="make" for="search-form">
                                <option value="any">Make:</option>
                            </select>

                            <select id="model" name="model" for="search-form">
                                <option value="any">Model:</option>
                            </select>

                            <select id="min-price" name="min-price" for="search-form">
                                <option value="any">Min Price:</option>
                            </select>

                            <select id="max-price" name="max-price" for="search-form">
                                <option value="any">Max Price:</option>
                            </select>

                            <select id="min-miles" name="min-miles" for="search-form">
                                <option value="any">Min Miles:</option>
                            </select>

                            <select id="max-miles" name="max-miles" for="search-form">
                                <option value="any">Max Miles:</option>
                            </select>

                            <fieldset id="colours">
                                <legend>Colours:</legend>

                                <input type="checkbox" id="red" name="red" value="1"></input>
                                <label for="red"> Red</label>

                                <input type="checkbox" id="blue" name="blue" value="1"></input>
                                <label for="blue"> Blue</label>
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