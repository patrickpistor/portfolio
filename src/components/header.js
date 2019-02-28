import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    let scrollTop = event.srcElement.body.scrollTop
    let itemTranslate = Math.min(0, scrollTop / 3 - 60)

    this.setState({
      scrollY: itemTranslate,
    })
  }

  render() {
    return (
      <div className={this.state.scrollY < 0 ? 'header' : 'header-no-shadow'}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100vw',
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0, fontSize: 24 }}>
            <Link to="/" className="title">
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}
