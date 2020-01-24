import Header from "./Header";

const layoutStyle = {
  margin: "20px",
  padding: "20px",
  border: "1px solid #DDD"
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
