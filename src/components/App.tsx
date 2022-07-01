import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import { DATA } from '../data';
import Home from './Home';
import InputGroupContainer from './InputGroupContainer';

export default function App() {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          {DATA.map((categoryData, index) => {
            return (
              <Route key={index} path={categoryData.categoryId} element={<InputGroupContainer data={categoryData} />} />
            )
          })}
        </Routes>
    </Container>
  )
}
