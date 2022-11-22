import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateForm = () => {
	const [breweryName, setBreweryName] = useState("");
	const [breweryType, setBreweryType] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");

	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/brewery", {
				breweryName,
				breweryType,
				address,
				city,
				state,
				postalCode,
				country,
				phone,
			})
			.then((res) => navigate("/"))
			.catch((err) => {
				const errMsgArr = [];
				const errRes = err.response.data.errors;
				for (const eachKey in errRes) {
					errMsgArr.push(errRes[eachKey].message);
				}
				setErrors(errMsgArr);
			});
	};

	return (
		<div>
			<div>
				<h3>Add a brewery</h3>
				<form onSubmit={onSubmitHandler}>
					{errors.map((err, index) => (
						<p style={{ color: "red" }} key={index}>
							{err}
						</p>
					))}
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">
							Brewery Name{" "}
						</label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setBreweryName(e.target.value)}
							value={breweryName}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">
							Brewery Type{" "}
						</label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setBreweryType(e.target.value)}
							value={breweryType}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">
							Street Address{" "}
						</label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setAddress(e.target.value)}
							value={address}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">City </label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setCity(e.target.value)}
							value={city}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">State </label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setState(e.target.value)}
							value={state}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">
							Postal Code{" "}
						</label>
						<input
							className="form-control-md"
							type="number"
							onChange={(e) => setPostalCode(e.target.value)}
							value={postalCode}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">Country</label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setCountry(e.target.value)}
							value={country}
						/>
					</div>
					<div className="mb-3">
						<label className="col-sm-2 col-form-label">
							Phone Number
						</label>
						<input
							className="form-control-md"
							type="text"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
						/>
					</div>
					<button
						className="btn btn-outline-info"
						style={{ marginLeft: "30px", marginBottom: "10px" }}>
						Add a brewery
					</button>
				</form>
				<Link to="/">
					<button
						className="btn btn-outline-primary"
						style={{ marginLeft: "30px" }}>
						Back to Brewery List
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CreateForm;
