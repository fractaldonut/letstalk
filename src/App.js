import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We now have Auth!</h1>
//       </header>
//       <AmplifySignOut />
//     </div>
//   );
// }

// export default withAuthenticator(App);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App!</h1>
      </header>
      <Test />
    </div>
  );
}

export default App;
