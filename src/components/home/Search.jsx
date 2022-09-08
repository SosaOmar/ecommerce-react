import React from 'react'

const Search = () => {
  return (
    <form action="" className='search-form'>
        <input className='search-form__input' type="text" placeholder='What are you looking for?'/>
        <button className='search-form__btn-search'><i className="fi fi-rr-search"></i></button>
    </form>
  )
}

export default Search