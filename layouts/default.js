import React from 'react'
import Head from 'next/head'

export default class extends React.Component {
  render () {
    return <div>
    <Head>
      <title>{this.props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {this.props.children}
  </div>
  }
}
