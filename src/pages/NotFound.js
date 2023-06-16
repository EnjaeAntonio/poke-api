import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Error Not Found</title>
      </Helmet>
      <h1>Not Found</h1>
    </div>
  )
}

export default NotFound;