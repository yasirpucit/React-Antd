/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { axiosBaseUrl } from '../../config/axios/axios-configuration';

const axios = axiosBaseUrl();

export const GetUser = createAsyncThunk('auth/getUser', async (data, thunkAPI) => {
  try {
    const { userId } = data;
    const response = await axios.get('/auth/get-user', { params: { userId } });

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const CreatePassword = createAsyncThunk('auth/createPassword', async (data, thunkAPI) => {
  try {
    const { email, password } = data;
    const response = await axios.put('/auth/create-password', { email, password });

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const SignUp = createAsyncThunk('auth/signUp', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/register', user);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const SignIn = createAsyncThunk('auth/signIn', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/sign-in', user);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const ForgotPassword = createAsyncThunk('auth/forgotPassword', async (data, thunkAPI) => {
  try {
    const { email } = data;
    const response = await axios.post('/auth/forgot-password', { email });
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const ResetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => {
  try {
    const { token, password } = data;

    const response = await axios.put(
      '/auth/reset-password',
      { password },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const UpdateUserRecord = createAsyncThunk('auth/updateUserRecord', async (data, thunkAPI) => {
  try {
    const response = await axios.put('/auth/update-user', { data });
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const ResendEmail = createAsyncThunk('auth/resendEmail', async (data, thunkAPI) => {
  try {
    const response = await axios.get('/auth/resend-email');
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const CancelSubscription = createAsyncThunk('payment/cancelSubscription', async (data, thunkAPI) => {
  try {
    const { feedback } = data;
    const response = await axios.post('/stripe/cancel-subscription', { feedback });

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const CompareOldPassword = createAsyncThunk('password/comparePassword', async (data, thunkAPI) => {
  try {
    const { oldPassword } = data;
    const response = await axios.post('/auth/compare-password', { oldPassword });
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

export const CreateSubscription = createAsyncThunk('payment/createSubscription', async (data, thunkAPI) => {
  try {
    const { token, coupon, selectedPlan, planId, userData } = data;
    const response = await axios.post('/stripe/create-user-subscription', {
      token,
      coupon,
      planId,
      selectedPlan,
      userData,
    });

    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return thunkAPI.rejectWithValue({
        err: err.response.data,
        status: err.response.status,
      });
    }
    return thunkAPI.rejectWithValue({
      err: 'Network Error',
    });
  }
});

const auth = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    message: '',
    emailVerified: false,
    success: '',
    resetEmail: '',
    err: false,
    loading: false,
    userType: false,
    subscriptionError: '',
    token: '',
    userId: '',
  },
  reducers: {
    SetState(state, { payload: { field, value } }) {
      state[field] = value;
    },
    ClearState() {
      return {
        name: '',
        email: '',
        message: '',
        err: '',
        loading: false,
        userType: false,
        token: '',
        userId: '',
      };
    },
    logout: state => ({
      name: '',
      email: '',
      message: '',
      facebookId: '',
      image: '',
      success: '',
      resetEmail: '',
      err: false,
      loading: '',
      token: '',
      userId: '',
      payment: {},
    }),
  },
  extraReducers: {
    [SignUp.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SignUp.fulfilled]: (state, action) => ({
      success: true,
      message: action.payload.message,
      loading: false,
      token: action.payload.token,
      name: action.payload.user.name,
      email: action.payload.user.email,
      userId: action.payload.user._id,
    }),
    [SignUp.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err?.error || action.payload.err,
    }),
    [GetUser.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [GetUser.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      name: action.payload.data?.name,
      email: action.payload.data?.email,
      userId: action.payload.data?._id,
      facebookProfileData: action.payload.data?.facebookProfile,
    }),
    [GetUser.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err,
    }),
    [UpdateUserRecord.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [UpdateUserRecord.fulfilled]: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      message: action.payload.message,
    }),
    [UpdateUserRecord.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err.message,
    }),
    [CreatePassword.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [CreatePassword.fulfilled]: (state, action) => ({
      loading: false,
      success: true,
      message: action.payload.message,
    }),
    [CreatePassword.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err,
    }),
    [ResendEmail.pending]: (state, action) => ({
      ...state,
      loading: false,
      success: false,
    }),
    [ResendEmail.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      token: action.payload.token,
      message: action.payload.message,
    }),
    [ResendEmail.rejected]: (state, action) => ({
      ...state,
      success: false,
      err: action.payload.err.error,
    }),
    [SignIn.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SignIn.fulfilled]: (state, action) => ({
      success: true,
      loading: false,
      name: action.payload.user.name,
      email: action.payload.user.email,
      userId: action.payload.user._id,
      token: action.payload.token,
    }),
    [SignIn.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err?.error,
    }),
    [ForgotPassword.pending]: (state, action) => ({
      ...state,
    }),
    [ForgotPassword.fulfilled]: (state, action) => ({
      ...state,
      success: true,
      message: action.payload.message,
    }),
    [ForgotPassword.rejected]: (state, action) => ({
      ...state,
      success: false,
      err: action.payload.err.error,
    }),
    [ResetPassword.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ResetPassword.fulfilled]: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      message: action.payload.message,
    }),
    [ResetPassword.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err || 'Error',
    }),
    [CreateSubscription.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [CreateSubscription.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      message: 'Subscription Has Been Created Succesfully',
      payment: action.payload.user.payment,
      selectedPlan: action.payload.user.selectedPlan,
      cardName: action.payload.user.cardName,
    }),
    [CreateSubscription.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      subscriptionError: action.payload.err?.error,
    }),
    [CancelSubscription.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [CancelSubscription.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      message: 'Subscription Has Been Removed',
    }),
    [CancelSubscription.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err?.error,
    }),
  },
});

const { reducer, actions } = auth;

export const { SetState, ClearState, logout } = actions;

export default reducer;
