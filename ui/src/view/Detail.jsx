import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
	const [brewery, setBrewery] = useState([]);
	const params = useParams();

	const url = `https://api.openbrewerydb.org/breweries/${params.breweryId}`;

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
					<h1>{brewery.name}</h1>

					<h4>
						"
						{brewery?.brewery_type?.charAt(0).toUpperCase() +
							brewery?.brewery_type?.slice(1)}
						" Brewery
					</h4>
				</div>
			) : null}
			<div>
				<p>{brewery.street}</p>
				<p>
					{brewery.city}, {brewery.state}
				</p>
				<p>
					{brewery.postal_code}, {brewery.country}
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
		</>
	);
};

export default Detail;
