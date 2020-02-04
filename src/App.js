import React from "react";

const Dialog = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  const correctChildren = ["Title", "Body", "Footer"];
  const incorrect = childrenArray.find(child => {
    console.log("CHILD:", child.type.name);
    return !correctChildren.includes(child.type.name);
  });

  if (incorrect) {
    console.log("You have passed an incorrect child", incorrect);
    return null;
  }

  return <div style={{ border: "1px solid black" }}>{children}</div>;
};

const Title = ({ children }) => {
  return <h1 style={{ textAlign: "left" }}>{children}</h1>;
};

const Footer = ({ children }) => {
  return <div style={{ textAlign: "right" }}>{children}</div>;
};

const Body = ({ children }) => {
  return <div style={{ textAlign: "left" }}>{children}</div>;
};

const Wrong = () => {
  return;
};

const App = () => {
  return (
    <Dialog>
      <Title>This is a dialog component</Title>
      <Body>This is the body</Body>
      <Footer>Footer</Footer>
    </Dialog>
  );
};

export default App;
