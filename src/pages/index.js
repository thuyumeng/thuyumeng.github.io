// https://www.hotelfulva.com/tutorial/part-two/
import React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <div>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home Page" />

export default IndexPage