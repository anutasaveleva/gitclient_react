import {connect} from 'react-redux';
import {increment, decrement} from '../../Store/store';
import App from '../../Component/App/App'

const mapStateToProps = ({counter}) => ({
    counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);