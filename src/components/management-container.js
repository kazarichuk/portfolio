import "./management-container.css";
const ManagementContainer = () => {
  return (
    <div className="management-support-group">
      <div className="management-support1">{`Management & Support`}</div>
      <div className="manage-group">
        <div className="manage2">
          <div className="badge-neutral90">
            <div className="management-support1">Agile</div>
          </div>
          <div className="badge-neutral90">
            <div className="management-support1">Scrum</div>
          </div>
          <div className="badge-neutral90">
            <div className="management-support1">Kanban</div>
          </div>
          <div className="badge-neutral90">
            <div className="management-support1">Workshops</div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">
              <span>{`Crazy 8 `}</span>
              <span className="brainstorming1">(brainstorming)</span>
            </div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">
              <span>{`T-Short `}</span>
              <span className="brainstorming1">(estimation)</span>
            </div>
          </div>
          <div className="badge-neutral90">
            <div className="management-support1">Atlassian</div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">Teams</div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">Data Analytic</div>
          </div>
        </div>
        <div className="manage2">
          <div className="badge-neutral94">
            <div className="management-support1">Google Analytic</div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">Checking: CTR/CTA/APRU</div>
          </div>
          <div className="badge-neutral94">
            <div className="management-support1">Google Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementContainer;
