import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

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




  const usrSchema = new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      },
      username: {
        type: String,
        min: 2,
        max: 20,
        optional: true
      },
      first_name: {
        type: String,
        min: 1,
        max: 100,
        optional: true
      },
      last_name: {
        type: String,
        min: 1,
        max: 100,
        optional: true
      },
      title: {
        type: String,
        min: 1,
        max: 100,
        optional: true
      }



  });

  usrSchema.validate({
    email: 'test@example.com',
    first_name: 'Dobromir'
  });

});
