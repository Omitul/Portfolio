"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-center text-2xl">Something went wrong!</h2>
      <div className="flex items-center justify-center text-red-600">
        <button className="text-2xl" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
