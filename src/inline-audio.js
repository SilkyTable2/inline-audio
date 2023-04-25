import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-colors/simple-colors.js';

class InlineAudio extends LitElement {
  static properties = {
    header: { type: String },
    playStateIcon: { type: String },
    audio: { type: String },
    audioLoaded: { type: Boolean },
    isPlaying: { type: Boolean }
  }

  static styles = css`
    :host {
      display: inline;
      vertical-align: middle;
      max-width: 960px;
      margin: 0 auto;
      background-color: var()
    }
    .cardDesign{
      display:inline-flex;
      align-items: center;
      padding: 4px 4px 4px 0px;
      border: 2px solid black;
      min-width: 50px;
      font-size: 12px;
    }
    .spacer {
      padding-right: 8px;
    }
  `;

  constructor() {
    super();
    this.playStateIcon = "av:play-arrow";
    this.audioLoaded = "false";
    this.isPlaying = false;
  }

  playIterator(){
    setTimeout(() => {
      this.audioLoaded = true;
      this.playRouter(true);
    }, 500);
  }
  playRouter(playStatus){
    if(playStatus == true){
      this.shadowRoot.querySelector('.player').play();
      this.icon = "av:pause";
      this.isPlaying = true;
    } 
    else{
      this.shadowRoot.querySelector('.player').pause();
      this.icon = "av:play-arrow";
      this.isPlaying = "false";
    }
  }

  audioToggle(){
    if(this.shadowRoot.querySelector(".player").hasAttribute("src") != true){
      const customAudio = this.shadowRoot.querySelector(".player");
      customAudio.src = audio;
    }
    
    if(this.shadowRoot.querySelector(".player").paused && this.audioLoaded == true){
      this.playRouter(true);
    }
    else if(this.document.shadowRoot.querySelector(".player").paused == false && this.audioLoaded == true){
      this.playRouter(false);
    }
  }



  render() {
    return html`
      <main>
        <div class="cardDesign">
          <simple-icon class="spacer"icon="${this.playStateIcon}" @click="${this.audioToggle()}"></simple-icon>
          <slot></slot>
          <audio class="player" type="audio/mpeg" @playIteration="${this.playIterator()}"></audio>
        </div>
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);