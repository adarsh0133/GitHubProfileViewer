import React, { useState } from 'react'
import GithubProfile from './Github/GithubProfile';

let Client_id = "Iv23livG36XmHAUNHNcl"
let Client_secret = "e986db5ac9625ef18bb33749fe66e25b20bd4ada"

const GithubProfileSearchApp = () => {
    const [username, setUsername] = useState('');
    const [getUserData, setGetUserData] = useState({})

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getGitHubData(username);
        setUsername('')
    }

    const getGitHubData = async(username) => {
        let res = await fetch(`https://api.github.com/users/${username}?client_id=${Client_id}&client_secret=${Client_secret}`);

        let data = await res.json();

        setGetUserData(data);
    }

    return (
        <>
            <div className="p-4">
                <div className="mb-4">
                    <h1>Github Profile Search App</h1>
                    <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt? Facilis ad ab, distinctio repudiandae quae facere similique ipsam blanditiis? At sunt deserunt nesciunt unde, eaque ducimus in inventore praesentium voluptatem quo excepturi ea impedit blanditiis tenetur voluptatum reprehenderit, nihil dolorum aperiam mollitia sit fugit. Necessitatibus fuga fugit unde modi!</p>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="col-3 d-flex">
                                <input type="text" className='form-control me-3' placeholder='enter username' value={username} onChange={handleChange} />
                                <input type="submit" value='Search' className='btn btn-dark' />
                            </div>
                        </form>
                    </div>
                </div>
                <GithubProfile profile={getUserData}/>
            </div>
        </>
    )
}

export default GithubProfileSearchApp