import { Input } from "../Input";
import { useState } from "react";
import { useHistory } from "react-router";

export const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    // const emailHandler = (e) => {
    //     console.log(setEmail(e.target.value))
    // }
    // const passHandler = (e) => {
    //     console.log(setPass(e.target.value))
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Dummy code
        if (email === "m@g.com" && pass === "123") {
          localStorage.setItem("token", "123");
          //   history.push("/main-page");
          history.replace("/users");
          console.log("hiii")
        } 
        // else setIsValidCred(false);
      };
    

    return (
        <> 
            <h1>Log-in Page</h1>
         <form onClick={handleSubmit}>
            <Input type="email" value={email} setValue={setEmail} placeholder="Email"/>
            <Input type="password" value={pass} setValue={setPass} placeholder="password"/>
            <button  className="btn btn-primary">
                Log-in Now
            </button>
         </form>
        </>
    );
}