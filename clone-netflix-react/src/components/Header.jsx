import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileModal from "./ProfileModal";
import './DropDownNotification.css'; 

class Header extends Component {
    state = {
        showProfile: false,
        showNotifications: false
    };

    toggleNotifications = () => {
        this.setState(prevState => ({
            showNotifications: !prevState.showNotifications
        }));
    };

    toggleProfileModal = () => {
        this.setState(prevState => ({
            showProfile: !prevState.showProfile
        }));
    };

    render() {
        return (
            <>
                <header className="sticky-top">
                    <Navbar variant="dark" bg="dark" expand="lg">
                        <Container className="container-fluid">
                            <Navbar.Brand href="#home">
                                <img
                                    src="./assets/images/netflix_logo.png"
                                    alt="neflix_logo"
                                    width="100px"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home" className="text-light">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link href="#tvshow" className="text-light">
                                        Tv Show
                                    </Nav.Link>
                                    <Nav.Link href="#movies" className="text-light">
                                        Movies
                                    </Nav.Link>
                                    <Nav.Link href="#added" className="text-light">
                                        Recently Added
                                    </Nav.Link>
                                    <Nav.Link href="#list" className="text-light">
                                        My list
                                    </Nav.Link>
                                </Nav>
                                <Nav>
                                    <div className="d-flex">
                                        <i className="bi bi-search right-icons" />
                                        <p className="text-light fw-bold m-0 align-self-center">EPICODERS</p>
                                        <i className="bi bi-bell-fill right-icons" onClick={this.toggleNotifications} />
                                        <div className={`dropdown-menu ${this.state.showNotifications ? 'show' : ''}`} style={{ position: 'absolute', right: '50px', top: '60px' }}>
                                            {this.state.showNotifications ? (
                                                <>
                                                    <a className="dropdown-item" href="#notification1">Studiare JAvascript</a>
                                                    <a className="dropdown-item" href="#notification2">Studia React</a>
                                                    <a className="dropdown-item" href="#notification3">Ogni tanto divertiti pure</a>
                                                </>
                                            ) : (
                                                <p className="dropdown-item">Nessuna nuova notifica</p>
                                            )}
                                        </div>
                                        <a href="#fake" onClick={this.toggleProfileModal}>
                                            <img
                                                src="./assets/images/logo_epicode.png"
                                                alt="profile_avatar"
                                                width="30px"
                                                height="30px"
                                                className="right-icons"
                                            />
                                        </a>
                                        <i className="bi bi-caret-down-fill right-icons" onClick={this.toggleProfileModal} />
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                <ProfileModal show={this.state.showProfile} closeModal={this.toggleProfileModal} />
            </>
        );
    }
}

export default Header;
