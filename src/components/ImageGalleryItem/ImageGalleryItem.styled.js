import styled from 'styled-components';

export const GalleryItem = styled.li`
border-radius: 2px;
 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
    cursor: zoom-in;
  }
`;
