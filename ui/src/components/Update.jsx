import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
	const [breweryName, setBreweryName] = useState("");
	const [breweryType, setBreweryType] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/brewery/${id}`)
			.then((res) => {
				setBreweryName(res.data.breweryName);
				setBreweryType(res.data.breweryType);
				setAddress(res.data.address);
				setCity(res.data.city);
				setState(res.data.state);
				setPostalCode(res.data.postalCode);
				setCountry(res.data.country);
				setPhone(res.data.phone);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const editBrewery = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8000/api/brewery/${id}`, {
				breweryName,
				breweryType,
				address,
				city,
				state,
				postalCode,
				country,
				phone,
			})
			.then(navigate("/"))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Link to="/">Brewery List</Link>
			<h3>Update Brewery</h3>
			<form onSubmit={editBrewery}>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Brewery Name</label>
					<input
						type="text"
						name="title"
						value={breweryName}
						onChange={(e) => {
							setBreweryName(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Brewery Type</label>
					<input
						type="text"
						name="text"
						value={breweryType}
						onChange={(e) => {
							setBreweryType(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Address </label>
					<input
						type="text"
						name="description"
						value={address}
						onChange={(e) => {
							setAddress(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">City </label>
					<input
						type="text"
						name="description"
						value={city}
						onChange={(e) => {
							setCity(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">State </label>
					<input
						type="text"
						name="description"
						value={state}
						onChange={(e) => {
							setState(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Postal Code </label>
					<input
						type="text"
						name="description"
						value={postalCode}
						onChange={(e) => {
							setPostalCode(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Country </label>
					<input
						type="text"
						name="description"
						value={country}
						onChange={(e) => {
							setCountry(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label className="col-sm-2 col-form-label">Phone Number </label>
					<input
						type="text"
						name="description"
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
				</div>
				<button className="btn btn-success" style={{ marginLeft: "30px" }}>
					Update Brewery
				</button>
			</form>
		</div>
	);
};

export default Update;
