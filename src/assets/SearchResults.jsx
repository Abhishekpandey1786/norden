import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { keyword } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Search Results for: "{keyword}"</h2>
      {/* Here you can filter or display matching items based on keyword */}
    </div>
  );
}

export default SearchResults;
