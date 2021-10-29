// import {Link} from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
 
export const Contactus = () => {

    const history = useHistory();
    const backTo = () => history.push('/users');

    return (
        <>
          <h1>ContactUS-Page</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Type a Message</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={backTo}>Submit</button>

            </form>
            {/* <Link to="/users">Back</Link> */}
        </>
    );
}