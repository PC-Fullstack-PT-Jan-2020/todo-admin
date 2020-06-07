import React from 'react'

export default (props) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        {props.children}
      </div>
    </div>
  )
}