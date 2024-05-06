import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PageContent from "../components/PageContent";
import PlaneSpinner from "../components/PlaneSpinner";

const fetchPlanes = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)); // Add delay
  const response = await axios.get('http://localhost:1903/planes/');
  return response.data;
};

function HomePage() {
  const { isLoading, isSuccess, isError, data: planes } = useQuery('planes', fetchPlanes);

  return (
    <div>
      <Banner />
      <PageContent>
        {isLoading || isError ? (
          <PlaneSpinner isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
        ) : (
          <PlaneList planes={planes} />
        )}
      </PageContent>
    </div>
  );
}

export default HomePage;