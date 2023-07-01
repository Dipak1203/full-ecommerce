import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Dashboard = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>; // Render a loading indicator or any other content
  }

  return (
    <StyledContainer>
      <Content>
        <h1>Welcome, {user.name}!</h1>
        <ProfileInfo>
          <p>Email: {user.email}</p>
          <img src={user.image} />
        </ProfileInfo>
      </Content>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 20px;
`;

const Content = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
`;

export default Dashboard;
