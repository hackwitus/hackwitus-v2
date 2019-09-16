import React, { useState, useEffect } from 'react';

const Spoiler = props => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.show) {
      setShow(props.show)
    } else {
      setShow(props.show);
    }
  }, [props.show])

  return (
    <div className="spoiler">
      <h3 className="spoiler__title" onClick={() => props.onShow(props.key)}>{props.title}</h3>
      <p className={`spoiler__content ${show ? "spoiler__content--show" : ""}`}>{props.content}</p>
    </div>
  )
}

export default Spoiler;