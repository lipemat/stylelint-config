const {lint} = require( 'stylelint' );
const config = require( '../../index' );

describe( 'at-rule-no-unknown', () => {

	test( 'Should error on unknown at-rules.', async () => {
		const {
			results: [ {warnings, errored, parseErrors} ],
		} = await lint( {
			files: 'dev/data/at-rules.css',
			config,
		} );

		expect( errored ).toEqual( true );
		expect( parseErrors ).toHaveLength( 0 );
		expect( warnings ).toHaveLength( 1 );

		expect( warnings[ 0 ].line ).toEqual( 6 );
		expect( warnings[ 0 ].column ).toEqual( 2 );
		expect( warnings[ 0 ].text ).toEqual( 'Unexpected unknown at-rule \"@unknown\" (at-rule-no-unknown)' );
	} );
} );
