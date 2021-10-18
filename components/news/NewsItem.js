import ImageApp from '../ui/ImageApp'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser'

const NewsItem = (props) => {
  const { image, heading, datePosted, startDate, postedBy, content } = props
  return (
    <div className="card border-0 my-1">
      <ImageApp src={image} alt={`${postedBy}:${heading}`}>
        <img className="card-img-top" />
      </ImageApp>
      <div className="card-body p-0 m-0">
        <h5 className="card-title py-1 m-0">{heading}</h5>
        <div className="card-text">
          <p className="text-muted p-0 m-0">Posted by {postedBy}</p>
          <p className="text-muted p-0 m-0">{datePosted}</p>
        </div>
        <div className="card-text text-truncate ">
          {ReactHtmlParser(content)}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default NewsItem
