//home page: (imported the navbar that needs to be used)

import Navbar from "../components/navbar";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <style global jsx>
          {`
            body {
              background-color: white;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
            .main-container {
              width: 100%;
              text-align: center;
            }
            .columns {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              color: pink;
            }
            .column-left {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 5px;
            }
            .column-right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-shadow: 1px 1px 5px;
            }
            .column-left,
            .column-right {
              width: 45%;
              margin: 10px;
              padding: 10px;
              display: flex;
              align-content: center;
              justify-content: center;
              height: 250px;
              border-radius: 16px;
            }
            .link{
                color:pink;
            }
          `}
        </style>
        <h1>Welcome to my portfolio</h1>
        <div className="columns">
          <div className="column-left">
            <h2>Who am I?</h2>
            <p>
            I’m Kayla Dornan , junior full stack web developer currently studying at Hyperion dev. 
            I have numerous skills within development such as JavaScript , HTML , react , express 
            and MongoDB. I strive to solve all problems and request that will help ensure all sites work well, do what they are required 
            and are accessable to all users.{" "}
              <a href="./about">Read more about me here</a>
            </p>
          </div>
          <div className="column-right">
            <h2>My projects</h2>
            <p>
              My Github repository is linked where all source code can be seen and
              downloaded. I have a variety of projects all coded with HTML, CSS,
              JavaScript, Express, React , Next.js and MongoDB.
              <br />
              <a href="./projects">Click here to see some of my projects</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;