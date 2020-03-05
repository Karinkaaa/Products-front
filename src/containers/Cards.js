import {connect} from "react-redux";
import Cards from "../components/products/Cards";
import {addProductToCart} from '../actions/action';

const mapStateToProps = (state) => ({
    products: state.app.products
});

const mapDispatchToProps = (dispatch) => ({
    onClickAddProduct: (product) => dispatch(addProductToCart(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);