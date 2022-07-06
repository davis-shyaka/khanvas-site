import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="khanvas__blog section__padding" id="blog">
    <div className="khanvas__blog-heading">
      <h1 className="gradient__text">
        A lot is happening with the SHADOWS, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="khanvas__blog-container">
      <div className="khanvas__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 1, 2021" text="Who are SHADOWS?" />
      </div>
      <div className="khanvas__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 7, 2021" text="What is a SANDBOX?" />
        <Article
          imgUrl={blog03}
          date="Sep 14, 2021"
          text="BAKAME - The Debt Collector or Criminal?"
        />
        <Article imgUrl={blog04} date="Sep 21, 2021" text="What are Prayers?" />
        <Article
          imgUrl={blog05}
          date="Sep 28, 2021"
          text="UMBRAS - The Strongest SHADOWS"
        />
      </div>
    </div>
  </div>
);

export default Blog;
