import React from "react";

import { Link } from "react-router-dom";
import CreatedBrewery from "../components/CreatedBrewery";

const BreweryList = (props) => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Brewery List</h1>
			<Link to="/brewery/new">
				<button className="btn btn-info" style={{ marginBottom: "5px" }}>
					Add a brewery{" "}
				</button>
			</Link>
			<div>
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
					{props.brewery.map((brewery, i) => {
						return (
							<tbody key={i}>
								<Link to={`/brewery/${brewery.id}`}>
									<td>{brewery.name.slice(0, 20) + "... "}</td>
								</Link>
								<td>{brewery.brewery_type}</td>
								<td>{brewery.city}</td>
								<td>{brewery.state}</td>
								<td>{brewery.street}</td>
								<td>{brewery.postal_code.slice(0, 5)}</td>
								<td>
									<button
										className="btn btn-outline-danger"
										onClick={() =>
											props.deleteBrewery(brewery.id)
										}>
										Delete
									</button>
								</td>
							</tbody>
						);
					})}
				</table>
				<CreatedBrewery />
			</div>
		</div>
	);
};

export default BreweryList;
