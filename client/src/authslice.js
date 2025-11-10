import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosClient from './utils/axiosclient';

//this is for Register
export const registerUser = createAsyncThunk(
    'auth/register',
    async(userData, {rejectWithValue})=>{
        try{
            const response = await axiosClient.post('/user/register', userData);
             return response.data.user;
        }catch(error){
            return rejectWithValue(error);
        }
    }
);

//this is for login
export const loginUser = createAsyncThunk(
    'auth/login',
    async(credentials, {rejectWithValue})=>{
         try{
            const response = await axiosClient.post('/user/login',credentials);
            return response.data.user;
         }catch(error){
            return rejectWithValue(error);
         }
    }
);

export const checkAuth = createAsyncThunk(
    'auth/check',
    async(_, {rejectWithValue})=>{
        try{
            const {data} = await axiosClient.get('/user/check');
            return data.user;
        }catch(error){
            return rejectWithValue(error);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async(_, {rejectWithValue})=>{
        try{
            await axiosClient.post('/logout');
            return null;
        }catch(error){
            return rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name:'auth',
    initialState: {
        user:null,
        isAuthenticated: false,
        loading: false,
        error:null
    },
    reducers: {

    },
     extraReducers: (builder)=>{
         builder
         //Register User Cases
         .addCase(registerUser.pending, (state)=>{
             state.loading = true;
             state.error = null;
         })
         .addCase(registerUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
         })
         .addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message || "An unexpected error occurred";
            state.isAuthenticated = false;
            state.user = null;
         })

         //Login User Case
         .addCase(loginUser.pending,(state)=>{
             state.loading= true;
             state.error = null;
         })
         .addCase(loginUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
         })
         .addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message || "An unexpected error occurred";
            state.isAuthenticated = false;
            state.user = null;
         })

         //CheckAuth cases

         .addCase(checkAuth.pending, (state)=>{
            state.loading = true;
            state.error = null;
         })
         .addCase(checkAuth.fulfilled, (state,action)=>{
            state.loading = false;
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
         })
         .addCase(checkAuth.rejected,(state, action)=>{
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload?.message || "An unexpected error occurred";
            state.user = null;
         })

         //Logout User case
          .addCase(logoutUser.pending, (state)=>{
             state.loading = true;
             state.error = null;
          })
          .addCase(logoutUser.fulfilled, (state)=>{
             state.loading = false;
             state.user = null;
             state.isAuthenticated = false;
             state.error = null;
          })
          .addCase(logoutUser.rejected,(state, action)=>{
             state.loading = false;
             state.error = action.payload?.message || "An unexpected error occurred";
             state.isAuthenticated = false;
             state.user = null;
          });
     }

})

export default authSlice.reducer;