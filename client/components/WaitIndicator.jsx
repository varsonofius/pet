import React from 'react'
import { useSelector } from 'react-redux'

export default function WaitIndicator () {
  const waiting = useSelector(state => state.waiting)

  return (
    <>
      <div className="waitIndicator">
        { waiting
          ? <img src="/images/loading.gif" alt="loading indicator" className="waitIndicator--img"/>
          : '\u00a0' }
      </div>
    </>
  )
}
