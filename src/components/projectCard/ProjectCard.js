import React from "react";

const ProjectCard = () => {
  return (
    <>
      <Link to={`/gigs/cat=design`}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <img className="catimage" src="djfkfdjk" alt="catimage" />
            <div className="card-desc">
              <div>
                <h5 className="card-title">gigtitle</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
