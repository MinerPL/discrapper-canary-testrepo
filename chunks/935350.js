e.exports = function (e) {
	let t = e.regex,
		n = {
			$pattern: /[\w.\/]+/,
			built_in: ['action', 'bindattr', 'collection', 'component', 'concat', 'debugger', 'each', 'each-in', 'get', 'hash', 'if', 'in', 'input', 'link-to', 'loc', 'log', 'lookup', 'mut', 'outlet', 'partial', 'query-params', 'render', 'template', 'textarea', 'unbound', 'unless', 'view', 'with', 'yield']
		},
		r = /\[\]|\[[^\]]+\]/,
		i = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
		a = t.either(/""|"[^"]+"/, /''|'[^']+'/, r, i),
		s = t.concat(t.optional(/\.|\.\/|\//), a, t.anyNumberOfTimes(t.concat(/(\.|\/)/, a))),
		o = t.concat('(', r, '|', i, ')(?==)'),
		l = { begin: s },
		u = e.inherit(l, {
			keywords: {
				$pattern: /[\w.\/]+/,
				literal: ['true', 'false', 'undefined', 'null']
			}
		}),
		c = {
			begin: /\(/,
			end: /\)/
		},
		d = {
			className: 'attr',
			begin: o,
			relevance: 0,
			starts: {
				begin: /=/,
				end: /=/,
				starts: {
					contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, u, c]
				}
			}
		},
		_ = {
			contains: [
				e.NUMBER_MODE,
				e.QUOTE_STRING_MODE,
				e.APOS_STRING_MODE,
				{
					begin: /as\s+\|/,
					keywords: { keyword: 'as' },
					end: /\|/,
					contains: [{ begin: /\w+/ }]
				},
				d,
				u,
				c
			],
			returnEnd: !0
		},
		E = e.inherit(l, {
			className: 'name',
			keywords: n,
			starts: e.inherit(_, { end: /\)/ })
		});
	c.contains = [E];
	let f = e.inherit(l, {
			keywords: n,
			className: 'name',
			starts: e.inherit(_, { end: /\}\}/ })
		}),
		h = e.inherit(l, {
			keywords: n,
			className: 'name'
		}),
		p = e.inherit(l, {
			className: 'name',
			keywords: n,
			starts: e.inherit(_, { end: /\}\}/ })
		});
	return {
		name: 'Handlebars',
		aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
		case_insensitive: !0,
		subLanguage: 'xml',
		contains: [
			{
				begin: /\\\{\{/,
				skip: !0
			},
			{
				begin: /\\\\(?=\{\{)/,
				skip: !0
			},
			e.COMMENT(/\{\{!--/, /--\}\}/),
			e.COMMENT(/\{\{!/, /\}\}/),
			{
				className: 'template-tag',
				begin: /\{\{\{\{(?!\/)/,
				end: /\}\}\}\}/,
				contains: [f],
				starts: {
					end: /\{\{\{\{\//,
					returnEnd: !0,
					subLanguage: 'xml'
				}
			},
			{
				className: 'template-tag',
				begin: /\{\{\{\{\//,
				end: /\}\}\}\}/,
				contains: [h]
			},
			{
				className: 'template-tag',
				begin: /\{\{#/,
				end: /\}\}/,
				contains: [f]
			},
			{
				className: 'template-tag',
				begin: /\{\{(?=else\}\})/,
				end: /\}\}/,
				keywords: 'else'
			},
			{
				className: 'template-tag',
				begin: /\{\{(?=else if)/,
				end: /\}\}/,
				keywords: 'else if'
			},
			{
				className: 'template-tag',
				begin: /\{\{\//,
				end: /\}\}/,
				contains: [h]
			},
			{
				className: 'template-variable',
				begin: /\{\{\{/,
				end: /\}\}\}/,
				contains: [p]
			},
			{
				className: 'template-variable',
				begin: /\{\{/,
				end: /\}\}/,
				contains: [p]
			}
		]
	};
};
