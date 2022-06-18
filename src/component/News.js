import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
    Country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super()

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c25a0efcb7ba4a8ebace7f662c1a5901&page=1`
    let data = await fetch(url)
    let parsedData = await data.json()

    this.setState({ articles: parsedData.articles })
  }
  handleprevClick = async () => {
    console.log('previous')
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=c25a0efcb7ba4a8ebace7f662c1a5901&page= ${this.state.page - 1}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()

    console.log('Next')
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    })
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=c25a0efcb7ba4a8ebace7f662c1a5901&page= ${this.state.page + 1}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()

    console.log('Next')
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>
          News Update - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ''
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              )
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevClick}
          >
            &laquo; Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    )
  }
}
export default News
