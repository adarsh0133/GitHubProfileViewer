import React from 'react'

const GithubProfileCard = ({ profile }) => {
    console.log(profile)
    return (
        <>
            <div className="container-fluid">
                <div className="card p-2 m-auto" style={{ width: "18rem" }}>
                    <img style={{ width: '100%', height: "200px", objectFit: "contain" }} src={profile.avatar_url ?? "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"} className="card-img-top" alt="..." />
                    <div className="card-body text-center ">
                        <h6 className="card-title">{profile.name}</h6>
                        <h6>{profile.email ?? <span className='text-danger'>Email not public</span>}</h6>
                        <a className='text-white text-decoration-none' href={`${profile.html_url}`}>
                            <button className='btn btn-primary'>
                                Go To GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GithubProfileCard