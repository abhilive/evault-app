import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

const ErrorMessage = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  return (
    error.message && (
      <div className="container" style={{ width: '540px' }}>
        <article className="message is-danger">
          <div className="message-header">
            <p>{error.message}</p>
            <button
              className="delete"
              aria-label="delete"
              onClick={() => dispatch(actions.removeError())}
            ></button>
          </div>
        </article>
      </div>
    )
  );
};

export default ErrorMessage;
