'use strict';

module.exports = {
	'extends': '@wordpress/stylelint-config',
	'rules': {
		'function-parentheses-space-inside': null,
		'no-descending-specificity': null,
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
