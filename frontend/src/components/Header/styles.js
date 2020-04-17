import styled from 'styled-components';

export const Container = styled.div`
  background: #141419;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #333;
    }

    a {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #333;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #f5f5f5;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #eee;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
  }
`;
