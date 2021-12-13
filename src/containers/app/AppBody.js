import { connect } from "react-redux";
import AppBody from "../../components/app/AppBody";

const mapStateToProps = (state) => ({
    currentUser: state.profile.current
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);