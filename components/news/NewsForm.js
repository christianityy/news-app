import { useRef, useState } from 'react'
import FileBase64 from 'react-file-base64'
import RichTextEditor from '../ui/RichTextEditor'
import ImageApp from '../ui/ImageApp'
const NewsForm = (props) => {
  const headingRef = useRef()
  const authorRef = useRef()
  const [imageFile, setImageFile] = useState()
  const [richTextData, setRichTextData] = useState('<em>Content here...</em>')
  const richTextHandler = (event, editor) => {
    setRichTextData(editor.getData())
  }
  const fileInputHandler = ({ base64 }) => {
    setImageFile(base64)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const enteredHeading = headingRef.current.value
    const enteredAuthor = authorRef.current.value

    const formData = {
      heading: enteredHeading,
      postedBy: enteredAuthor,
      content: richTextData,
      datePosted: new Date(),
      startDate: new Date(),
      image: imageFile,
    }

    props.onAddNews(formData)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="heading">Heading</label>
        <input
          ref={headingRef}
          type="text"
          id="heading"
          className="form-control"
          placeholder="Heading..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="heading">Content</label>
        <RichTextEditor onChange={richTextHandler} />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          ref={authorRef}
          type="text"
          id="author"
          className="form-control"
          placeholder="Author"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <br />
        <FileBase64 onDone={fileInputHandler} />
      </div>
      {imageFile && <ImageApp src={`${imageFile}`} />}
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default NewsForm
