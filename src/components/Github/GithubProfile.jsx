import React from 'react'
import GithubProfileCard from './GithubProfileCard'
import GithubProfileDetails from './GithubProfileDetails'

const GithubProfile = ({profile}) => {
    return (
        <>
            <section>
                <div className="row">
                    <div className="col-4">
                        <GithubProfileCard profile={profile}/>
                    </div>
                    <div className="col-8">
                        <GithubProfileDetails profile={profile}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GithubProfile