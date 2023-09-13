'use strict';

module.exports = {
	'extends': '@wordpress/stylelint-config',
	'plugins': [
		'stylelint-order',
		'stylelint-plugin-defensive-css'
	],
	'rules': {
		'at-rule-empty-line-before': [
			'always',
			{
				'except': [
					'blockless-after-blockless',
					'first-nested'
				],
				'ignore': [ 'after-comment' ]
			}
		],
		'comment-empty-line-before': null,
		'declaration-colon-newline-after': null,
		'function-parentheses-space-inside': null,
		'no-descending-specificity': null,
		'no-invalid-double-slash-comments': null,
		'number-leading-zero': null,
		"order/order": [
			"custom-properties",
			'declarations'
		],
		'order/properties-order': [
			[
				'composes'
			],
			{
				'unspecified': 'bottomAlphabetical'
			}
		],
		'order/properties-alphabetical-order': null,
		'plugin/use-defensive-css': [ true, {
			'accidental-hover': true,
			'background-repeat': true,
			'custom-property-fallbacks': [ true, {
				'ignore': [
					// Ignore all custom properties that don't contain `--wp-`.
					/^((?!\( *?--wp-).)*$/
				]
			} ],
			'flex-wrapping': true,
			'scroll-chaining': true,
			'vendor-prefix-grouping': true
		} ],
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
				'except': [
					'first-nested',
					'after-single-line-comment'
				],
				'ignore': [
					'after-comment',
				],
			},
		],
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
