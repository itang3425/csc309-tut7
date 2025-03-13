import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const incrementCounter = () => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </>
  )
}

export default Counter
