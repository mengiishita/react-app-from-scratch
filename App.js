import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="heading">Hello from JSX</h1>;

// React Functional Component
const Title = () => <h2>Title component</h2>;

// Component composition
const HeadingComponent = () => {
  return (
    <div className="container">
      {/* React element inside React component */}
      {heading}
      <Title />
      <h3>Functional Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering components
root.render(<HeadingComponent />);
