import * as Types from 'src/graphql/types';

import { useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ResetPasswordMutationVariables = Types.Exact<{
  password: Types.Scalars[`String`];
  code: Types.Scalars[`String`];
}>;

export type ResetPasswordMutation = { __typename?: `Mutation` } & {
  resetPassword?: Types.Maybe<
    { __typename?: `UsersPermissionsLoginPayload` } & Pick<
      Types.UsersPermissionsLoginPayload,
      `jwt`
    >
  >;
};

export const ResetPasswordDocument = `
    mutation resetPassword($password: String!, $code: String!) {
  resetPassword(password: $password, passwordConfirmation: $password, code: $code) {
    jwt
  }
}
    `;
export const useResetPasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ResetPasswordMutation,
    TError,
    ResetPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    ResetPasswordMutation,
    TError,
    ResetPasswordMutationVariables,
    TContext
  >(
    (variables?: ResetPasswordMutationVariables) =>
      fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(
        ResetPasswordDocument,
        variables
      )(),
    options
  );
