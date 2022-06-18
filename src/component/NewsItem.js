import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? 'https://c.ndtvimg.com/2022-05/ro6thkvo_devendra-fadnavis_625x300_16_May_22.jpg'
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
