e.exports = function (e) {
	let t = e.regex,
		n = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?',
		r = {
			$pattern: n,
			keyword: [
				'after',
				'alias',
				'and',
				'case',
				'catch',
				'cond',
				'defstruct',
				'defguard',
				'do',
				'else',
				'end',
				'fn',
				'for',
				'if',
				'import',
				'in',
				'not',
				'or',
				'quote',
				'raise',
				'receive',
				'require',
				'reraise',
				'rescue',
				'try',
				'unless',
				'unquote',
				'unquote_splicing',
				'use',
				'when',
				'with|0'
			],
			literal: ['false', 'nil', 'true']
		},
		i = {
			className: 'subst',
			begin: /#\{/,
			end: /\}/,
			keywords: r
		},
		a = {
			match: /\\[\s\S]/,
			scope: 'char.escape',
			relevance: 0
		},
		s = '[/|([{<"\']',
		o = [
			{
				begin: /"/,
				end: /"/
			},
			{
				begin: /'/,
				end: /'/
			},
			{
				begin: /\//,
				end: /\//
			},
			{
				begin: /\|/,
				end: /\|/
			},
			{
				begin: /\(/,
				end: /\)/
			},
			{
				begin: /\[/,
				end: /\]/
			},
			{
				begin: /\{/,
				end: /\}/
			},
			{
				begin: /</,
				end: />/
			}
		],
		l = (e) => ({
			scope: 'char.escape',
			begin: t.concat(/\\/, e),
			relevance: 0
		}),
		u = {
			className: 'string',
			begin: '~[a-z](?=' + s + ')',
			contains: o.map((t) =>
				e.inherit(t, {
					contains: [l(t.end), a, i]
				})
			)
		},
		c = {
			className: 'string',
			begin: '~[A-Z](?=' + s + ')',
			contains: o.map((t) => e.inherit(t, { contains: [l(t.end)] }))
		},
		d = {
			className: 'regex',
			variants: [
				{
					begin: '~r(?=' + s + ')',
					contains: o.map((n) =>
						e.inherit(n, {
							end: t.concat(n.end, /[uismxfU]{0,7}/),
							contains: [l(n.end), a, i]
						})
					)
				},
				{
					begin: '~R(?=' + s + ')',
					contains: o.map((n) =>
						e.inherit(n, {
							end: t.concat(n.end, /[uismxfU]{0,7}/),
							contains: [l(n.end)]
						})
					)
				}
			]
		},
		_ = {
			className: 'string',
			contains: [e.BACKSLASH_ESCAPE, i],
			variants: [
				{
					begin: /"""/,
					end: /"""/
				},
				{
					begin: /'''/,
					end: /'''/
				},
				{
					begin: /~S"""/,
					end: /"""/,
					contains: []
				},
				{
					begin: /~S"/,
					end: /"/,
					contains: []
				},
				{
					begin: /~S'''/,
					end: /'''/,
					contains: []
				},
				{
					begin: /~S'/,
					end: /'/,
					contains: []
				},
				{
					begin: /'/,
					end: /'/
				},
				{
					begin: /"/,
					end: /"/
				}
			]
		},
		E = {
			className: 'function',
			beginKeywords: 'def defp defmacro defmacrop',
			end: /\B\b/,
			contains: [
				e.inherit(e.TITLE_MODE, {
					begin: n,
					endsParent: !0
				})
			]
		},
		f = e.inherit(E, {
			className: 'class',
			beginKeywords: 'defimpl defmodule defprotocol defrecord',
			end: /\bdo\b|$|;/
		}),
		h = [
			_,
			d,
			c,
			u,
			e.HASH_COMMENT_MODE,
			f,
			E,
			{ begin: '::' },
			{
				className: 'symbol',
				begin: ':(?![\\s:])',
				contains: [_, { begin: '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?' }],
				relevance: 0
			},
			{
				className: 'symbol',
				begin: n + ':(?!:)',
				relevance: 0
			},
			{
				className: 'title.class',
				begin: /(\b[A-Z][a-zA-Z0-9_]+)/,
				relevance: 0
			},
			{
				className: 'number',
				begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
				relevance: 0
			},
			{
				className: 'variable',
				begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
			}
		];
	return (
		(i.contains = h),
		{
			name: 'Elixir',
			aliases: ['ex', 'exs'],
			keywords: r,
			contains: h
		}
	);
};
