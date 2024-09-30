import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import CustomDropdown from "../components/CustomDropdown";

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
  }, []); // [] -> dirender ketika page pertama kali di load.

  console.log(datasets);

  
  if (datasets.length < 16) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-4">
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[0].link}
          linkKpmr={datasets[1].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[2].link}
          linkKpmr={datasets[3].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[4].link}
          linkKpmr={datasets[5].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[6].link}
          linkKpmr={datasets[7].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[8].link}
          linkKpmr={datasets[9].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[10].link}
          linkKpmr={datasets[11].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[12].link}
          linkKpmr={datasets[13].link}
        />
        <CustomDropdown
          name={"Strategis"}
          inheren={"Inheren"}
          kpmr={"KMPR"}
          linkInheren={datasets[14].link}
          linkKpmr={datasets[15].link}
        />
      </div>
    </div>
  );
};

{
  /* {datasets.map((data) => (
  <div key={data.id}>
    <div>{data.profile}</div>
    <Link to={data.link} target="_blank">
      <div>{data.link}</div>
    </Link>
  </div>
))} */
}
export default ProfilePage;
