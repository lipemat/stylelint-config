'use strict';

module.exports = {
	'extends': '@wordpress/stylelint-config',
	'plugins': [
		'stylelint-order'
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
		'order/order': [
			'custom-properties',
			'declarations'
		],
		'order/properties-alphabetical-order': true,
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
