import "./management-section.css";
const ManagementSection = () => {
  return (
    <div className="management-support-parent">
      <div className="management-support">{`Management & Support`}</div>
      <div className="manage">
        <div className="badge-neutral-parent">
          <div className="badge-neutral56">
            <div className="label58">Agile</div>
          </div>
          <div className="badge-neutral56">
            <div className="label58">Scrum</div>
          </div>
          <div className="badge-neutral56">
            <div className="label58">Kanban</div>
          </div>
          <div className="badge-neutral56">
            <div className="label58">Workshops</div>
          </div>
        </div>
        <div className="badge-neutral-parent">
          <div className="badge-neutral60">
            <div className="label58">
              <span>{`Crazy 8 `}</span>
              <span className="brainstorming">(brainstorming)</span>
            </div>
          </div>
          <div className="badge-neutral56">
            <div className="label58">Atlassian</div>
          </div>
        </div>
        <div className="badge-neutral-parent">
          <div className="badge-neutral60">
            <div className="label58">Teams</div>
          </div>
          <div className="badge-neutral60">
            <div className="label58">Data Analytic</div>
          </div>
          <div className="badge-neutral60">
            <div className="label58">
              <span>{`T-Short `}</span>
              <span className="brainstorming">(estimation)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="manage1">
        <div className="badge-neutral-parent">
          <div className="badge-neutral60">
            <div className="label58">Google Analytic</div>
          </div>
          <div className="badge-neutral60">
            <div className="label58">Checking: CTR/CTA/APRU</div>
          </div>
        </div>
        <div className="badge-neutral60">
          <div className="label58">Google Ads</div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;
