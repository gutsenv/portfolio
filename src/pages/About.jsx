import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  h3,
  p {
    color: #a0a0a0;
    font-size: 14px;
    margin: 0;
  }
`;

function About() {
  return (
    <Wrapper>
      <div>
        <h3>Programming Languages:</h3>
        <p>JavaScript, Typescript</p>
        {/* <p>Python</p> */}
        {/* <p>Bash</p> */}
      </div>
      <div>
        <h3>Frontend Libraries/Frameworks:</h3>
        <p>React (Next.js)</p>
        {/* <p>Svelte</p> */}
        {/* <p>Vue</p> */}
      </div>
      <div>
        <h3>State Management:</h3>
        <p>Redux, Zustand, MobX, Context API</p>
      </div>
      <div>
        <h3>Other Frontend Tools:</h3>
        <p>HTML5, CSS3 (Sass, Tailwind), Ant Design, Bootstrap, Material UI</p>
      </div>
      <div>
        <h3>Backend Technologies/Frameworks:</h3>
        <p>Node.js (Express), GraphQL, Rest API</p>
        {/* <p>Django</p> */}
        {/* <p>Firebase</p> */}
      </div>
      <div>
        <h3>Databases:</h3>
        <p>MongoDB, MySQL, Redis</p>
        {/* <p>PostgreSQL</p> */}
        {/* <p>Neon</p> */}
      </div>
      <div>
        <h3>Testing Tools:</h3>
        <p>Jest (Unit Tests), Cypress (End-to-end Tests)</p>
      </div>
      <div>
        <h3>Package Manager/Build Tools:</h3>
        <p>npm, webpack, Yarn, Vite</p>
      </div>
      <div>
        <h3>Version Control:</h3>
        <p>Git</p>
      </div>
      <div>
        <h3>CI/CD Tools:</h3>
        <p>Github Actions</p>
        {/* <p>Circle CI</p> */}
        {/* <p>Jenkins</p> */}
      </div>
      <div>
        <h3>Cloud Platforms:</h3>
        <p>AWS, Digital Ocean, Vercel, Netlify, Heroku</p>
      </div>
      <div>
        <h3>Agile Processes:</h3>
        <p>Scrum, Kanban</p>
      </div>
      <div>
        <h3>Others:</h3>
        <p>WebSockets, WebRTC</p>
      </div>
      <div>
        <h3>What i'm currently learning:</h3>
        <p>Shell Scripting (Bash)</p>
        <p>Cybersecurity Foundations (Cybrary)</p>
      </div>
    </Wrapper>
  );
}

export default About;
