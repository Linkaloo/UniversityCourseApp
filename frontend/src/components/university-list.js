import React, { useState, useEffect } from "react";
import UniversityDataService from "../services/university";
//import { Link } from "react-router-dom";

const UniversityList = props => {
    const [universities, setUniversities] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchZip, setSearchZip] = useState("");

    useEffect(() => {
        retrieveUniversities();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    }

    const onChangeSearchZip = e => {
        const searchZip = e.target.value;
        setSearchZip(searchZip);
    }

    const retrieveUniversities = () => {
        UniversityDataService.getAll()
            .then(res => {
                console.log(res.data);
                setUniversities(res.data.universities);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const find = (query, by) => {
        UniversityDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setUniversities(response.data.universities);
            })
            .catch(e => {
                console.log(e);
        });
    };

    const findByName = () => {
        find(searchName, "name")
    };
    
    const findByZip = () => {
        find(searchZip, "zipcode")
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

            <div className="input-group col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by zip"
                    value={searchZip}
                    onChange={onChangeSearchZip}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={findByZip}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="row">
                {universities.map((university) => {
                    const address = `${university.zipcode}`;
                    return(
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{university.name}</h5>
                                    <p className="card-text">
                                        <strong>Address: </strong>{address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )  
                })}
            </div>

        </div>
    )
}


export default UniversityList;