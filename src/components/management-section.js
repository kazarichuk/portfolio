import "./management-section.css";
const ManagementSection = () => {
  return (
    <div className="management-support-parent">
      <div className="management-support">{`Management & Support`}</div>
      <div className="manage-parent">
        <div className="manage">
          <div className="badge-neutral-parent8">
            <div className="badge-neutral52">
              <div className="label54">Agile</div>
            </div>
            <div className="badge-neutral52">
              <div className="label54">Scrum</div>
            </div>
            <div className="badge-neutral52">
              <div className="label54">Kanban</div>
            </div>
            <div className="badge-neutral52">
              <div className="label54">Workshops</div>
            </div>
          </div>
          <div className="badge-neutral-parent8">
            <div className="badge-neutral56">
              <div className="label54">
                <span>{`Crazy 8 `}</span>
                <span className="brainstorming">(brainstorming)</span>
              </div>
            </div>
            <div className="badge-neutral52">
              <div className="label54">Atlassian</div>
            </div>
          </div>
          <div className="badge-neutral-parent8">
            <div className="badge-neutral56">
              <div className="label54">Teams</div>
            </div>
            <div className="badge-neutral56">
              <div className="label54">Data Analytic</div>
            </div>
            <div className="badge-neutral56">
              <div className="label54">
                <span>{`T-Short `}</span>
                <span className="brainstorming">(estimation)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="manage">
          <div className="badge-neutral-parent8">
            <div className="badge-neutral56">
              <div className="label54">Google Analytic</div>
            </div>
            <div className="badge-neutral56">
              <div className="label54">Checking: CTR/CTA/APRU</div>
            </div>
          </div>
          <div className="badge-neutral56">
            <div className="label54">Google Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;
