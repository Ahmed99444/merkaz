import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
var moment = require('moment');
var now = moment();


const Login = () => {

	let history = useHistory();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });

	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const email = data.email
			const password = data.password
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, null, {
				params: {
					email,
					password
				}
			})

			console.log(`Send request`);
			// 
			localStorage.setItem("time", res.timestamp);


			const dateThen = new Date(res.timestamp);
			const dateNow = new Date();

			const differenceDates = dateNow.getTime() - dateThen.getTime();
			if (differenceDates > 82800000) {
				throw Error()
			}
			else {
				localStorage.setItem("token", res.data);
				history.push("/main");
			}
			// history.push("/main");
			if (differenceDates) {
				throw error()
			}


			//44605766

			// window.location = "/main";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
			<div className={styles.navbarlogin}>
					<img src="https://content.vp4.me/HRCHAGSHAMA/Content/%d7%9c%d7%95%d7%92%d7%95%20%d7%97%d7%99%d7%99%d7%9d%20%d7%91%d7%a2%d7%95%d7%a6%d7%9e%d7%94%20%d7%9b%d7%99%d7%aa%d7%95%d7%91%20%d7%a9%d7%97%d7%95%d7%a8_458x456-r(2).png" alt="" srcset="" />
			</div>
			<div className={styles.login_container}>

				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>כניסה באמצעות דוא"ל וסיסמה</h1>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input}
							/>
							{error && <div className={styles.error_msg}>{error}</div>}

							<button type="submit" className={styles.green_btn}>
								המשך
							</button>


						</form>
					</div>
					{/* <div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div> */}
				</div>
			</div>
		</>

	);
};

export default Login;
