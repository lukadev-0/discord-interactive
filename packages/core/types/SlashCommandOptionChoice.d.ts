export default class SlashCommandOptionChoice {
    /**
     * @typedef {Object} SlashCommandOptionChoiceInfo
     * @property {string} name - The name of the choice
     * @property {string|number} value - The value of the choice
     */
    /**
     * @param {SlashCommandOptionChoiceInfo} data
     */
    constructor(data: SlashCommandOptionChoiceInfo);
    /**
     * The name of the choice
     * @type {string}
     */
    name: string;
    /**
     * The value of the choice
     * @type {value}
     */
    value: any;
}

export interface SlashCommandOptionChoiceInfo {
    /**
     * - The name of the choice
     */
    name: string;
    /**
     * - The value of the choice
     */
    value: string | number;
}
