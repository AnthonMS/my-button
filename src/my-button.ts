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

	static get properties() {
		return {
			hass: {},
			config: {},
			active: {}
		};
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
		console.log("Test-Card Config:", this.config)

		// -- Make copy of the config, this way we can add empty -- //
		// -- objects and save ourselves a lot of if statements -- //
		var conf = JSON.parse(JSON.stringify(this.config));
		// console.log("Test-Card Test:", conf)

		
		const entityId = this.config.entity
		const entity = this.hass.states[`${entityId}`]
		console.log("ENTITY:::", entity)
		
		// -- Check if styles for different options exists -- //
		conf.styles = conf.styles ? conf.styles : {}
		conf.styles.card = conf.styles.card ? conf.styles.card : {}
		conf.styles.slider = conf.styles.slider ? conf.styles.slider : {}
		conf.styles.text = conf.styles.text ? conf.styles.text : {}
		conf.styles.text.row1 = conf.styles.text.row1 ? conf.styles.text.row1 : {}
		conf.styles.text.row2 = conf.styles.text.row2 ? conf.styles.text.row2 : {}
		conf.styles.text.row3 = conf.styles.text.row3 ? conf.styles.text.row3 : {}

		// ---- Card Variables ---- //
		let cardHeight = conf.styles.card.height ? conf.styles.card.height : "100%"
		let cardWidth = conf.styles.card.width ? conf.styles.card.width : "100%"
		this.style.height = cardHeight
		this.style.width = cardWidth

		let cardPxWidth = this.offsetWidth
		let cardPxHeight = this.offsetHeight
		window.addEventListener('resize', () => {
			cardPxWidth = this.offsetWidth
			cardPxHeight = this.offsetHeight
		});


		let cardBorderRadius = conf.styles.card.borderRadius ? conf.styles.card.borderRadius : "10%"
		let cardBackgroundColor = conf.styles.card.backgroundColor ? conf.styles.card.backgroundColor : "rgba(255, 255, 255, 1)"
		let cardBackgroundColorOff = conf.styles.card.backgroundColorOff ? conf.styles.card.backgroundColorOff : "rgba(230, 230, 230, 0.5)"
		// ------------------------ //

		// ---- Slider Variables ---- //
		let sliderPosition = conf.styles.slider.position ? conf.styles.slider.position : "right"
		if (sliderPosition === "right") {
			console.log("DISPLAY THIS SLIDER ON THE RIGHT SIDE VERTICALLY!")
		}
		let sliderHeight = conf.styles.slider.height ? conf.styles.slider.height : "40px"
		let sliderBackgroundColor = conf.styles.slider.backgroundColor ? conf.styles.slider.backgroundColor : "transparent"
		let sliderProgressColor = conf.styles.slider.progressColor ? conf.styles.slider.progressColor : "green"

		// ------------------------ //

		// ---- Text Variables ---- //
		let row1Color = conf.styles.text.row1.color ? conf.styles.text.row1.color : "black"
		let row1OneLine = conf.styles.text.row1.oneLine ? conf.styles.text.row1.oneLine : true
		let row1Size = conf.styles.text.row1.size ? conf.styles.text.row1.size : "15px"
		let row2Color = conf.styles.text.row2.color ? conf.styles.text.row2.color : "black"
		let row2OneLine = conf.styles.text.row2.oneLine ? conf.styles.text.row2.oneLine : true
		let row2Size = conf.styles.text.row2.size ? conf.styles.text.row2.size : "13px"
		let row3Color = conf.styles.text.row3.color ? conf.styles.text.row3.color : "black"
		let row3OneLine = conf.styles.text.row3.oneLine ? conf.styles.text.row3.oneLine : true
		let row3Size = conf.styles.text.row3.size ? conf.styles.text.row3.size : "13px"
		// ------------------------ //

		// console.log("My-Button -> ", this)
		// console.log("My-Button Width -> ", cardPxWidth)
		// console.log("My-Button Height -> ", cardPxHeight)

		// -- Calculate Left position for slider in right side
		// let verticalRightLeftPos = (cardPxHeight/2) - (parseInt(sliderHeight)/2)



		

		// --slider-main-color: ${(entity.state === "off" || entity.state === "locked" || entity.state == undefined) ? cardBackgroundColorOff : cardBackgroundColor};
		const haCardStyles = `
			width: 100%;
			height: 100%;
			border-radius: ${cardBorderRadius};
			background-color: ${(entity.state === "off" || entity.state === "locked" || entity.state == undefined) ? cardBackgroundColorOff : cardBackgroundColor};
			overflow: hidden;
		`


		var styleVariables = `
			--card-height: ${cardHeight};
			--card-width: ${cardWidth};
			--card-border-radius: ${cardBorderRadius};
		`;

		var sliderRightVariables = `
			--slider-height: ${sliderHeight};
			--slider-width: ${cardPxHeight + 10}px;
			--slider-left-pos: ${(cardPxHeight/2) - (parseInt(sliderHeight)/2) + 2}px;
			--slider-top-pos: ${(cardPxHeight/2) - (parseInt(sliderHeight)/2) + 2}px;
			--slider-background-color: ${sliderBackgroundColor};
			--slider-progress-color: ${(entity.state === "off" || entity.state === "locked" || entity.state == undefined) ? "transparent" : sliderProgressColor}

	  	`;

		var textVariables = `
			--row-1-color: ${row1Color};
			--row-2-color: ${row2Color};
			--row-3-color: ${row3Color};
			--row-1-size: ${row1Size};
			--row-1-line-height: ${parseInt(row1Size) + 2}px;
			--row-2-size: ${row2Size};
			--row-2-line-height: ${parseInt(row2Size) + 2}px;
			--row-3-size: ${row3Size};
			--row-3-line-height: ${parseInt(row3Size) + 2}px;
		`;


	//   @action=${this._handleAction}
	//   .actionHandler=${actionHandler({
	// 	  hasHold: hasAction(this.config.hold_action),
	// 	  hasDoubleClick: hasAction(this.config.double_tap_action),
	//   })}
		return html`
			<ha-card style="${haCardStyles}">

				<div class="root-container" style="${styleVariables}">
					<div class="grid-area"
						@action=${this._handleAction}
						.actionHandler=${actionHandler({
							hasHold: hasAction(this.config.hold_action),
							hasDoubleClick: hasAction(this.config.double_tap_action),
						})}>
						<div class="main-container">
							<div class="info-container" style="${textVariables}">
								<p class="row-3 ${row1OneLine ? "text-oneline" : "text"}">51%</p>
								<p class="row-2 ${row2OneLine ? "text-oneline" : "text"}">Info 2</p>
								<p class="row-1 ${row3OneLine ? "text-oneline" : "text"}">Kitchen Lights</p>
								
							</div>
						</div>
						<div class="right-container">
							</div>
						</div>


					<input class="input-slider" orient="vertical" type="range" step="1" value=150" min="1" max="254" style="${sliderRightVariables}">
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
		// -webkit-transform: rotate(-90deg);
		// -moz-transform: rotate(-90deg);
		// -o-transform: rotate(-90deg);
		// -ms-transform: rotate(-90deg);
		// transform: rotate(-90deg);

		// position: absolute;
		// left: var(--slider-left-pos);
		// top: var(--slider-top-pos);
		const sliderCss = css`
		/* vertical slider styling */
		.slider-container {
			padding: 0;
			margin: 0;
		}
		.input-slider {
			-webkit-appearance: none;
			overflow: hidden;
			background: var(--slider-background-color);
			height: var(--slider-height);
			width: var(--slider-width);
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


			position: absolute;
			left: var(--slider-left-pos);
			top: var(--slider-top-pos);
			
		}
		
		.input-slider::-webkit-slider-runnable-track {
		}

		
		
		.input-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 8px; /* 1 */
			height: 40px;
			background: var(--slider-progress-color);
			box-shadow: -100vw 0 0 100vw var(--slider-progress-color);
			border-top: 10px solid var(--slider-progress-color);
			border-right: 7px solid var(--slider-progress-color);
			border-bottom: 10px solid var(--slider-progress-color);
			border-left: none;
			cursor: pointer;
		}
		
		`

		return css`
		${sliderCss}
		.root-container {
			height: var(--card-height);
			width: var(--card-width);
		}
        .grid-area {
          height: 100%;
          display: grid;
          grid-template-columns: 3fr 1fr;
          grid-gap: 0px;
          padding: 0px;
        }

        .main-container { 
            position: relative;
        }

        .right-container { 
        }

        .img-container {
            position: absolute;
            top: 15%;
            left: 15%;
        }

        .info-container-old {
            position:absolute;
            left: 10%;
            bottom: 10%;
            right: -15%;
            height: 50%;
            display: flex;
            flex-direction: column-reverse;
			background: blue;
        }
        .info-container {
			height: 100%;
			width: 100%;
            display: flex;
            flex-direction: column-reverse;
        }


        .text-oneline {
            padding: 0;
            margin: 0;
			overflow: hidden;
			white-space: nowrap;
        }
		.text {
            padding: 0;
            margin: 0;
		}

		.row-1 {
			margin: 0 0 10px 7px;
            font-weight: bold;
			font-size: var(--row-1-size);
			line-height: var(--row-1-line-height);
			color: var(--row-1-color);
		}
		.row-2 {
			margin: 0 0 5px 9px;
			font-size: 13px;
			line-height: var(--row-2-line-height);
			color: var(--row-2-color);
		}
		.row-3 {
			margin: 0 0 15px 9px;
			font-size: 13px;
			line-height: var(--row-3-line-height);
			color: var(--row-3-color);
		}


    `;
	}
}
