import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';


Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({ email });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }

    return true;
});

export const Users = new Mongo.Collection('users');
