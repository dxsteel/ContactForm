import PropTypes from 'prop-types';
import { Title } from './Title.styled';


export const TitleName = ({ text }) => {
  return (
  <Title>
    {text}
  </Title>
  )
};

TitleName.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TitleName;