function WayToTeach(props) {
  const {title, description} = props

  return (
    <li>
      <p>
        <strong>{title}</strong>{description}
      </p>
    </li>
  )
}

export default WayToTeach