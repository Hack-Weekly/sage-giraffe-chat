// import './page.css';

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
        <form className="form p-16 bg-slate-grey-400 text-white ">
            <h3 className='header text-center'>Login to live chat</h3>
            <div className="form-group">
                <label htmlFor="name">Email Address</label>
                <input type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" />
            </div>
            <div className="form-group">
                <button type="submit" className="primary-button  text-center">Submit</button>
            </div>
        </form>
    </div>
  );
}
                                                                   