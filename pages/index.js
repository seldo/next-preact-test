import React from 'react'
import Layout from '../layouts/default'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return <Layout title="woo">
      <h1>Some kind of page</h1>
      <div>
        This is a thing!
      </div>
    </Layout>
  }
}
