import { fireEvent, render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("When the component loads, the default text should show", () => {
  render(<Greeting />)
  const textElement = screen.getByText("Click the button to see a greeting.")
  expect(textElement).toBeInTheDocument()
  const buttonElement = screen.getByText("Show Greeting")
  expect(buttonElement).toBeInTheDocument()
})

test("When the button is clicked, the default text should not show", () => {
  render(<Greeting />)
  const button = screen.getByText("Show Greeting")
  fireEvent.click(button)
  // when getting things that may not exist, we should use queryByText
  const textElement = screen.queryByText("Click the button to see a greeting.")
  expect(textElement).toBeNull()
  const buttonElement = screen.queryByText("Show Greeting")
  expect(buttonElement).toBeNull

  const newTextElement = screen.getByText("Hello from JavaScript!")
  expect(newTextElement).toBeInTheDocument()
  const newButtonElement = screen.getByText("Hide Greeting")
  expect(newButtonElement).toBeInTheDocument()
})
