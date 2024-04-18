import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar
        className="avatar"
        photoName="avatar/my_avatar.jpg"
        name="Vincent Xiao"
      />
      <div className="data">
        <Intro
          name="Vincent Xiao"
          title="Senior SRE"
          bio="Experienced full stack web developer with proficient work experience in SRE in startups."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill name="HTML+CSS" icon="/icons/example-icon.png"></Skill>
      <Skill name="JavaScript" icon="/icons/example-icon.png"></Skill>
      <Skill name="Web Dev" icon="/icons/example-icon.png"></Skill>
      <Skill name="SRE" icon="/icons/example-icon.png"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <h3>{props.name}</h3>
      <img src={props.icon} alt={props.name}></img>
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.title}</p>
      <p>{props.bio}</p>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt="{props.name}"></img>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
