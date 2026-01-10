function SectionTitle({ lead, highlight }) {
  return (
    <div className="section-title">
      <h2>
        {lead} <span>{highlight}</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
