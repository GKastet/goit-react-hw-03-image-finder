import { Component } from 'react';

class SearchBar extends Component {
  state = {
    pictureName: '',
  };

  handleOnChange = evt => {
    this.setState({
      pictureName: evt.target.value,
    });
  };
  formOnSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.pictureName);
    this.resetForm(evt);
  }

  resetForm = evt => {
    evt.target.reset();
    this.setState({pictureName: ''})
  }
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.formOnSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="pictureName"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange = {this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

//function SearchBar({onSubmit}){
//     return (
//               <header className="searchbar">
//                 <form className="form" onSubmit={onSubmit}>
//                   <button type="submit" className="button">
//                     <span className="button-label">Search</span>
//                   </button>

//                   <input
//                     className="input"
//                     type="text"
//                     autocomplete="off"
//                     autofocus
//                     placeholder="Search images and photos"
//                   />
//                 </form>
//               </header>
//             );

//}
