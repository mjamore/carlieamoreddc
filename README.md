[![Netlify Status](https://api.netlify.com/api/v1/badges/6eb6d45f-5e96-4d3e-bbdd-fb33397cd0c1/deploy-status)](https://app.netlify.com/sites/carlieamoredds/deploys)

# carlieamoredds 
This is the source code for Carlie Amore's dentistry website:
- https://carlieamoredds.netlify.app/
- carlieamoredds.com

## Run Gatsby Website Locally:

1.  ```shell
    npm install
    ```

2. ```shell
    npm start
    ```

## Workflow for Developing/Deploying/Testing the Netlify Serverless Function:
In order to send emails to Carlie when the user submits the contact form on the website, this application contains a serverless function that is deployed through Netlify, located in `netlify/functions/sendContactFormEmail.js`.

1.  Make sure you have a .env file setup at the root of this project that contains an entry for `MAILGUN_API_KEY` and `EMAIL_T0_ADDRESS`. The MAILGUN_API_KEY value can be retrieved from https://app.mailgun.com/app/account/security/api_keys.

2.  ```shell
    netlify dev
    ```

3. You should now be able to invoke the function by hitting http://localhost:{PORT_NUMBER_SPECIFIED_IN_OUTPUT_FROM_NETLIFY_DEV_COMMAND}/.netlify/functions/sendContactFormEmail/?name=Jack%20Jackson&email=paul@aol.com&message=Dr.%20Amore%20began%20prioritizing%20her%20journey in the browser.

4.  ```shell
    netlify deploy --prod
    ```

5. You should now be able to invoke the function by hitting https://carlieamoredds.netlify.app/.netlify/functions/sendContactFormEmail/?name=Jack%20Jackson&email=paul@aol.com&message=Dr.%20Amore%20began%20prioritizing%20her%20journey in the browser.

6. The following are ways to test/debug the Nelify function:
    - You can see the response body in the browser when you hit the endpoint from step 5.
    - You can see the function logs at https://app.netlify.com/sites/carlieamoredds/functions/sendContactFormEmail
    - The email should show up in the Mailgun user interface dashboard.
    - You should recieve the email at the EMAIL_T0_ADDRESS defined in step 1

## Deployment:
Netlify/Gatsby Cloud is used as a continuous build/deployment server, as well as for hosting the site.  The site is automatically built each time the `main` branch is pushed.

## Site requirements:

URL:
- carlieamoreholisticdds.com
- carlieamoredds.com
- broadmoorholistidentistry.com

Pages:
- Homepage
- Services
    - Healthy Start
    - Holistic/Biological Dentistry
    - TMJ Treatment
- About Dr. Julie Babcock
- Meet the Team
- Unique First Visit
- Patient Education
- Contact Us

Features
- Ability to submit a contact form
- Book online?
- New Patient Exam Form

Influences:
- https://www.babcockdentistry.com/
- https://thevibrantmarket.com/
- https://www.rejuvdentist.com/
- http://www.laholisticdentistry.com/
- https://www.zaghimd.com/
- https://www.enlightendentalnola.com/
- https://drjabanmoore.com/


## To-Do:
- Customize SEO metadata to each page
- Figure out why offline support isn't working
- Add google analytics
- Create the Meet the Team section
- When contact form is submitted, update the ContactForm UI
- Update 404 page

Heart tooth logos:
- https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F29%2F26%2Fcreative-teeth-heart-inside-logo-vector-22372926.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcreative-teeth-heart-inside-logo-vector-22372926&tbnid=dZggBgS5TD0cGM&vet=12ahUKEwi465uwpdLvAhWGT98KHUAFBekQMygIegUIARDYAQ..i&docid=jSD1itavTYTigM&w=1000&h=780&q=heart%20tooth&ved=2ahUKEwi465uwpdLvAhWGT98KHUAFBekQMygIegUIARDYAQ
- https://pixlr.com/e/#editor

Stars Codepen: https://codepen.io/saransh/pen/BKJun