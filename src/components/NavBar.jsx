import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-dark navbar-dark">
                <div className="d-flex px-2">
                    <a className="navbar-brand" href="#.">GitHub</a>
                    <div className="bg-white" style={{width:"30px",height:"30px",borderRadius:"100%"}}>
                        <img className='w-100 h-100 object-cover' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar