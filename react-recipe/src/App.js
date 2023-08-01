import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
`;
const Header = styled.civ`
color: white;
background-color:black;
`;

function App() {
  return (
    <Container>
      <Header>Recipe Finder</Header>
     The  Indian Dev
    </Container>
  );
}

export default App;
