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
  `;

  constructor() {
    super();
    this.playStateIcon = "av:play-arrow";
    this.audioLoaded = "false";
  }

  

  audioToggle(){
    if(document.shadowRoot.querySelector(".player").hasAttribute("src") != true){
      const customAudio = document.shadowRoot.querySelector(".player");
      customAudio.src = audio;
    }
    
    if(document.shadowRoot.querySelector(".player").paused && this.audioLoaded == true){
      
    }
    else if(document.shadowRoot.querySelector(".player").paused == false && this.audioLoaded == true){

    }
  }



  render() {
    return html`
      <main>
        <div class="cardDesign">
          <simple-icon icon="${this.playStateIcon}" @click="${document.audioToggle()}"></simple-icon>
          <slot></slot>
          <audio class="player" type="audio/mpeg"></audio>
        </div>
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);