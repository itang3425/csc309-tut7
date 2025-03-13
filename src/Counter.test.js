import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

test("When the component loads, the default count should be 0", () => {
  render(<Counter />)
  const count = screen.getByText("0")
  expect(count).toBeInTheDocument()
})

test("When the button is clicked, the count should increment", () => {
  render(<Counter />)
  const button = screen.getByText("Increment Counter")
  fireEvent.click(button)
  // when getting things that may not exist, we should use queryByText
  const textElement = screen.queryByText("0")
  expect(textElement).toBeNull()

  const newTextElement = screen.getByText("1")
  expect(newTextElement).toBeInTheDocument()
})
