import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, SearchBtn, Input} from './Searchbar.styled';
import PropTypes from 'prop-types';


export class Searchbar extends Component {
  state = { 
     searchPicture: '',
  };

  inputChange = (e) => {
    this.setState({ searchPicture: e.target.value.toLowerCase() });
  };

  valueSubmit = (e) => {
    e.preventDefault();
    this.props.newSearch({ ...this.state });
    this.setState({ searchPicture: '' });
  };
  
  render() {
    return (
      <>
        <Header>
          <Form onSubmit={this.valueSubmit}>
            <SearchBtn type="submit">
            <ImSearch />
            </SearchBtn>

            <Input
              type="text"
              placeholder="Search images and photos"
              name="searchPicture"
              onChange={this.inputChange}
              autoFocus
              autoComplete="off"
            />
          </Form>
        </Header>
      </>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};