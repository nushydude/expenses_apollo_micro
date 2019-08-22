// @flow
import invariant from 'invariant';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';
import type { UserMongooseRecord } from '../../../mongoose/types/User';

export async function user(
  parent: UserMongooseRecord,
  args: void,
  ctx: any,
): Promise<UserMongooseRecord> {
  const userID = parent.userID;

  const result = await ctx.db.User.findByID(userID);

  invariant(result, 'result should be defined');

  return result;
}
