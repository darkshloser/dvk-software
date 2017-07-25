import { Meteor } from 'meteor/meteor';
import '../imports/api/users';

Meteor.startup(() => {
  // code to run on server at startup






  // const usrSchema = new SimpleSchema({
  //     email: {
  //       type: String,
  //       regEx: SimpleSchema.RegEx.Email
  //     },
  //     username: {
  //       type: String,
  //       min: 2,
  //       max: 20,
  //       optional: true
  //     },
  //     first_name: {
  //       type: String,
  //       min: 1,
  //       max: 100,
  //       optional: true
  //     },
  //     last_name: {
  //       type: String,
  //       min: 1,
  //       max: 100,
  //       optional: true
  //     },
  //     title: {
  //       type: String,
  //       min: 1,
  //       max: 100,
  //       optional: true
  //     }
  //
  //
  //
  // });
  //
  // usrSchema.validate({
  //   email: 'test@example.com',
  //   first_name: 'Dobromir'
  // });

});
