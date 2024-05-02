import React, { useState, useEffect } from "react";
import axios from 'axios';
import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PageContent from "../components/PageContent";

function HomePage() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1903/planes/')
      .then(response => {
        setPlanes(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <Banner />
      <PageContent>
        <PlaneList planes={planes} />
      </PageContent>
    </div>
  );
}

export default HomePage;