import { PluginContract } from '@nintex/form-plugin-contract';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {config} from './media-webcam.config';
import Webcam from '@eduardosmarcal/webcam-easy';

@customElement('starter-kit-webcam')
export class PlugIn extends LitElement {
     
    // @property({ type: String })
    // cardTitle = "Card Title";

    // @property({ type: String })
    // cardText = "This is a bootstrap card";

    // @property({ type: String })
    // imageUrl = "https://www.nintex.com/wp-content/themes/portent_nintex/ui/images/nintex_logo.svg";

    // @property({ type: String })
    // link = "https://www.nintex.com/";

    // @property({ type: Boolean })
    // darkMode = false;starter-kit-webcam

    // @property({ type: Boolean })
    // centerText = false;

    static getMetaConfig = ():Promise<PluginContract> | PluginContract => config;        
    render = () => { return html`
        <video id="webcam" autoplay playsinline width="640" height="480"></video>
        <canvas id="canvas" style="display: none;"></canvas>
        <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
        <button @click="${this._handleClick}">click</button>
        `;
    }
    
    updated = (changedProperties: PropertyValues<this>) => {
    
        const webcamElement = this.shadowRoot.getElementById('webcam');
        const canvasElement = this.shadowRoot.getElementById('canvas');
        const snapSoundElement = this.shadowRoot.getElementById('snapSound');
        const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);        

        webcam.start()
        .then(result =>{
            console.log("webcam started");
        })
        .catch(err => {
            console.log(err);
        });      
    }

    _handleClick(e) {
    console.log(this.prop);
        const webcamElement = this.shadowRoot.getElementById('webcam');
        const canvasElement = this.shadowRoot.getElementById('canvas');
        const snapSoundElement = this.shadowRoot.getElementById('snapSound');
        const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);   

         webcam.start()
        .then(result =>{
            console.log("webcam started");
        })
        .catch(err => {
            console.log(err);
        }); 


    }    
}