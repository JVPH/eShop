import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  tagTypes: ['Product', 'User', 'Order'],
  endpoints: build => ({
    getProducts: build.query({
      query: ({keyword = '', pageNumber = ''}) => `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`,
      providesTags: ['Product']
    }),
    getTopProducts: build.query({
      query: () => '/api/products/top',
      providesTags: ['Product']
    }),
    getProductById: build.query({
      query: productId => `/api/products/${productId}`,
      providesTags: ['Product']
    }),
    deleteProductById: build.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Product']
    }),
    createProduct: build.mutation({
      query: () => ({
        url: '/api/products',
        method: 'POST',
      }),
      invalidatesTags: ['Product']
    }),
    updateProductById: build.mutation({
      query: ({ updatedProductInfo, productId }) => ({
        url: `/api/products/${productId}`,
        method: 'PUT',
        body: updatedProductInfo
      }),
      invalidatesTags: ['Product']
    }),
    createProductReview: build.mutation({
      query: ({ rating, comment , productId }) => ({
        url: `/api/products/${productId}/reviews`,
        method: 'POST',
        body: { rating, comment }
      }),
      invalidatesTags: ['Product']
    }),
    uploadProductImage: build.mutation({
      query: (formData) => ({
        url: '/api/upload',
        method: 'POST',
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      })
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: '/api/users/login',
        method: 'POST',
        body: credentials
      })
    }),
    register: build.mutation({
      query: (newUserInfo) => ({
        url: '/api/users',
        method: 'POST',
        body: newUserInfo
      })
    }),
    updateUserProfile: build.mutation({
      query: (updatedUserInfo) => ({
        url: '/api/users/profile',
        method: 'PUT',
        body: updatedUserInfo
      }),
      invalidatesTags: ['User']
    }),
    getUserById: build.query({
      query: (id) => `/api/users/${id}`,
      providesTags: ['User']
    }),
    getUserProfile: build.query({
      query: () => '/api/users/profile',
      providesTags: ['User']
    }),
    addOrder: build.mutation({
      query: (orderInfo) => ({
        url: '/api/orders',
        method: 'POST',
        body: orderInfo
      })
    }),
    getOrderById: build.query({
      query: (orderId) => `/api/orders/${orderId}`,
      providesTags: ['Order']
    }),
    updateOrderToPaid: build.mutation({
      query: ({ orderId, paymentResult }) => ({
        url: `/api/orders/${orderId}/pay`,
        method: 'PUT',
        body: paymentResult
      }),
      invalidatesTags: ['Order']
    }),
    updateOrderToDelivered: build.mutation({
      query: (orderId) => ({
        url: `/api/orders/${orderId}/deliver`,
        method: 'PUT',
      }),
      invalidatesTags: ['Order']
    }),
    getUserOrders: build.query({
      query: () => '/api/orders/my-orders',
      providesTags: ['Order']
    }),
    getAllOrders: build.query({
      query: () => '/api/orders',
      providesTags: ['Order']
    }),
    getAllUsers: build.query({
      query: () => '/api/users',
      providesTags: ['User']
    }),
    deleteUserById: build.mutation({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),
    updateUserById: build.mutation({
      query: ({updatedUser, id}) => ({
        url: `/api/users/${id}`,
        method: 'PUT',
        body: updatedUser
      }),
      invalidatesTags: ['User']
    })
  })
})

export const { useGetProductsQuery,
  useGetProductByIdQuery,
  useGetTopProductsQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetUserByIdQuery,
  useUpdateUserProfileMutation,
  useAddOrderMutation,
  useGetOrderByIdQuery,
  useUpdateOrderToPaidMutation,
  useGetUserOrdersQuery,
  useGetAllUsersQuery,
  useDeleteUserByIdMutation,
  useUpdateUserByIdMutation,
  useDeleteProductByIdMutation,
  useCreateProductMutation,
  useUpdateProductByIdMutation,
  useGetUserProfileQuery,
  useUploadProductImageMutation,
  useGetAllOrdersQuery,
  useUpdateOrderToDeliveredMutation,
  useCreateProductReviewMutation
} = api