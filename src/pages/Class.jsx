import React from 'react';
import ClassPhoto from '../components/ClassPhoto';
import '../css/Class.css';
import alphaClassImage from '../images/Alpha Class.jpg'; // Import the image

function Class() {
    const execMembers = [
        { title: "Consul", img: "https://i.pravatar.cc/400?u=1" },
        { title: "Pro Consul", img: "https://i.pravatar.cc/400?u=2" },
        { title: "Quaestor", img: "https://i.pravatar.cc/400?u=3" },
        { title: "Annotator", img: "https://i.pravatar.cc/400?u=4" },
        { title: "Magister", img: "https://i.pravatar.cc/400?u=5" },
        { title: "Kustos", img: "https://i.pravatar.cc/400?u=6" },
        { title: "Tribune", img: "https://i.pravatar.cc/400?u=7" },
        { title: "House Manager", img: "https://i.pravatar.cc/400?u=8" },
        { title: "Recruitment Chair", img: "https://i.pravatar.cc/400?u=9" },
    ];
    // const execMembers = [
    //     { title: "Consul", img: "images/member1.jpg" },
    //     { title: "Pro Consul", img: "images/member2.jpg" },
    //     { title: "Quaestor", img: "images/member3.jpg" },
    //     { title: "Annotator", img: "images/member4.jpg" },
    //     { title: "Magister", img: "images/member5.jpg" },
    //     { title: "Kustos", img: "images/member6.jpg" },
    //     { title: "Tribune", img: "images/member7.jpg" },
    //     { title: "House Manager", img: "images/member8.jpg" },
    //     { title: "Recruitment Chair", img: "images/member9.jpg" },
    // ];
    

    return (
        <>
            <section className="class-header">
                <div className="container">
                    <h1 className="class-title fade-in-up">Alpha Class</h1>
                </div>
            </section>

            <section className="class-photo-section">
                <div className="class-photo">
                    <img src={alphaClassImage} alt="Alpha Class" className="class-photo-img" /> 
                </div>
            </section>

            <section className="exec-board-section">
                <div className="container">
                    <h2 className="exec-board-title fade-in-up">Executive Board</h2>
                    <div className="exec-board-grid">
                        {execMembers.map((member, index) => (
                            <ClassPhoto key={index} url={member.img} caption={member.title} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Class;
