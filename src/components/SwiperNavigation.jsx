export default function SwiperNavigation({ onPrev, onNext }) {
  return (
    <div className="d-flex justify-content-end align-items-center p-4">
      <button type="button" className="btn border-0 me-4" onClick={onPrev}>
        <i className="bi bi-chevron-double-left text-warning"></i>
      </button>
      <button type="button" className="btn border-0" onClick={onNext}>
        <i className="bi bi-chevron-double-right text-warning"></i>
      </button>
    </div>
  );
}
