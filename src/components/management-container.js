import "./management-container.css";
const ManagementContainer = () => {
  return (
    <div className="management-support-parent">
      <div className="management-support">{`Management & Support`}</div>
      <div className="manage-parent">
        <div className="manage">
          <div className="badge-neutral41">
            <div className="management-support">Agile</div>
          </div>
          <div className="badge-neutral41">
            <div className="management-support">Scrum</div>
          </div>
          <div className="badge-neutral41">
            <div className="management-support">Kanban</div>
          </div>
          <div className="badge-neutral41">
            <div className="management-support">Workshops</div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">
              <span>{`Crazy 8 `}</span>
              <span className="brainstorming">(brainstorming)</span>
            </div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">
              <span>{`T-Short `}</span>
              <span className="brainstorming">(estimation)</span>
            </div>
          </div>
          <div className="badge-neutral41">
            <div className="management-support">Atlassian</div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">Teams</div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">Data Analytic</div>
          </div>
        </div>
        <div className="manage">
          <div className="badge-neutral45">
            <div className="management-support">Google Analytic</div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">Checking: CTR/CTA/APRU</div>
          </div>
          <div className="badge-neutral45">
            <div className="management-support">Google Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementContainer;
