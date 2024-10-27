import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    isSaved: false,
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onToggleButton = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  renderInputArea = () => {
    const {userInput} = this.state
    return (
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={userInput}
          placeholder="Add Your Text"
          onChange={this.onChangeUserInput}
        />
        <button
          type="button"
          className="save-button"
          onClick={this.onToggleButton}
        >
          Save
        </button>
      </div>
    )
  }

  renderSavedText = () => {
    const {userInput} = this.state
    return (
      <div className="saved-container">
        <p className="user-entered-text">{userInput}</p>
        <button
          className="edit-button"
          type="button"
          onClick={this.onToggleButton}
        >
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {isSaved} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          {isSaved ? this.renderSavedText() : this.renderInputArea()}
        </div>
      </div>
    )
  }
}

export default App
