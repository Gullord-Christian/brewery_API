import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CreatedDetail = () => {
	const [brewery, setBrewery] = useState([]);
	const { id } = useParams();

	const url = `http://localhost:8000/api/brewery/${id}`;

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setBrewery(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, [url]);

	return (
		<>
			<Link to="/">Brewery List</Link>
			{brewery ? (
				<div>
					<h1>{brewery.breweryName}</h1>

					<h4>
						"
						{brewery?.breweryType?.charAt(0).toUpperCase() +
							brewery?.breweryType?.slice(1)}
						" Brewery
					</h4>
				</div>
			) : null}
			<div>
				<p>{brewery.address}</p>
				<p>
					{brewery.city}, {brewery.state}
				</p>
				<p>
					{brewery.postalCode}, {brewery.country}
				</p>
			</div>
			<div>
				<p>{brewery.phone}</p>
				{brewery.website_url ? (
					<p>
						{" "}
						<a href={brewery.website_url}>
							<div>Brewery Website</div>
						</a>
					</p>
				) : null}
			</div>
			{brewery.longitude && brewery.latitude ? (
				<div>
					Longitude:<strong> {brewery.longitude}</strong>
					<br />
					Latitude: <strong> {brewery.latitude}</strong>
				</div>
			) : null}
			<Link to={`/brewery/edit/${brewery._id}`}>
				<button className="btn btn-secondary">Edit Brewery</button>
			</Link>
		</>
	);
};

export default CreatedDetail;
