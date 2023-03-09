function SearchPost({search, changeSearch}) {

    const handleChange = (e) => {
        changeSearch(e.target.value)
    }
    return (
        <div className="search_container">
            <span>🔍</span>
            <input
                value={search} 
                className="inputBox" 
                type="text" 
                id="search" 
                placeholder='Question about your dog?' 
                onChange={handleChange} 
            />  
        </div>
    )
}

export default SearchPost