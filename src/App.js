import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeTab: languageGreetingsList[0]}

  makeTabActive = event => {
    console.log(event.target.id)
    const {id} = event.target
    const tab = languageGreetingsList.filter(i => i.id === id)
    console.log(tab)
    this.setState({activeTab: tab[0]})
  }

  render() {
    const {activeTab} = this.state
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(i => (
            <li key={i.id}>
              <button id={i.id} onClick={this.makeTabActive} type="button">
                {i.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <img src={activeTab.imageUrl} alt={activeTab.imageAltText} />
        </div>
      </div>
    )
  }
}

export default App
