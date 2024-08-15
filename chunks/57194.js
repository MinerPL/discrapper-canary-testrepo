function t(e) {
	return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function n(e) {
	return e ? ('string' == typeof e ? e : e.source) : null;
}
function r(e) {
	return i('(?=', e, ')');
}
function i(...e) {
	return e.map((e) => n(e)).join('');
}
function a(...e) {
	return (
		'(' +
		((function (e) {
			let t = e[e.length - 1];
			return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
		})(e).capture
			? ''
			: '?:') +
		e.map((e) => n(e)).join('|') +
		')'
	);
}
e.exports = function (e) {
	let n = {
			scope: 'keyword',
			match: /\b(yield|return|let|do|match|use)!/
		},
		s = [
			'bool',
			'byte',
			'sbyte',
			'int8',
			'int16',
			'int32',
			'uint8',
			'uint16',
			'uint32',
			'int',
			'uint',
			'int64',
			'uint64',
			'nativeint',
			'unativeint',
			'decimal',
			'float',
			'double',
			'float32',
			'single',
			'char',
			'string',
			'unit',
			'bigint',
			'option',
			'voption',
			'list',
			'array',
			'seq',
			'byref',
			'exn',
			'inref',
			'nativeptr',
			'obj',
			'outref',
			'voidptr',
			'Result'
		],
		o = {
			keyword: [
				'abstract',
				'and',
				'as',
				'assert',
				'base',
				'begin',
				'class',
				'default',
				'delegate',
				'do',
				'done',
				'downcast',
				'downto',
				'elif',
				'else',
				'end',
				'exception',
				'extern',
				'finally',
				'fixed',
				'for',
				'fun',
				'function',
				'global',
				'if',
				'in',
				'inherit',
				'inline',
				'interface',
				'internal',
				'lazy',
				'let',
				'match',
				'member',
				'module',
				'mutable',
				'namespace',
				'new',
				'of',
				'open',
				'or',
				'override',
				'private',
				'public',
				'rec',
				'return',
				'static',
				'struct',
				'then',
				'to',
				'try',
				'type',
				'upcast',
				'use',
				'val',
				'void',
				'when',
				'while',
				'with',
				'yield'
			],
			literal: ['true', 'false', 'null', 'Some', 'None', 'Ok', 'Error', 'infinity', 'infinityf', 'nan', 'nanf'],
			built_in: [
				'not',
				'ref',
				'raise',
				'reraise',
				'dict',
				'readOnlyDict',
				'set',
				'get',
				'enum',
				'sizeof',
				'typeof',
				'typedefof',
				'nameof',
				'nullArg',
				'invalidArg',
				'invalidOp',
				'id',
				'fst',
				'snd',
				'ignore',
				'lock',
				'using',
				'box',
				'unbox',
				'tryUnbox',
				'printf',
				'printfn',
				'sprintf',
				'eprintf',
				'eprintfn',
				'fprintf',
				'fprintfn',
				'failwith',
				'failwithf'
			],
			'variable.constant': ['__LINE__', '__SOURCE_DIRECTORY__', '__SOURCE_FILE__']
		},
		l = {
			variants: [e.COMMENT(/\(\*(?!\))/, /\*\)/, { contains: ['self'] }), e.C_LINE_COMMENT_MODE]
		},
		u = {
			scope: 'variable',
			begin: /``/,
			end: /``/
		},
		c = /\B('|\^)/,
		d = {
			scope: 'symbol',
			variants: [{ match: i(c, /``.*?``/) }, { match: i(c, e.UNDERSCORE_IDENT_RE) }],
			relevance: 0
		},
		_ = function ({ includeEqual: e }) {
			let n;
			let s = i('[', ...Array.from((n = e ? '!%&*+-/<=>@^|~?' : '!%&*+-/<>@^|~?')).map(t), ']'),
				o = a(s, /\./),
				l = i(o, r(o)),
				u = a(i(l, o, '*'), i(s, '+'));
			return {
				scope: 'operator',
				match: a(u, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/),
				relevance: 0
			};
		},
		E = _({ includeEqual: !0 }),
		f = _({ includeEqual: !1 }),
		h = function (t, n) {
			return {
				begin: i(t, r(i(/\s*/, a(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))),
				beginScope: n,
				end: r(a(/\n/, /=/)),
				relevance: 0,
				keywords: e.inherit(o, { type: s }),
				contains: [l, d, e.inherit(u, { scope: null }), f]
			};
		},
		p = h(/:/, 'operator'),
		I = h(/\bof\b/, 'keyword'),
		m = {
			begin: [/(^|\s+)/, /type/, /\s+/, /[a-zA-Z_](\w|')*/],
			beginScope: {
				2: 'keyword',
				4: 'title.class'
			},
			end: r(/\(|=|$/),
			keywords: o,
			contains: [
				l,
				e.inherit(u, { scope: null }),
				d,
				{
					scope: 'operator',
					match: /<|>/
				},
				p
			]
		},
		T = {
			scope: 'computation-expression',
			match: /\b[_a-z]\w*(?=\s*\{)/
		},
		g = {
			begin: [
				/^\s*/,
				i(/#/, a('if', 'else', 'endif', 'line', 'nowarn', 'light', 'r', 'i', 'I', 'load', 'time', 'help', 'quit')),
				/\b/
			],
			beginScope: { 2: 'meta' },
			end: r(/\s|$/)
		},
		S = {
			variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
		},
		A = {
			scope: 'string',
			begin: /"/,
			end: /"/,
			contains: [e.BACKSLASH_ESCAPE]
		},
		N = {
			scope: 'string',
			begin: /@"/,
			end: /"/,
			contains: [{ match: /""/ }, e.BACKSLASH_ESCAPE]
		},
		v = {
			scope: 'string',
			begin: /"""/,
			end: /"""/,
			relevance: 2
		},
		O = {
			scope: 'subst',
			begin: /\{/,
			end: /\}/,
			keywords: o
		},
		R = {
			scope: 'string',
			begin: /\$"/,
			end: /"/,
			contains: [{ match: /\{\{/ }, { match: /\}\}/ }, e.BACKSLASH_ESCAPE, O]
		},
		C = {
			scope: 'string',
			begin: /(\$@|@\$)"/,
			end: /"/,
			contains: [{ match: /\{\{/ }, { match: /\}\}/ }, { match: /""/ }, e.BACKSLASH_ESCAPE, O]
		},
		y = {
			scope: 'string',
			match: i(/'/, a(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/)
		};
	return (
		(O.contains = [C, R, N, A, y, n, l, u, p, T, g, S, d, E]),
		{
			name: 'F#',
			aliases: ['fs', 'f#'],
			keywords: o,
			illegal: /\/\*/,
			classNameAliases: { 'computation-expression': 'keyword' },
			contains: [
				n,
				{
					variants: [
						{
							scope: 'string',
							begin: /\$"""/,
							end: /"""/,
							contains: [{ match: /\{\{/ }, { match: /\}\}/ }, O],
							relevance: 2
						},
						C,
						R,
						v,
						N,
						A,
						y
					]
				},
				l,
				u,
				m,
				{
					scope: 'meta',
					begin: /\[</,
					end: />\]/,
					relevance: 2,
					contains: [u, v, N, A, y, S]
				},
				I,
				p,
				T,
				g,
				S,
				d,
				E
			]
		}
	);
};
