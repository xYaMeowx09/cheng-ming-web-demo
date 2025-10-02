export default function CaseCard({ backgroundImageUrl, caseCategory }) {
  return (
    <div
      className="case-card-mask bg-cover d-flex justify-content-end align-items-end h-100"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <p className="case-card-text">{caseCategory}</p>
    </div>
  );
}
