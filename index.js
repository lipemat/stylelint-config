'use strict';

module.exports = {
	'extends': '@wordpress/stylelint-config',
	'rules': {
		'declaration-property-unit-whitelist': null,
		'declaration-property-unit-allowed-list': {
			'line-height': [ 'px' ],
		},
		'function-parentheses-space-inside': null,
		'indentation': 'tab',
		'no-invalid-double-slash-comments': null,
		'number-leading-zero': null,
		'property-no-unknown': [
			true,
			{
				'ignoreProperties': [
					'/\/\//',
					'/^composes/',
				],
			},
		],
		'rule-empty-line-before': [
			'always',
			{
				'ignore': [
					'after-comment',
					'first-nested',
				],
			},
		],
		'selector-class-pattern': null,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': [
					'global',
				],
			},
		],
		'string-quotes': null,
	},
};