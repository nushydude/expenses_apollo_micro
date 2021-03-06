// @flow
import * as cashFlowQueries from './queries/CashFlow';
import * as envVarsQueries from './queries/EnvVars';
import * as userQueries from './queries/User';

export const rootQuery = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...cashFlowQueries,
  ...envVarsQueries,
  ...userQueries,
};
