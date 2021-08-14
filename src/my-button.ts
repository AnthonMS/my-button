/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	LitElement,
	html,
	customElement,
	property,
	CSSResult,
	TemplateResult,
	css,
	PropertyValues,
	internalProperty,
} from 'lit-element';
import {
	HomeAssistant,
	hasConfigOrEntityChanged,
	hasAction,
	ActionHandlerEvent,
	handleAction,
	LovelaceCardEditor,
	getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';

import type { BoilerplateCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
	`%c  MY-BUTTON \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
	'color: orange; font-weight: bold; background: green',
	'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
	type: 'my-button',
	name: 'My Button',
	description: 'This is just my custom button card, it does what I need it to do without to much customization.',
});

// TODONE Name your custom element
@customElement('my-button')
export class MyButton extends LitElement {

	public static async getConfigElement(): Promise<LovelaceCardEditor> {
		return document.createElement('boilerplate-card-editor');
	}

	public static getStubConfig(): object {
		return {};
	}

	// hass: {},
	// config: {},
	// active: {}
	// TODO Add any properities that should cause your element to re-render here
	// https://lit-element.polymer-project.org/guide/properties
	@property({ attribute: false }) public hass!: HomeAssistant;
	@internalProperty() private config!: BoilerplateCardConfig;

	// https://lit-element.polymer-project.org/guide/properties#accessors-custom
	public setConfig(config: BoilerplateCardConfig): void {
		// TODO Check for required fields and that they are of the proper format
		if (!config) {
			throw new Error(localize('common.invalid_configuration'));
		}

		if (!config.entity) {
			throw new Error('You need to define an entity');
		}

		this.config = {
			name: 'MyButton',
			...config,
		};
	}

	// https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
	protected shouldUpdate(changedProps: PropertyValues): boolean {
		if (!this.config) {
			return false;
		}

		return hasConfigOrEntityChanged(this, changedProps, false);
	}

	// https://lit-element.polymer-project.org/guide/templates
	protected render(): TemplateResult | void {
		// var minBar = this.config.minBar ? this.config.minBar : 0;
		// console.log("Test-Card Config:", this.config)

		let cardHeight = this.config.styles.card.height ? this.config.styles.card.height : "100%"
		let cardWidth = this.config.styles.card.width ? this.config.styles.card.width : "100%"
		this.style.height = cardHeight
		this.style.width = cardWidth

		const haCardStyles = `
			width: 100%;
			height: 100%;
		`
		let cardOffsetWidth = this.offsetWidth
		let cardOffsetHeight = this.offsetHeight

		console.log("My-Button -> ", this)
		console.log("My-Button Width -> ", cardOffsetWidth)
		console.log("My-Button Height -> ", cardOffsetHeight)

		
		const reportWindowSize = () => {
			cardOffsetWidth = this.offsetWidth
			cardOffsetHeight = this.offsetHeight
		}
		window.addEventListener('resize', reportWindowSize);

		var styleVariables = `
		  --card-height: ${cardHeight};
		  --card-width: -${cardWidth};


		  --slider-height: 40px;
		  --slider-width: ${cardOffsetWidth}px

		`;



		return html`
      <ha-card style="${haCardStyles}"
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
			hasHold: hasAction(this.config.hold_action),
			hasDoubleClick: hasAction(this.config.double_tap_action),
		})}>

        <div class="grid-area" style="${styleVariables}">

            <div class="main-container">
                <div class="img-container">
                </div>
                <div class="info-container">
                    <p class="text row-3">57%</p>
                    <p class="text row-2">Kitchen Lights</p>
                    <p class="text row-1">Row 1</p>
                </div>
            </div>

            <div class="right-container">
				<div class="slider-container">
					<input type="range" class="input-slider">
				</div>
            </div>

        </div>

      </ha-card>
    `;
	}

	private _handleAction(ev: ActionHandlerEvent): void {
		console.log("Test 3")
		if (this.hass && this.config && ev.detail.action) {
			handleAction(this, this.hass, this.config, ev.detail.action);
		}
	}


	// https://lit-element.polymer-project.org/guide/styles
	static get styles(): CSSResult {
		const sliderCss = css`
		/* vertical slider styling */
		.slider-container {
			padding: 0;
			margin: 0;
			position:absolute;
			left: 49px;
			top: 0px;
		}
		.input-slider {
			-webkit-appearance: none;
			position: relative;
			overflow: hidden;
			height: var(--slider-height);
			width: var(--slider-width);
			cursor: pointer;
			border-radius: 0;
			border: none;
			outline: none;
			margin: 0;
			padding: 0;
			
			-webkit-transform: rotate(-90deg);
			-moz-transform: rotate(-90deg);
			-o-transform: rotate(-90deg);
			-ms-transform: rotate(-90deg);
			transform: rotate(-90deg);
		}
		
		.input-slider::-webkit-slider-runnable-track {
			background: lightblue;
		}
		
		
		.input-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 8px; /* 1 */
			height: 40px;
			background: #fff;
			box-shadow: -100vw 0 0 100vw dodgerblue;
			border-top: 10px solid dodgerblue;
			border-right: 7px solid dodgerblue;
			border-bottom: 10px solid dodgerblue;
			border-left: none;
		}
		
		.input-slider::-ms-fill-lower { 
			background: dodgerblue;
		}
		
		.input-slider::-ms-thumb { 
			background: #fff;
			border: 2px solid #999;
			height: 40px;
			width: 20px;
			box-sizing: border-box;
		}
		
		.input-slider::-ms-ticks-after { 
			display: none; 
		}
		
		.input-slider::-ms-ticks-before { 
			display: none; 
		}
		
		.input-slider::-ms-track { 
			background: #ddd;
			color: transparent;
			height: 40px;
			border: none;
		}
		
		.input-slider::-ms-tooltip { 
			display: none;
		}
		`

		return css`
		${sliderCss}
        .grid-area {
          height: 100%;
          display: grid;
          grid-template-columns: 3fr 1fr;
          grid-gap: 0px;
          padding: 0px;
        }

        .main-container { 
            background-color: grey;
            position: relative;
        }

        .right-container { 
            background-color: grey;
        }

        .img-container {
            position:absolute;
            top: 15%;
            left: 15%;
        }

        .info-container {
            position:absolute;
            left: 10%;
            bottom: 10%;
            right: 10%;
            height: 50%;
            display: flex;
            flex-direction: column-reverse;
        }
        .row-1 {
            font-weight: bold;
        }
        .row-2 {
        }
        .row-3 {
            font-size: 75%;
        }

        .text {
            padding: 0;
            margin: 0;
        }
    `;
	}
}
