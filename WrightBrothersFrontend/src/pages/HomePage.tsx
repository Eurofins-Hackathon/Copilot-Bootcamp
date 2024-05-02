import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PageContent from "../components/PageContent";
import Spinner from "../components/Spinner"; // Assuming you have a Spinner component

async function fetchPlanes() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // Add a delay of 3 seconds
  const response = await axios.get('http://localhost:1903/planes/');
  return response.data;
}

function HomePage() {
  const { isLoading, isError, data: planes } = useQuery('planes', fetchPlanes);

  return (
    <div>
      <Banner />
      <PageContent>
        {isLoading ? (
          <Spinner /> // Display Spinner when loading
        ) : isError ? (
          <div>There was an error!</div> // Display error message on error
        ) : (
          <PlaneList planes={planes} />
        )}
      </PageContent>
    </div>
  );
}

export default HomePage;