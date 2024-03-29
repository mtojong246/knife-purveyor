import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import { USER_ACTION_TYPES } from "./user-types";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutFailed, signOutSuccess } from "./user-actions";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInformation);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch(error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalInformation } }) {
    yield call(getSnapshotFromUserAuth,user, additionalInformation);
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user, { displayName }))
    } catch(error) {
        yield put(signUpFailed(error))
    }
}

export function* onEmailSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignupSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignupStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSigninStart), call(onEmailSigninStart), call(onSignupStart), call(onSignupSuccess), call(onSignOutStart)])
}