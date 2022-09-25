import { Link,useHistory  } from "react-router-dom";
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
			const url = "https://hrcclient.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);


			// 
			localStorage.setItem("time", res.timestamp);

			
			const dateThen = new Date(res.timestamp);
			const dateNow = new Date();

			const differenceDates = dateNow.getTime() - dateThen.getTime();
			if(differenceDates>82800000){
				throw Error()
			}
			else{
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
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>דף כניסה למערכת</h1>
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
								המשך >
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
	);
};

export default Login;
