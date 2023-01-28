import InterfaceInputAutocompleteAPI from './input-autocomplete-api-alt.vue';

export default {
    id: 'input-autocomplete-api-alt',
    name: 'Autocomplete Input (API) Alt',
    icon: 'find_in_page',
    description: 'An alternative to the autocomplete input that uses the API to fetch suggestions.',
    component: InterfaceInputAutocompleteAPI,
    types: ['json'],
    localTypes: ['standard'],
    group: 'standard',
    recommendedDisplays: ['formatted-value'],
    options: [
        {
            field: 'url',
            name: 'url',
            type: 'string',
            meta: {
                interface: 'input',
                options: {
                    placeholder: 'https://demo.com/search?q={{value}}',
                    font: 'monospace',
                },
                width: 'full',
            },
        },
        {
            field: 'resultsPath',
            name: 'results_path',
            type: 'string',
            meta: {
                interface: 'input',
                options: {
                    placeholder: 'result.predictions',
                    font: 'monospace',
                },
                width: 'full',
            },
        },
        {
            field: 'textPath',
            name: 'text_path',
            type: 'string',
            meta: {
                interface: 'input',
                options: {
                    placeholder: 'structured_main_text',
                    font: 'monospace',
                },
                width: 'half',
            },
        },
        {
            field: 'valuePath',
            name: 'value_path',
            type: 'string',
            meta: {
                interface: 'input',
                options: {
                    placeholder: 'structured_main_value',
                    font: 'monospace',
                },
                width: 'half',
            },
        },
        {
            field: 'trigger',
            name: 'trigger',
            type: 'string',
            schema: {
                default_value: 'throttle',
            },
            meta: {
                width: 'half',
                interface: 'select-dropdown',
                options: {
                    choices: [
                        {
                            text: 'Throttle',
                            value: 'throttle',
                        },
                        {
                            text: 'Debounce',
                            value: 'debounce',
                        },
                    ],
                },
            },
        },
        {
            field: 'rate',
            name: 'rate',
            type: 'integer',
            schema: {
                default_value: 500,
            },
            meta: {
                width: 'half',
                interface: 'input',
            },
        },
        {
            field: 'placeholder',
            name: 'placeholder',
            meta: {
                width: 'half',
                interface: 'system-input-translated-string',
                options: {
                    placeholder: 'enter_a_placeholder',
                },
            },
        },
        {
            field: 'font',
            name: 'font',
            type: 'string',
            meta: {
                width: 'half',
                interface: 'select-dropdown',
                options: {
                    choices: [
                        {text: 'sans_serif', value: 'sans-serif'},
                        {text: 'monospace', value: 'monospace'},
                        {text: 'serif', value: 'serif'},
                    ],
                },
            },
            schema: {
                default_value: 'sans-serif',
            },
        },
        {
            field: 'iconLeft',
            name: 'icon_left',
            type: 'string',
            meta: {
                width: 'half',
                interface: 'select-icon',
            },
        },
        {
            field: 'iconRight',
            name: 'icon_right',
            type: 'string',
            meta: {
                width: 'half',
                interface: 'select-icon',
            },
        },
    ]
}