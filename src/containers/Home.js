import React from "react";
import "./Home.css";
import { Auth } from "aws-amplify";

export default function Home() {
  (async function() {
    try {
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(101, currentUserInfo);

      const currentSession = await Auth.currentSession();
      console.log(201, currentSession.isValid());
      console.log(301, currentSession.getIdToken());
      console.log(401, currentSession.getIdToken().payload.email);
      console.log(501, currentSession.getIdToken().payload["cognito:groups"]);
    } catch (e) {
      console.log("e ==>", e);
    }
  })();

  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    </div>
  );
}
