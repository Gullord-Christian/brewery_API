import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreatedBrewery = () => {
	const [refresh, setRefresh] = useState(true);
	const [createdBrewery, setCreatedBrewery] = useState([]);

	const reloadList = () => {
		setRefresh(!refresh);
	};

	const deleteBrewery = (breweryId) => {
		axios
			.delete(`http://localhost:8000/api/brewery/${breweryId}`)
			.then((res) => {
				reloadList();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/breweries")
			.then((res) => {
				setCreatedBrewery(res.data);
			})
			.catch((err) => console.log(err));
	}, [refresh]);

	return (
		<div>
			{createdBrewery.length > 0 ? (
				<table className="table table-striped">
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>City</th>
						<th>State</th>
						<th>Address</th>
						<th>Zip Code</th>
						<th>Actions</th>
					</tr>
					{createdBrewery.map((brewery, i) => {
						return (
							<tbody key={i}>
								<Link to={`/brewery/created/${brewery._id}`}>
									<td>
										{brewery.breweryName.slice(0, 20) + "... "}
									</td>
								</Link>
								<td>{brewery.breweryType}</td>
								<td>{brewery.city}</td>
								<td>{brewery.state}</td>
								<td>{brewery.address}</td>
								<td>{brewery.postalCode}</td>
								<td>
									<button
										className="btn btn-outline-danger"
										style={{ marginRight: "5px" }}
										onClick={() => {
											deleteBrewery(brewery._id);
										}}>
										Delete
									</button>
									<Link to={`/brewery/edit/${brewery._id}`}>
										<button className="btn btn-outline-secondary">
											Edit
										</button>
									</Link>
								</td>
							</tbody>
						);
					})}
				</table>
			) : null}
		</div>
	);
};

export default CreatedBrewery;
