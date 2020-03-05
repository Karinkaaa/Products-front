import {connect} from "react-redux";
import App from "../components/products/App";

const mapStateToProps = (state) => ({
    countProductsInCart: state.app.productsInCart.length
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);