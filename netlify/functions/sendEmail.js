/* eslint-disable no-console */
/* eslint-disable func-names */
require('dotenv').config();
const mailgun = require('mailgun-js');

exports.handler = (event, context, callback) => {
  // log data about the request
  console.log('event.queryStringParameters', event.queryStringParameters);
  console.log('event.queryStringParameters.name', event.queryStringParameters.name);
  console.log('event.queryStringParameters.email', event.queryStringParameters.email);
  console.log('event.queryStringParameters.message', event.queryStringParameters.message);

  // mailgun configuration
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: 'sandboxd2d79c49eeb6468994f03eeb87d95214.mailgun.org',
  });

  // email body template
  const emailBody = `
    You have received an email from the contact form on carlieamoredds.com with the following data:

    Name: ${event.queryStringParameters.name}
    Email Address: ${event.queryStringParameters.email}
    Message: ${event.queryStringParameters.message}
  `;

  // mailgun email data
  const data = {
    from: 'Mailgun Sandbox <postmaster@sandboxd2d79c49eeb6468994f03eeb87d95214.mailgun.org>',
    to: process.env.EMAIL_T0_ADDRESS,
    subject: 'carlieamoredds.com - New Contact Form Submission',
    text: emailBody,
  };

  // send the mailgun email
  mg.messages().send(data, (error, body) => {
    if (error) {
      return console.log(error);
    }

    // create a response body object with all of the information about this request/response
    const responseBody = {
      contactFormData: {
        name: event.queryStringParameters.name,
        emailAddress: event.queryStringParameters.email,
        message: event.queryStringParameters.message,
      },
      emailData: {
        from: data.from,
        to: data.to,
        subject: data.subject,
        body: emailBody,
      },
      mailgunResponseData: {
        ...body,
      },
    };

    // return the response object
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    });

    return JSON.stringify(responseBody);
  });
};
