import './page.css';

export default function Login() {
  return (
    <>
        <form className="form">
            <h1 className='header'>Login to live chat</h1>
            <div className="form-group">
                <label htmlFor="name">Email Address</label>
                <input type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    </>
  );
}
                                                                   