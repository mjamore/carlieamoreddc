/* eslint-disable no-console */
require('dotenv').config();
const mailgun = require('mailgun-js');

exports.handler = (event, context, callback) => {
  // log data about the request
  console.log('event.queryStringParameters', event.queryStringParameters);
  console.log('event.queryStringParameters.name', event.queryStringParameters.name);
  console.log('event.queryStringParameters.email', event.queryStringParameters.email);
  console.log('event.queryStringParameters.service', event.queryStringParameters.service);
  console.log('event.queryStringParameters.testimonial', event.queryStringParameters.testimonial);

  // mailgun configuration
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: 'sandboxd2d79c49eeb6468994f03eeb87d95214.mailgun.org',
  });

  // email body template
  const emailBody = `
    You have received an email from the new testimonial form on carlieamoredds.com with the following data:

    Name: ${event.queryStringParameters.name}
    Email Address: ${event.queryStringParameters.email}
    Service Performed: ${event.queryStringParameters.service}
    Testimonial Quote: ${event.queryStringParameters.testimonial}
  `;

  // mailgun email data
  const data = {
    from: 'Mailgun Sandbox <postmaster@sandboxd2d79c49eeb6468994f03eeb87d95214.mailgun.org>',
    to: process.env.EMAIL_T0_ADDRESS,
    subject: 'carlieamoredds.com - New Testimonial Form Submission',
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
        servicePerformed: event.queryStringParameters.service,
        testimonialQuote: event.queryStringParameters.testimonial,
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

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    };

    // return the response object
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseBody),
    });

    return JSON.stringify(responseBody);
  });
};
