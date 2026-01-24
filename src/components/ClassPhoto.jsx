function ClassPhoto({ url, caption }) {
    return (
        <div className="exec-member fade-in-up">
            <div className="exec-member-photo">
                <img src={url} alt={caption} className="exec-img" />
            </div>
            <p className="exec-caption">{caption}</p>
        </div>
    );
}

export default ClassPhoto;
