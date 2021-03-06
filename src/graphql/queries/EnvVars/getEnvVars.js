// @flow
import { ForbiddenError } from 'apollo-server-micro';
import { env } from '../../../configs/env';
import { isAdmin } from '../../../utils/isAdmin';

export function getEnvVars(root: any, args: any, ctx: any): any {
  if (!isAdmin(ctx)) {
    throw new ForbiddenError();
  }

  return env;
}

getEnvVars.typeDef = /* GraphQL */ `
  extend type Query {
    getEnvVars(input: GetEnvVarsInput!): EnvVars!
  }

  input GetEnvVarsInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
