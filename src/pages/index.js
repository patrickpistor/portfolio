import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="container">
      <h1 className="h1-on-light">H1</h1>
      <h2 className="on-light-text">H2</h2>
      <h3 className="on-light-text">H3</h3>
      <h4 className="on-light-text">H4</h4>

      <div className="large-space-vertical" />

      <div className="row">
        <p className="large-text on-light-text">Large Text</p>
        <div className="small-space-horizontal" />
        <p className="large-text medium on-light-text">Large Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="medium-text on-light-text">Medium Text</p>
        <div className="small-space-horizontal" />
        <p className="medium-text medium on-light-text">Medium Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="caption">Caption</p>
        <div className="small-space-horizontal" />
        <p className="caption alt">Caption - Alt</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="normal-text on-light-text">Normal Text</p>
        <div className="small-space-horizontal" />
        <p className="normal-text medium on-light-text">Normal Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="small-text on-light-text">Small Text</p>
        <div className="small-space-horizontal" />
        <p className="small-text medium on-light-text">Small Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <Link to="/page-2/" className="light-link">
        Hover This Link
      </Link>
    </div>
    <div className="container dark-bg">
      <h1 className="on-dark-text">H1</h1>
      <h2 className="on-dark-text">H2</h2>
      <h3 className="on-dark-text">H3</h3>
      <h4 className="on-dark-text">H4</h4>

      <div className="large-space-vertical" />

      <div className="row">
        <p className="large-text on-dark-text">Large Text</p>
        <div className="small-space-horizontal" />
        <p className="large-text medium on-dark-text">Large Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="medium-text on-dark-text">Medium Text</p>
        <div className="small-space-horizontal" />
        <p className="medium-text medium on-dark-text">Medium Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="caption">Caption</p>
        <div className="small-space-horizontal" />
        <p className="caption alt">Caption - Alt</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="normal-text on-dark-text">Normal Text</p>
        <div className="small-space-horizontal" />
        <p className="normal-text medium on-dark-text">Normal Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="small-text on-dark-text">Small Text</p>
        <div className="small-space-horizontal" />
        <p className="small-text medium on-dark-text">Small Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <Link to="/page-2/" className="dark-link">
        Hover This Link
      </Link>
    </div>
    <div className="container tan-bg" />
    <div className="container dark-tan-bg" />
    <div className="container off-white-bg" />
    <div className="container">
      <div className="floating-label">
        <input className="floating-input" type="text" placeholder=" " />
        <label>NAME</label>
      </div>
      <div className="button">
        <p>SUBMIT</p>
      </div>
      <div className="outline">
        <p>CANCEL</p>
      </div>
    </div>
  </div>
)

export default IndexPage
