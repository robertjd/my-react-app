import React from 'react';
import DocumentTitle from 'react-document-title';

import { UserComponent } from 'react-stormpath';

export default class ProfilePage extends UserComponent {
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label className="col-xs-12 col-sm-4 control-label">First Name</label>
                <div className="col-xs-12 col-sm-4">
                  {this.state.user.givenName}
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-4 control-label">Last Name</label>
                <div className="col-xs-12 col-sm-4">
                  {this.state.user.surname}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}