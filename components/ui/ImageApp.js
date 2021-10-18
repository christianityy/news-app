import Image from "next/image"
const ImageApp = (props) => {
  return (
    <Image src={props.src} width="300" height="190">
      {props.childrens}
    </Image>
  )
}

export default ImageApp
