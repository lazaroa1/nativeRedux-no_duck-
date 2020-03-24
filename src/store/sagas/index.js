import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '../../service/api';
import {navigate} from '../../service/navigation';
import * as LoginActions from '../actions/login';
import * as RepositoriesActions from '../actions/reporsitories';

function* login(action) {
  try {
    const {username} = action.payload;

    yield call(api.get, `users/${username}`);

    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const response = yield call(api.get, `users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
