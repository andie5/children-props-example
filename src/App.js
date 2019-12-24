import React from "react";

// function ErrorBox({ children }) {
//   return <button>{children}</button>;
// }

function FirstChildOnly({ children }) {
  const items = React.Children.toArray(children);

  console.log("items", items);

  return <div>First child: {items.slice(0, 1)}</div>;
}

function LastChildOnly({ children }) {
  const items = React.Children.toArray(children);

  console.log("items", items);

  return <div>Last child: {items.slice(-1)[0]}</div>;
}

function Head({ children, number }) {
  const items = React.Children.toArray(children);

  console.log("items", items);

  return (
    <div>
      1st {number} children: {items.slice(0, number)}
    </div>
  );
}

function Tail({ children, number }) {
  const items = React.Children.toArray(children);

  console.log("items", items);

  return (
    <div>
      Last {number} children: {items.slice(-number)}
    </div>
  );
}

const App = () => {
  // return <ErrorBox>This is an error box</ErrorBox>;
  return (
    <div>
      <FirstChildOnly>
        <div>1st element</div>
        <div>2nd element</div>
      </FirstChildOnly>
      <br />
      <LastChildOnly>
        <div>1st element</div>
        <div>2nd element</div>
        <div>3rd element</div>
      </LastChildOnly>
      <br />
      <Head number={3}>
        <div>1st element</div>
        <div>2nd element</div>
        <div>3rd element</div>
        <div>4th element</div>
        <div>5th element</div>
      </Head>
      <br />
      <Tail number={2}>
        <div>1st element</div>
        <div>2nd element</div>
        <div>3rd element</div>
        <div>4th element</div>
      </Tail>
    </div>
  );
};

export default App;
