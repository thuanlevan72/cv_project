import React from 'react'
import  "../style/NotFound.css"
function NotFound() {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>404 Error Page</h1>
    <p className="zoom-area"><b>Ôi Không</b> Có thể đã lỗi sảy ra</p>
    <section className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
    </section>
    <div className="link-container">
      <a target="_blank" href="không có link đâu" className="more-link">bấm vào đây để liên hệ để sửa lỗi</a>
    </div></>
  )
}

export default NotFound