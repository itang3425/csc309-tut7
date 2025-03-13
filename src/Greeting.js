import { useState } from "react"

function Greeting() {
  const buttonGreetingText = "Show Greeting"
  const buttonHideText = "Hide Greeting"
  const hideGreetingText = "Click the button to see a greeting."
  const greetingText = "Hello from JavaScript!"

  const [hide, setHide] = useState(0)
  const [greeting, setGreeting] = useState(hideGreetingText)
  const [buttonText, setButtonText] = useState(buttonGreetingText)

  const changeGreetText = () => {
    if (hide == 0) {
      setGreeting(greetingText)
      setButtonText(buttonHideText)
      setHide(1)
    } else {
      setGreeting(hideGreetingText)
      setButtonText(buttonGreetingText)
      setHide(0)
    }
  }

  return (
    <>
      <p>{greeting}</p>
      <button onClick={changeGreetText}>{buttonText}</button>
    </>
  )
}

export default Greeting
