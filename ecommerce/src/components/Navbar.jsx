import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
`;
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
      font-size: 14px;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
      font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                  <Input/>
                  <Search style={{color: "gray", fontSize:"16px"}}></Search>
            </SearchContainer>
      
        </Left>
        <Center>
            <Logo>EZFIT.</Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                  <Badge badgeContent={4} color="primary">
                        <AddShoppingCartOutlinedIcon/>
                  </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
