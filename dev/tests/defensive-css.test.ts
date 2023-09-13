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
		expect( warnings[ 0 ].text ).toEqual( 'Ensure a background-repeat property is defined when using a background image. (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'Ensure a background-repeat property is defined when using a background image. (plugin/use-defensive-css)' );
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
		expect( warnings[ 0 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap :hover selectors inside a @media (hover: hover) { ...your styles } query. (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap :hover selectors inside a @media (hover: hover) { ...your styles } query. (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 16 );
		expect( warnings[ 2 ].column ).toEqual( 3 );
		expect( warnings[ 2 ].text ).toEqual( 'To prevent accidental hover states on mobile devices, wrap :hover selectors inside a @media (hover: hover) { ...your styles } query. (plugin/use-defensive-css)' );
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
		expect( warnings ).toHaveLength( 2 );

		expect( warnings[ 0 ].line ).toEqual( 6 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'Ensure that any custom properties have a fallback value. (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 8 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'Ensure that any custom properties have a fallback value. (plugin/use-defensive-css)' );
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
		expect( warnings[ 0 ].text ).toEqual( 'Flex rows must have a `flex-wrap` value defined.` (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'Flex rows must have a `flex-wrap` value defined.` (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 14 );
		expect( warnings[ 2 ].column ).toEqual( 2 );
		expect( warnings[ 2 ].text ).toEqual( 'Flex rows must have a `flex-wrap` value defined.` (plugin/use-defensive-css)' );
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
		expect( warnings[ 0 ].text ).toEqual( 'Containers with an auto or scroll \'overflow\' must also have an \'overscroll-behavior\' property defined. (plugin/use-defensive-css)' );

		expect( warnings[ 1 ].line ).toEqual( 9 );
		expect( warnings[ 1 ].column ).toEqual( 2 );
		expect( warnings[ 1 ].text ).toEqual( 'Containers with an auto or scroll \'overflow\' must also have an \'overscroll-behavior\' property defined. (plugin/use-defensive-css)' );

		expect( warnings[ 2 ].line ).toEqual( 13 );
		expect( warnings[ 2 ].column ).toEqual( 2 );
		expect( warnings[ 2 ].text ).toEqual( 'Containers with an auto or scroll \'overflow\' must also have an \'overscroll-behavior\' property defined. (plugin/use-defensive-css)' );
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
		expect( warnings[ 0 ].text ).toEqual( 'Separate different vendor prefixes into their own rules. (plugin/use-defensive-css)' );
	} );

} );
