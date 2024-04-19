import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="avatar/my_avatar.jpg" name="Vincent Xiao" />
      <div className="data">
        <Intro
          name="Vincent Xiao"
          title="Senior SRE"
          bio="Experienced full stack web developer with proficient work experience in SRE in startups."
        />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="HTML+CSS" icon="/icons/example-icon.png"></Skill>
      <Skill name="JavaScript" icon="/icons/example-icon.png"></Skill>
      <Skill name="Web Dev" icon="/icons/example-icon.png"></Skill>
      <Skill name="SRE" icon="/icons/example-icon.png"></Skill> */}
      <Skill name="HTML+CSS" emoji="💪🏻" color="#51e2f5"></Skill>
      <Skill name="JavaScript" emoji="💪🏻" color="#9df9ef"></Skill>
      <Skill name="Web Dev" emoji="💪🏻" color="#fff685"></Skill>
      <Skill name="SRE" emoji="😉" color="#a0d2eb"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    // You can just chain an image like this.
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="avatar" src={props.photoName} alt="{props.name}"></img>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
