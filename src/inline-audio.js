import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-colors/simple-colors.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-button.js';

class InlineAudio extends LitElement {
  static properties = {
    playStateIcon: { type: String },
    source: { type: String, reflect: true},
    audioLoaded: { type: Boolean, reflect: true},
    isPlaying: { type: Boolean, reflect: true }
  }

  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
      max-width: 960px;
      margin: 0 auto;
      color: #1a2b42;
      
    }
    .cardDesign{
      display:inline-flex;
      align-items: center;
      padding: 4px 4px 4px 0px;
      background-color: var(--simple-colors-default-theme-accent-3);
      min-width: 50px;
      border-radius: 10px;
    }
    .spacer {
      padding-right: 8px;
    }
  `;

  constructor() {
    super();
    this.source = "";
    this.playStateIcon = "av:play-arrow";
    this.audioLoaded = false;
    this.isPlaying = false;
  }

  playIterator(){
    setTimeout(() => {
      this.audioLoaded = true;
      this.playRouter(true);
    }, 10);
  }
  playRouter(playStatus){
    if(playStatus == true){
      this.isPlaying = true;
      this.shadowRoot.querySelector('.player').play();
      this.playStateIcon = "av:pause";
    } 
    else{
      this.isPlaying = false;
      this.shadowRoot.querySelector('.player').pause();
      this.playStateIcon = "av:play-arrow";
    }
  }

  audioToggle(){
    var customAudio = this.shadowRoot.querySelector('.player');
    if(customAudio.hasAttribute("src") != true){
      customAudio.src = this.source;
      customAudio.load();
    }
    
    if(customAudio.paused && this.audioLoaded == true){
      this.playRouter(true);
    }
    else if(customAudio.paused == false && this.audioLoaded == true){
      this.playRouter(false);
    }
  }

  progressBar(){
    if(this.shadowRoot.querySelector(".player").ended){
      this.playRouter(false);
    }
    var totalTime = this.shadowRoot.querySelector(".player").duration;
    var audioTimestamp = this.shadowRoot.querySelector(".player").currentTime;
    var percentComplete = (audioTimestamp/totalTime) * 100;
    this.shadowRoot.querySelector(".cardDesign").style.background = `linear-gradient(90deg, var(--simple-colors-default-theme-accent-3) 0% ${percentComplete}%, var(--simple-colors-default-theme-accent-5) ${percentComplete}% 100%)`;
  }

  


  render() {
    return html`
      <main>
        <div class="cardDesign" @click="${this.audioToggle}">
          <simple-icon-button class="spacer" icon="${this.playStateIcon}"></simple-icon-button>
          <slot></slot>
          <audio class="player" type="audio/mpeg" @canplaythrough="${this.playIterator}" @timeupdate="${this.progressBar}"></audio>
        </div>
      </main>
    `;
  }
}

customElements.define('inline-audio', InlineAudio);