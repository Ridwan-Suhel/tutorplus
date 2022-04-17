import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container">
        <p className="lead fw-normal text-center">Q &amp; A </p>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="single-q-ans  mt-4">
              <h2 className="qus">
                <li>Difference between authorization and authentication</li>
              </h2>
              <p className="lead ans">
                There is a big difference between authorization and
                authentication. Authentication is the process of verifying who
                someone is, whereas authorization is the process of verifying
                what specific applications, files, and data a user has access
                to. In the authentication process, users or persons are verified
                with their name email, or password. on the other hand,
                authorization is what permission do user has for browsing a
                website.
              </p>
            </div>

            <div className="single-q-ans  mt-4">
              <h2 className="qus">
                <li>
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </li>
              </h2>
              <p className="lead ans">
                Firebase helps us to build and run successful apps. Its a google
                base software product loved by million of people. This is well
                secured easy to manageable code for developers and fully managed
                backend infastructure. There is common authentication type is
                password base authentication, two factor authentication, token
                based authentication etc. And The goal of every developer is to
                create awesome apps. there is more alternative competitor
                companies available such as Parse , NHost , Heroku etc. but so
                far firebase is awesome for delivered the top quality service.
              </p>
            </div>

            <div className="single-q-ans  mt-4">
              <h2 className="qus">
                <li>
                  What other services does firebase provide other than
                  authentication
                </li>
              </h2>
              <p className="lead ans">
                Firebase is a unique and so much developer friendly product.
                firebase not only provide just email password verification or
                social media verification. Firebase provides different kinds of
                services that help us to develop high-quality mobile and web
                applications to grow our business There are many services which
                Firebase provides, Most useful of them are:
                <ul>
                  <li>Authentication</li>
                  <li>Hosting</li>
                  <li>Cloud Messaging </li>
                  <li>Cloud Firestore </li>
                  <li>Cloud Functions</li>
                  <li>Cloud Storage</li>
                  <li>Google Analytics. etc.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
