import React from 'react'

export default (props) => {
  return (
    <div className="modal-overlay" onClick={props.dismiss}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}