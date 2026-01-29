import { render, screen } from '@testing-library/react'
import { Button } from '../components/Button'

test('ボタンの文字が表示される', () => {
  render(<Button label="送信" />)
  expect(screen.getByText('送信')).toBeInTheDocument()
})
