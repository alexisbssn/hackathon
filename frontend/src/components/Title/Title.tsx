import StyledTitle from "./Title.styled"

const Title = ({text}: {text: String}) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  )
}

export default Title