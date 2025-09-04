import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div>
      <div
        className="card h-100 position-relative"
        style={{ overflow: "visible" }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "10",
          }}
        >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F4a%2Fc9%2F568cd189456d930f093fe0384559%2Fguatemala-daily-life-68751.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
        <a href={newsUrl} target="_ blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
