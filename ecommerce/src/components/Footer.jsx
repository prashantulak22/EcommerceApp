import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EZFIT.</Logo>
        <Description>
          EZFIT erfect for the cool morning, evening or wear it all day. Super
          cozy and soft; great for any season where the air is just a little
          chill. Dress it up or wear it with jeans. Great for a walk along the
          beach just before sunset.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Emerging Brands</Title>
        <List>
          <ListItem>Aaron</ListItem>
          <ListItem>Crew</ListItem>
          <ListItem>Ons</ListItem>
          <ListItem>Muscletech</ListItem>
          <ListItem>Goldstar</ListItem>
          <ListItem>Caliber</ListItem>
          <ListItem>Tsamoire</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><MapOutlinedIcon style={{marginRight: "10px"}}/>  Koteshwor, Kathmandu</ContactItem>
        <ContactItem> <LocalPhoneOutlinedIcon style={{marginRight: "10px"}}/>  +977 9861691382</ContactItem>
        <ContactItem><EmailOutlinedIcon style={{marginRight: "10px"}}/>  ezfit.outlook.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
