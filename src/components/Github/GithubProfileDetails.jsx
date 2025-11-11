import React from 'react'

const GithubProfileDetails = ({profile}) => {

    return (
        <>
            <div className="container-fluid">
                <div className="card p-2 m-auto">
                    <div className="card-header">
                        <span className="badge text-bg-primary me-2">Followers:{profile.followers ?? "N/A"}</span>
                        <span className="badge text-bg-success me-2">Following:{profile.following ?? "N/A"}</span>
                        <span className="badge text-bg-info text-white">Repos:{profile.public_repos ?? 0}</span>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title"><b>Bio-</b> {profile.bio ?? "No bio provided"}</h6>
                        <p><b>Company- </b>{profile.company ?? <span className='text-danger'>Company not specified</span>}</p>
                        <p className="card-text"><b>Location- </b>{profile.location ?? "Location not specified"}</p>
                        <p className="card-text"><b>Created- </b>{profile.created_at}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GithubProfileDetails