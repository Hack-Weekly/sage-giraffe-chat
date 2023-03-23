// import './page.css';

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
        <form className="form p-16 bg-slate-grey-400 text-white rounded-lg">
            <h3 className='header text-center mb-3'>Login to live chat</h3>
            <div className="form-group p-2">
                <label className="block" htmlFor="name">Email Address</label>
                <input className="w-full" type="email" />
            </div>
            <div className="form-group p-2">
                <label className="block" htmlFor="password">Password</label>
                <input className="w-full" type="password" />
            </div>
            <div className="form-group p-2">
                <button type="submit" className="primary-button">Submit</button>
            </div>
        </form>
    </div>
  );
}
                                                                   