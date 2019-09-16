import React from 'react';
import { IClickerState, IState } from '../reducers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface INaveProps { // Nav bar tracks clicker state thanks to reducers
    clicker: IClickerState,
}
// Nav bar creation
export class NavComponent extends React.PureComponent<INaveProps> {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-dark bg-dark display-front nav-pad" /* make basic nav*/>
                <div className="navbar-header c-pointer shift-left">
                    <Link to="/home" className="unset-anchor">
                        <img className="img-adjust-position rev-logo" alt="revature" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" /*button to turn on navbar and expand it*/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto margin-nav">
                        <li className="nav-item active">
                            <Link to="/home" className="unset-anchor nav-link">Home</Link>
                        </li>


                        <li className="nav-item active" /* clicker is state is displayed here*/>
                            <Link to="/clicker" className="unset-anchor nav-link">Clicker {this.props.clicker.clicks}</Link>
                        </li>

                        <li className="nav-item active dropdown">
                            <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</div>
                            <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                                <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div>
                                <div className="dropdown-item"><Link to="/poke" className="unset-anchor nav-link active">Poke Finder</Link></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        clicker: state.clicker,
    }
}

export default connect(mapStateToProps)(NavComponent);
