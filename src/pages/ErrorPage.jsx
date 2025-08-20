import { useNavigate } from "react-router"

function ErrorPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <h3>
      There was a problem with the page
      </h3>
      <p>Try again in a couple of minutes</p>
      <p>Our devs are still learning... 😅</p>
      <button onClick={handleGoBack}> Go back</button>
    </div>
  )
}
export default ErrorPage