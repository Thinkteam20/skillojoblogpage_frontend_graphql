import styled from "styled-components";

export const NavbarContainer = styled.nav`
    @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap");
    font-family: "Urbanist", sans-serif;
    position: relative;
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    display: flex;
    flex-direction: column;
    background-color: #24292e;
    font-family: "Roboto", sans-serif;
    @media (min-width: 700px) {
        height: 60px;
    }
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
`;

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 40px;
`;

export const LogoLeft = styled.img`
    width: 200px;
    height: 47.81px;
`;
export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    padding-right: 40px;
    align-items: center;
    justify-content: right;

    @media (max-width: 700px) {
        justify-content: right;
    }
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled.a`
    font: bold;
    margin: 15px;
    color: hsla(0, 0%, 100%, 0.55);
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    /* border-bottom: 2px solid black; */

    @media (max-width: 700px) {
        display: none;
    }
    :hover {
        color: #fff;
        /* border-bottom: 2px solid #dd4e96; */
    }
`;
