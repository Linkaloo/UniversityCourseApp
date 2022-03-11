import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UniversityDataService from "../services/university";

const UniversityList = (props) => {
  const [universities, setUniversities] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveUniversities();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveUniversities = () => {
    UniversityDataService.getAll()
      .then((res) => {
        console.log(res.data);
        setUniversities(res.data.universities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const find = (query, by) => {
    UniversityDataService.find(query, by)
      .then((response) => {
        setUniversities(response.data.universities);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "name");
  };

  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {universities.map((university) => {
          const {name} = university
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <Link to={"/university"}>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversityList;
