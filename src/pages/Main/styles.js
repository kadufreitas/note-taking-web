import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  /* - 60px para descontar a altura do Topbar */
  height: calc(100% - 60px);
`;

export const Wrapper = styled.div`
  flex: 1;
  flex-flow: wrap;
`;
