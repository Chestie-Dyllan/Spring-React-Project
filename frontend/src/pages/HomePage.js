import React from 'react';
import UserList from '../components/UserList.js';
import HoaxSubmit from '../components/HoaxSubmit.js';
import { connect } from 'react-redux';
import HoaxFeed from '../components/HoaxFeed.js';

class HomePage extends React.Component {
  render() {
    return (
      <div data-testid="homepage">
        <div className="row">
          <div className="col-8">
            {this.props.loggedInUser.isLoggedIn && <HoaxSubmit />}
            <HoaxFeed />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedInUser: state
  };
};

export default connect(mapStateToProps)(HomePage);