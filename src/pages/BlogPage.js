import { useState, useEffect } from "react";
import "./BlogPage.css";
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://eu-west-2.cdn.hygraph.com/content/cmmjib7gl00jy07w3l1yofe0h/master';

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NzMwODA1NjUsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21tamliN2dsMDBqeTA3dzNsMXlvZmUwaC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNTAwODA3MTgtNGM0ZC00NzZmLWEyY2UtOWZlN2RiYjllYzlkIiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.Oe1Loax6ITu2NJTFrldTwNENRYKc1juksyVzGQZkf3wbwsbAHJNkBqJczEpenK4jYHhv9s_-z2ZI7GruS1NXJr4ZZt6Jz8XdH7LCLvMWqhD6oGMx-fX4Eq0CQWkdpE8CrsLmQA9J2gdpaV5WGBwza861MR66aVWN5dGlfGmtAyYAxA8b4GAH4CCFjRHHbw54L6NueZiZX3msEe5ge7rWd6Ol609sAWwXqgvzt0yhvw922Th70SG9FuuxV4aa4reu7VMLEwZGNcnAF61OCnTomqBSaQ3S28PVWSOFPo13Vl0tothl3mUWvFllkhVsCcZiq1OWqRx2HSTjzTh36IqbtfWj4NZjjygo_6Wg6sfbLBrEm40ZYTSJPlqvVNbGW2dwp1rL1dxH2wWHyHg16FyV5wOc5H22si_d5mEN-9KRXksXZsYrIt_joUGoWjNVPKjILV7cH5JHH7VWBdbImcSk8dyiark0eQIUcx8Qfwby5er7QFaaMu-shD2iYKa4GeJjBp4ZDM20PlLnAUkHq_-ON3mJr9qDrt_-pqeooP9WzUMKOawJ0zrXsp0dIIyLdGJtZWC6kjuvZIlvAtOXa7Ky0gvHW6Z8DgArcXq-Kix1AiO2j1LqmjCHHlMeR5ltKCo5TAA7WqYn6Z7ZrK4R0zESc2tkcGsVXUnGMv5PV3g8VdI',
  },
});

const filters = [
  "Recent",
  "Storytelling",
  "Art Style",
  "Character Design"
];

export default function BlogPage(){

  const [activeFilter,setActiveFilter] = useState("Recent");
  const [activePost,setActivePost] = useState(null);
  const [posts,setPosts] = useState([]);

  // Fetch posts from Hygraph
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const query = `
        {
  demoModel14Mar20260012s(orderBy: date_DESC) {
    id
    title
    category
    author
    date
    excerpt
    content
    slug
    image {
      url
    }
  }
}
      `;
      const data = await client.request(query);
     
      const formattedPosts = data.demoModel14Mar20260012s.map(p=>({
        id: p.id,
        title: p.title,
        category: p.category,
        author: p.author,
        date: p.date,
        excerpt: p.excerpt,
        content: p.content,
        slug: p.slug,
        image: p.image?.url || ''
      }));
      setPosts(formattedPosts);
    };
    fetchPosts();
  }, []);

  const sortedPosts = [...posts].sort(
    (a,b)=> new Date(b.date) - new Date(a.date)
  );

  const filteredPosts =
    activeFilter === "Recent"
      ? sortedPosts
      : sortedPosts.filter(
          post => post.category === activeFilter
        );

  if(activePost){
    return(
      
      <div className="wrapper">
       
      <div className="blogPage articleView">
        <button
          className="backButton"
          onClick={()=>setActivePost(null)}
        >
          ← Back
        </button>

        <article className="blogArticle">

          <h1>{activePost.title}</h1>

          <div className="articleMeta">
            <span className="articleAuthor">
              By {activePost.author}
            </span>
            <span>{activePost.category}</span>
            <span>{activePost.date}</span>
          </div>

          <img src={activePost.image} alt="" />

          <div className="articleContent">
            {activePost.content}
          </div>

        </article>

      </div>
      </div>
    );
  }

  return(
    <div className="wrapper">
      
    
    <div className="blogPage">

      <section className="blogHero">
        <h1>Our Blog</h1>
        <p>
          A blog exploring comic book art, storytelling, and the creative process behind building compelling worlds and characters.
        </p>
      </section>

      <div className="blogFilters">
        {filters.map(filter=>(
          <button
            key={filter}
            className={activeFilter===filter ? "active" : ""}
            onClick={()=>setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="blogGrid">
        {filteredPosts.map((post,index)=>(
          <div className="blogCard" key={index}>

            <div className="blogImage">
              <img src={post.image} alt="" />
            </div>

            <div className="blogContent">

              <span className="blogCategory">
                {post.category}
              </span>

              <h2>{post.title}</h2>

              <span className="blogAuthor">
                By {post.author}
              </span>

              <span className="blogDate">
                {post.date}
              </span>

              <p>{post.excerpt}</p>

              <button
                className="readMore"
                onClick={()=>setActivePost(post)}
              >
                Read Article →
              </button>

            </div>

          </div>
        ))}
      </section>

    </div>
    </div>
  );
}