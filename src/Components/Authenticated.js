import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "./Sidebar.style";
import Messages from "./Messages";
import { PageTransition } from "@steveeeie/react-page-transition";
import Feed from "./Feed";
import Market from "../pages/Market";
import Activity from "../pages/Activity";
import Profile from "../pages/Profile";
import Chat from '../pages/Chat'

export default function Authenticated() {
    return (
        <Container>
        <Sidebar />
        <Route
            render={({ location }) => {
                return (
                    <PageTransition
                        preset="roomToBottom"
                        transitionKey={location.pathname}
                    >
                        <Route exact path="/" component={Feed} />
                        <Route exact path="/user/market" component={Market} />
                        <Route exact path="/user/activity" component={Activity} />
                        <Route exact path="/user/profile" component={Profile} />
                        <Route exact path="/user/chat" component={Chat} />
                    </PageTransition>
                );
            }}
        />
        <Messages />
        <Redirect to='/'/>
    </Container>
    )
}
