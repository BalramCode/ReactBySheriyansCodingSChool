
const Card = (props) => {
  return (
        <div key={props.index} className="m-5 ">
          <img
            src={props.elm.download_url}
            alt="img"
            className="w-30 h-30 rounded-lg"
          />
          <p>{props.elm.author}</p>
        </div>
      )
}

export default Card
