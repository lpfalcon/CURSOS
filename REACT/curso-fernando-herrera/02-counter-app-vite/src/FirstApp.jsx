import PropTypes from "prop-types";
const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <h3>{ subTitle }</h3>
      <h3>{ name }</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam,
        rerum impedit repellendus delectus minima, eveniet quisquam eligendi
        tempore quaerat, deserunt tenetur fugiat doloremque nisi consequuntur
        pariatur quam adipisci facilis?
      </p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "No name",
  subTitle: "No subTitle",
  // title: "No title",
};
export default FirstApp;
