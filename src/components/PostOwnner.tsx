"use client";

export default function PostOwnner( information:any) {
  return         <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/pond.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{information.name} {information.id}</span>
  </div>

  <span>{information.detail}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">100 คน</span>
  </div>
  <hr className="m-0 border" />
</div>;
}
