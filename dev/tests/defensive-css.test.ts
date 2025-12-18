const {lint} = require( 'stylelint' );
const config = require( '../../index' );
/**
 * Tests for Stylelint Plugin Defensive CSS.
 *
 * @link https://github.com/yuschick/stylelint-plugin-defensive-css
 */
describe( 'Stylelint Plugin Defensive CSS', () => {
	test( 'Should error if background-repeat not defined.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/background.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 2 );

		expect( warnings[ 0 ].line ).toEqual( 5 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'Whenever setting a background image, be sure to explicitly define a `background-repeat` value. Learn more: https://defensivecss.dev/tip/bg-repeat/ (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'Whenever setting a background image, be sure to explicitly define a `background-repeat` value. Learn more: https://defensivecss.dev/tip/bg-repeat/ (plugin/use-defensive-css)' );
	} );

	test( 'Should error if hover affects mobile devices.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/hover.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 3 );

		expect( warnings[ 0 ].line ).toEqual( 4 );
		expect( warnings[ 0 ].column ).toEqual( 1 );
		expect( warnings[ 0 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap `:hover` selectors inside a `@media (hover: hover) { ...your styles }` query. Learn more: https://defensivecss.dev/tip/hover-media/ (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap `:hover` selectors inside a `@media (hover: hover) { ...your styles }` query. Learn more: https://defensivecss.dev/tip/hover-media/ (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 16 );
		expect( warnings[ 2 ].column ).toEqual( 3 );
		expect( warnings[ 2 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap `:hover` selectors inside a `@media (hover: hover) { ...your styles }` query. Learn more: https://defensivecss.dev/tip/hover-media/ (plugin/use-defensive-css)' );
	} );


	test( 'Custom properties', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/custom-properties.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 4 );

		warnings.forEach( warning => {
			expect( warning.column ).toEqual( 2 );
			expect( warning.text ).toEqual( 'Provide a fallback value for a custom property like `var(--your-custom-property, #000000)` to prevent issues in the event the custom property is not defined. Learn more: https://defensivecss.dev/tip/css-variable-fallback/ (plugin/use-defensive-css)' );
		} );

		expect( warnings[ 0 ].line ).toEqual( 7 );
		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 2 ].line ).toEqual( 11 );
		expect( warnings[ 3 ].line ).toEqual( 13 );
	} );


	test( 'Should error if flex-wrap is not defined.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/flex-wrap.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 3 );

		expect( warnings[ 0 ].line ).toEqual( 5 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'Whenever setting an element to `display: flex` a `flex-wrap` value must be defined. Set `flex-wrap: nowrap` for the default behavior. Learn more: https://defensivecss.dev/tip/flexbox-wrapping/ (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'Whenever setting an element to `display: flex` a `flex-wrap` value must be defined. Set `flex-wrap: nowrap` for the default behavior. Learn more: https://defensivecss.dev/tip/flexbox-wrapping/ (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 14 );
		expect( warnings[ 2 ].column ).toEqual( 2 );
		expect( warnings[ 2 ].text ).toEqual( 'Whenever setting an element to `display: flex` a `flex-wrap` value must be defined. Set `flex-wrap: nowrap` for the default behavior. Learn more: https://defensivecss.dev/tip/flexbox-wrapping/ (plugin/use-defensive-css)' );
	} );

	test( 'Should error if overscroll-behavior is not defined.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/scroll-chaining.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 3 );

		expect( warnings[ 0 ].line ).toEqual( 5 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'To prevent scroll chaining between contexts, any container with a scrollable overflow must have a `overscroll-behavior` value defined. Learn more: https://defensivecss.dev/tip/scroll-chain/ (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'To prevent scroll chaining between contexts, any container with a scrollable overflow must have a `overscroll-behavior` value defined. Learn more: https://defensivecss.dev/tip/scroll-chain/ (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 13 );
		expect( warnings[ 2 ].column ).toEqual( 2 );
		expect( warnings[ 2 ].text ).toEqual( 'To prevent scroll chaining between contexts, any container with a scrollable overflow must have a `overscroll-behavior` value defined. Learn more: https://defensivecss.dev/tip/scroll-chain/ (plugin/use-defensive-css)' );
	} );

	test( 'Should error if vendor prefixes are grouped together.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/vendor-prefix-grouping.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 1 );

		expect( warnings[ 0 ].line ).toEqual( 4 );
		expect( warnings[ 0 ].column ).toEqual( 1 );
		expect( warnings[ 0 ].text ).toEqual( 'To prevent invalid rules in unsupported environments, split each vendor prefix into its own, individual rule. Learn more: https://defensivecss.dev/tip/grouping-selectors/ (plugin/use-defensive-css)' );
	} );

} );
