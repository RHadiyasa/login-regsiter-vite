import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [datasets, setDatasests] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get("/data");
        setDatasests(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getData();
  });
  return (
    <div>
      <div>
        {datasets.map((data) => (
          <div key={data.id}>
            <div>{data.profile}</div>
            <Link to={data.link} target="_blank">
              <div>{data.link}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
