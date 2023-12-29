import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorCode }) => {
  const navigate = useNavigate();

  // Check the error code and display a message accordingly
  const getMessage = () => {
    switch (errorCode) {
      case 404:
        return 'Oops! Page not found.';
      default:
        return 'An error occurred.';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <Helmet>
          <title>{`${errorCode} - Error`}</title>
        </Helmet>
        <h1 className="text-4xl font-bold mb-4">Error {errorCode}</h1>
        <p className="text-lg mb-4">{getMessage()}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
