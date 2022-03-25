import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

export default function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not found" />
        <h3>Ohh! Page is not found</h3>
        <p>Seems like we can't find the page you are looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  )
}
