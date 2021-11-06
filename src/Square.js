import React from 'react'

function Square({ color }) {
  const square = (props) => {
    return (
      <div className="square">
        <div style={{ backgroundColor: props.color }} className="square"></div>
        <p className="text-bold">{ props.color }</p>
      </div>
    )
  }

  return (
    <div>
      {color.map((color) => (
        <Square color={color} />
      ))}
    </div>
  )
}

export default Square;