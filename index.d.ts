export = SynapsClient;
declare class SynapsClient {
    /**
     * Partial data for the colors.
     * @typedef {Object} Colors
     * @property {string} [primary]
     * @property {string} [secondary]
     */
    /**
     * Partial data for the options.
     * @typedef {Object} Options
     * @property {'modal' | 'embed'} [type] The type used
     * @property {string} [element_id] The element used for the model, or the embed
     * @property {Colors} [colors] The colors of the Verify UI
     * @property {string} [lang] The default language
     * @property {int} [tier] The tier
     */
    /**
     * Interaction with the Verify UI.
     * @param {string} [sessionID] The session ID
     * @param {'individual' | 'corporate'} [service] The service
     * @param {string} [url=undefined] override url
     */
    constructor(sessionID?: string, service?: 'individual' | 'corporate', url?: string);
    baseURL: string;
    sessionID: string;
    service: "individual" | "corporate";
    elementID: string;
    colors: {};
    type: string;
    lang: string;
    tier: any;
    callbacks: {};
    isOpen: boolean;
    alreadyInit: boolean;
    styles: string;
    _initStyle(): void;
    /**
     * Setup, and init the different modules and settings.
     * @param {Options} [options] The options
     */
    init(options?: {
        /**
         * The type used
         */
        type?: 'modal' | 'embed';
        /**
         * The element used for the model, or the embed
         */
        element_id?: string;
        /**
         * The colors of the Verify UI
         */
        colors?: {
            primary?: string;
            secondary?: string;
        };
        /**
         * The default language
         */
        lang?: string;
        /**
         * The tier
         */
        tier?: number;
    }): void;
    iframe: HTMLIFrameElement;
    /**
     * Initialization loader
     * @return {string}
     * @private
     */
    private _initLoad;
    /**
     * Generate the URL of the verify UI.
     * @return {string}
     * @private
     */
    private _formatURL;
    /**
     * Initialize events.
     * @private
     */
    private _initEvents;
    /**
     * Initialize the modal.
     * @private
     */
    private _initModal;
    /**
     * Initialize the embed.
     * @return {void}
     * @private
     */
    private _initEmbed;
    loader: HTMLDivElement;
    loaderElement: HTMLElement | HTMLBodyElement;
    /**
     * Listen to an event.
     * @param {'finish'} [type] The event name
     * @param {function} [callback] The callback
     */
    on(type?: 'finish', callback?: Function): void;
    /**
     * Open a verify UI session.
     */
    openSession(): void;
    /**
     * Get the flow.
     * @return {HTMLIFrameElement}
     */
    getFlow(): HTMLIFrameElement;
    /**
     * Close the verify UI session.
     */
    closeFlow(): void;
}
//# sourceMappingURL=index.d.ts.map