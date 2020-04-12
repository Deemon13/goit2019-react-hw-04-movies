import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoImageAvailable from "../../images/NoImageAvailable.png";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  border-radius: 1rem;
  margin-bottom: 10rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
  @media screen and (min-width: 48em) {
    font-size: 2rem;
  }
`;

const ProfileAvatar = styled.img.attrs(({ src, alt }) => ({
  src: src ? `http://image.tmdb.org/t/p/w500${src}` : `${NoImageAvailable}`,
  alt: `Avatar of ${alt}` || "Avatar",
}))`
  margin: 0 auto;
  margin-bottom: 0.6rem;
`;

function CastItem({ avatar, name, character }) {
  return (
    <Item>
      <ProfileAvatar src={avatar} alt={name} />
      <Text>{name}</Text>
      <Text>Character: {character}</Text>
    </Item>
  );
}

CastItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

CastItem.defaultProps = {
  avatar: `${NoImageAvailable}`,
  name: "Unknown",
};

export default CastItem;
