import { Howl, Howler } from 'howler';

class App extends Component {
    SoundPlay() {
      const Sounds = new Howl({
        src: ["sound.mp3"]
      })
      Sounds.play()
      console.log("sound")
    }
    render() {
      return (
        <div className="App">
          <button onClick={this.SoundPlay}>play</button>
        </div>
      );
    }
  }
  
  export default App;