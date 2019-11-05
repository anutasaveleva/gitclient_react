import {connect} from 'react-redux';
import {logIn, logout} from '../../Store/authstore';
import Auth from '../../Component/Auth/Auth'

const mapStateToProps = ({authentication}) => ({
    authentication
});

const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(logIn),
    logout: () => dispatch(logout)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);