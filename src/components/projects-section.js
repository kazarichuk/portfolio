import { useMemo } from "react";
import "./projects-section.css";
const ProjectsSection = ({ propAlignSelf, propAlignSelf1, propAlignSelf2 }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const projectsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const codeStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  return (
    <div className="projects-parent" style={frameDivStyle}>
      <div className="projects" style={projectsStyle}>
        Projects
      </div>
      <div className="code2" style={codeStyle}>
        <div className="badge-neutral11">
          <div className="label13">Banking</div>
        </div>
        <div className="badge-neutral11">
          <div className="label13">EdTech</div>
        </div>
        <div className="badge-neutral11">
          <div className="label13">SaaS</div>
        </div>
        <div className="badge-neutral11">
          <div className="label13">Retail</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
