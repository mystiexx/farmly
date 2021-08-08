import React, { useState, useEffect } from "react";
import firebase from "../fire";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Authenticated from "../Components/Authenticated";
import Unauthenticated from "../Components/Unauthenticated";

function Home() {
    const [user, setUser] = useState("");

    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                setUser(user);
            } else {
                setUser(" ");
                localStorage.setItem("id", user.uid);
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <Router>
            {user ? <Authenticated /> : <Unauthenticated />}
            <Redirect to="/" />
        </Router>
    );
}

export default Home;
