import { Fragment } from 'react'
import NewsList from '../components/news/NewsList'
import ImageApp from '../components/ui/ImageApp'
import { getNews } from '../helpers/api-utils'

const HomePage = (props) => {
  const { news } = props
  console.log(news)
  return (
    <Fragment>
      <div className="px-4 py-5 my-5 text-center">
        <ImageApp
          src="https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png"
          width="72"
          height="57"
        >
          <img className="d-block mx-auto mb-4" />
        </ImageApp>
        <h1 className="display-5 fw-bold">British Broadcasting Corp.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Breaking news, sport, TV, radio and a whole lot more. The BBC
            informs, educates and entertains - wherever you are, whatever your
            age.
          </p>
        </div>
      </div>
      <NewsList news={news} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const results = await getNews()
  return {
    props: {
      news: results.data,
    },
  }
}
export default HomePage
