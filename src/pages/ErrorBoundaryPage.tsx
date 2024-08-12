import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="flex inset-0 absolute w-fit h-fit m-auto p-2 text-center">
      <div className="flex flex-col gap-6">
        <p className="text-bloomBlack lg:text-lg md:text-base xs:text-base">
          {
            isRouteErrorResponse(error) && error.status === 404
              ? "This page doesn't exist! Please navigate to Home Page."
              : "Oops! Something went wrong. Please navigate to Home Page."
          }
        </p>
        <button>
          Home Page
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
