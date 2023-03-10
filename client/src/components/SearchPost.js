function SearchPost({search, changeSearch}) {

    const handleChange = (e) => {
        changeSearch(e.target.value)
    }
    return (
        <div className="w-2/6 mx-auto">
            <div className="basic-box w-full">
                <div className="mx-auto w-5/6">
                    <input
                        value={search} 
                        className="basic-box w-full" 
                        type="text" 
                        id="search" 
                        placeholder='Question about your dog?' 
                        onChange={handleChange} 
                    />  
                </div>
            </div>
        </div>
    )
}

export default SearchPost