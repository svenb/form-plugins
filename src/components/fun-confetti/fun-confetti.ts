import { PluginContract } from '@nintex/form-plugin-contract';
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('fun-confetti')
export class ConfettiComponent extends LitElement {
  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return import('./fun-confetti.config').then((pkg) => {
      return pkg.config;
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  `;

  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;
  confetti: { x: number; y: number; r: number; d: number; color: string; tilt: number; tiltAngleIncrement: number }[] = [];
  animationFrame: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.initConfetti();
  }

  disconnectedCallback() {
    this.stopConfetti();
    super.disconnectedCallback();
  }

  render() {
    return html`<canvas><confetti-component></confetti-component></canvas>`;
  }

  firstUpdated() {
    this.canvas = this.shadowRoot?.querySelector('canvas');
    if (this.canvas) {
      this.context = this.canvas.getContext('2d');
    }
    this.resizeCanvas();
    this.startConfetti();
  }

  resizeCanvas() {
    if (this.canvas && this.context) {
      this.canvas.width = this.clientWidth;
      this.canvas.height = this.clientHeight;
    }
  }

  initConfetti() {
    const numConfetti = 100;
    for (let i = 0; i < numConfetti; i++) {
      this.confetti.push(this.createConfetti());
    }
  }

  createConfetti() {
    const width = Math.random() * 8 + 8;
    const height = width * 0.6;
    const x = Math.random() * (this.canvas?.width || 0);
    const y = Math.random() * (this.canvas?.height || 0) - height;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    const tilt = Math.floor(Math.random() * 10 - 10);
    const tiltAngleIncrement = Math.random() * 0.1 + 0.01;
    return { x, y, width, height, color, tilt, tiltAngleIncrement };
  }

  startConfetti() {
    if (this.animationFrame) {
      return;
    }

    const animate = () => {
      if (!this.context) {
        return;
      }

      this.context.clearRect(0, 0, this.canvas?.width || 0, this.canvas?.height || 0);

      for (const conf of this.confetti) {
        this.drawConfetti(conf);
        this.updateConfetti(conf);
      }

      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }

  drawConfetti(conf: { x: number; y: number; width: number; height: number; color: string; tilt: number; tiltAngleIncrement: number }) {
    if (!this.context || !this.canvas) {
      return;
    }

    this.context.beginPath();
    this.context.lineWidth = conf.width / 2;
    this.context.strokeStyle = conf.color;
    this.context.moveTo(conf.x + conf.tilt + conf.width / 2, conf.y);
    this.context.lineTo(conf.x + conf.tilt, conf.y + conf.height);
    this.context.stroke();
  }

  updateConfetti(conf: { x: number; y: number; width: number; height: number; color: string; tilt: number; tiltAngleIncrement: number }) {
    conf.tilt += conf.tiltAngleIncrement;
    conf.y += 2;

    if (conf.y > this.canvas?.height || conf.x > this.canvas?.width + 100) {
      conf.x = Math.random() * (this.canvas?.width || 0) + 100;
      conf.y = -this.canvas?.height || 0;
    }
  }

  stopConfetti() {
    cancelAnimationFrame(this.animationFrame || 0);
    this.animationFrame = null;
  }
}
