import React, { Component } from 'react';
import './OnlineShop.css'
import logo from '../assets/logo.png'
import baju1 from '../assets/baju1.jpg'
import kain8 from '../assets/kain8.jpg'
import baju2 from '../assets/baju2.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    // useHistory,
    Redirect,
    // useLocation,
    useParams,
    withRouter
} from 'react-router-dom';

function OnlineShop() {
    return (
        <Router>
            <div className="header">
                <img src={logo} alt="" />
                <AuthButton />

                <ul>
                    <li className="TopBar-1" id="TB1">
                        <Link className="Link-1" to="/home">Home</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link-1" to="/data">Data Batik</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/data" component={Data} />
                </Switch>
            </div>
        </Router>
    )
}
//digunakan untuk autentification
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
        <p id="warning-log" >
            You are not Log in!
        </p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

function Home() {
    return (
        <div className="Home">
            <h2>Halaman Batik</h2>
            <div className="grid">
                <div className="row">
                    <div className="col-sm">
                        <img src={baju1} alt="Gambar Thumbnail Artikel" />
                        <h3>Baju Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Baju Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={baju2} alt="Gambar Thumbnail Artikel" />
                        <h3>Baju Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                </div>
                {/* <div className="row">
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

function Data() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            {/* <h2>Data Barang</h2> */}
            <ul>
                <li className="TopBar-2">
                    <Link to={`${url}/DataBaju`}>Data Baju Batik</Link>
                </li>
                <li className="TopBar-2">
                    <Link to={`${url}/DataKain`}>Data Kain Batik</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "DataBaju") {
        return (
            <div className="Data-baju">
                <h1>{dataId}</h1>
                <div className="table-batik">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                        </tr>
                        <tr>
                            <td>Baju Batik 01</td>
                            <td><img src={baju1} alt="baju1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Baju Batik 02</td>
                            <td><img src={baju1} alt="baju1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Baju Batik 03</td>
                            <td><img src={baju1} alt="baju1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Baju Batik 04</td>
                            <td><img src={baju1} alt="baju1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Baju Batik 05</td>
                            <td><img src={baju1} alt="baju1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                    </table>
                </div>
            </div >
        )
    } else if (dataId === "DataKain") {
        return (
            <div className="Data-kain">
                <h1>{dataId}</h1>
                <div className="table-batik">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                        </tr>
                        <tr>
                            <td>Kain Batik 01</td>
                            <td><img src={kain8} alt="kain8" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Kain Batik 02</td>
                            <td><img src={kain8} alt="kain8" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Kain Batik 03</td>
                            <td><img src={kain8} alt="kain8" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Kain Batik 04</td>
                            <td><img src={kain8} alt="kain8" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>Kain Batik 05</td>
                            <td><img src={kain8} alt="kain8" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default OnlineShop;