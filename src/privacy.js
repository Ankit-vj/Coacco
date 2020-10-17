import React, { Component } from 'react';


class Privacy extends Component {
render(){
  return (
    <div className="App">
      <h1>Privacy Policies </h1>
                    <p>We also may collect other types of information in the following ways when you visit our website:<br /></p>
                        <ul>
                            <li>Our server logs automatically collect information, such as your IP address, your browser type and language,and the date and time of your visit, which helps us track users' movements around our site and understand trends.</li>
                            <li>We may assign your computer one or more cookies which may collect information to facilitate access to our website and to personalize your online experience.</li>
                            <li>We may allow third-party advertising companies or ad networks to display advertisements on our websites.</li>
                            <li>We do not provide any personal information to these companies.</li>
                            <li>These companies may use tracking tools, such as cookies, to collect information about computers used to view or interact with their advertisements, some of which could be a part of the main result.</li>
                        </ul>
    </div>
  );
}
}

export default Privacy;