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
	const [access, setAccess] = useState(false)


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });

	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const email = data.email
			const password = data.password
			const url = "http://localhost:5000/api/auth";
			const response = await axios.post(url, null, {
				params: {
					email,
					password
				}
			})

			const json = await response
			
			if(json.status == 200)
			{
				await console.log(json.data.token);
				await localStorage.setItem('token',json.data.token)
				await localStorage.setItem("time", json.data.timestamp);
				
				await history.push("/main");
				// await window.location.reload(false)
			}
			else if(json.status == 404){
				
				console.log(`remove`);
				await localStorage.clear()
				await console.log(json.data.message);
				await setError(error.json.data.message);
				
			}
			
		} catch (error) {
			if (
				error.json &&
				error.json.status >= 400 &&
				error.json.status <= 500
			) {
				setError(error.json.data.message);
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
