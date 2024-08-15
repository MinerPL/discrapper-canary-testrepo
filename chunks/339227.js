n.d(t, {
	Q: function () {
		return b;
	}
}),
	n(47120),
	n(411104),
	n(757143),
	n(653041);
var r = n(512722),
	i = n.n(r),
	a = n(31775),
	s = n.n(a),
	o = n(302454),
	l = n(25209),
	u = n(710845),
	c = n(772096),
	d = n(428595),
	_ = n(594199),
	E = n(364458),
	f = n(70956),
	h = n(40786),
	p = n(362092);
let m = {
		link: { type: 'skip' },
		highlight: { type: 'skip' },
		blockQuote: { type: 'skip' },
		codeBlock: { type: 'skip' },
		list: { type: 'skip' },
		heading: { type: 'skip' },
		channelOrMessageUrl: { type: 'skip' },
		mediaPostLink: { type: 'skip' },
		attachmentLink: { type: 'skip' },
		newline: { type: 'verbatim' },
		br: { type: 'verbatim' },
		paragraph: { type: 'verbatim' },
		text: { type: 'verbatim' },
		emoticon: { type: 'verbatim' },
		mention: { type: 'inlineObject' },
		roleMention: { type: 'inlineObject' },
		commandMention: { type: 'inlineObject' },
		channelMention: { type: 'inlineObject' },
		emoji: { type: 'inlineObject' },
		customEmoji: { type: 'inlineObject' },
		looseEm: {
			type: 'inlineStyle',
			before: '*',
			after: ' *'
		},
		autolink: {
			type: 'inlineStyle',
			before: '<',
			after: '>'
		},
		strong: {
			type: 'inlineStyle',
			before: '**',
			after: '**'
		},
		u: {
			type: 'inlineStyle',
			before: '__',
			after: '__'
		},
		s: {
			type: 'inlineStyle',
			before: '~~',
			after: '~~'
		},
		escape: {
			type: 'inlineStyle',
			before: '\\',
			after: ''
		},
		staticRouteLink: {
			type: 'inlineStyle',
			before: '<id:',
			after: '>'
		},
		soundboard: {
			type: 'inlineStyle',
			before: '<sound:',
			after: '>'
		},
		spoiler: {
			type: 'inlineStyle',
			before: '||',
			after: '||'
		},
		url: {
			type: 'inlineStyle',
			before: '',
			after: ''
		},
		codeBlockText: {
			type: 'inlineStyle',
			before: '',
			after: ''
		},
		codeBlockSyntax: {
			type: 'inlineStyle',
			before: '',
			after: ''
		},
		codeBlockLang: {
			type: 'inlineStyle',
			before: '',
			after: ''
		},
		timestamp: { type: 'inlineObject' },
		em: {
			type: 'inlineStyle',
			before: '*',
			after: '*'
		},
		inlineCode: {
			type: 'inlineStyle',
			before: '`',
			after: '`'
		},
		subtext: {
			type: 'inlineStyle',
			before: '-# ',
			after: ''
		}
	},
	I = new Set(['*', '_', '\\']),
	T = {},
	g = {};
for (let e in d.Z.RULES) {
	if (!(e in m)) throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
	let t = m[e];
	'skip' !== t.type && (T[e] = S(d.Z.RULES[e])), 'skip' !== t.type && 'inlineObject' !== t.type && (g[e] = S('text' === e ? _.ZP : d.Z.RULES[e]));
}
function S(e) {
	i()(null != e.parse, 'Slate: rule must have a parse function');
	let t = e.parse;
	return {
		...e,
		parse(e, n, r) {
			let i = t.call(this, e, n, r);
			return !(i instanceof Array) && (i.originalMatch = e), i;
		}
	};
}
let A = {
		url: {
			parse: (e) =>
				null == (0, c.yw)(e[1])
					? {
							type: 'text',
							content: e[0],
							originalMatch: e
						}
					: {
							type: 'link',
							content: e[1],
							originalMatch: e
						}
		},
		autolink: {
			parse: (e) =>
				null == (0, c.yw)(e[1])
					? {
							type: 'text',
							content: e[0],
							originalMatch: e
						}
					: {
							type: 'autolink',
							content: e[1],
							originalMatch: e
						}
		},
		codeBlockSyntax: {
			order: o.defaultRules.inlineCode.order - 0.1,
			match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
			parse: (e) =>
				null != e[2] && '' !== e[2] && p.i6(e[2])
					? [
							{
								type: 'codeBlockSyntax',
								content: e[1],
								originalMatch: e
							},
							{
								type: 'codeBlockLang',
								content: e[2],
								originalMatch: e
							}
						]
					: {
							type: 'codeBlockSyntax',
							content: e[0],
							originalMatch: e
						}
		}
	},
	N = /(-# +)/,
	v = (0, E.Z)([T, A]),
	O = (0, E.Z)([g, A]),
	R = l._p(v),
	C = l._p(O),
	y = {
		max: 1 / 0,
		maxAge: 1 * f.Z.Millis.MINUTE,
		updateAgeOnGet: !0
	},
	D = new (s())(y),
	L = new (s())(y);
function b(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		i = p.rN(e);
	if ((i.push(e.length), 1 === i.length && n)) return [];
	let a = 0,
		s = n,
		o = [];
	for (let n of i) {
		if (s)
			o.push({
				text: e.substring(a, n),
				start: a,
				attributes: ['codeBlockText'],
				data: void 0
			});
		else {
			let s = n === i[i.length - 2] ? e.substring(n + 3) : '';
			n += 3 + (null != s.match(p.Q2) ? s : '').length;
			let l = e.substring(a, n);
			'' !== l &&
				(function (e, t, n) {
					let r = [],
						i = n ? L : D,
						a = i.get(e);
					if (null != a) return a;
					let s =
							e
								.replace(/\r\n/g, ' \n')
								.replace(/[\r\f]/g, ' ')
								.replace(/\t/g, ' ') + '\n\n',
						o = {
							originalMatch: {
								index: 0,
								0: ''
							},
							type: 'paragraph',
							content: (n ? C : R)(s, !0, {
								returnMentionIds: !0,
								disableAutoBlockNewlines: !0,
								guildId: t
							})
						};
					M(r, s, o, 0, []);
					let l = (function (e) {
						if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
						let t = [e[0]];
						for (let n = 1; n < e.length; n++) {
							let r = t[t.length - 1],
								i = r.start + r.text.length,
								a = e[n];
							a.start === i && null == r.data && null == a.data && r.attributes.join('-') === a.attributes.join('-') ? (r.text += a.text) : t.push(a);
						}
						return t;
					})(r);
					return i.set(e, l), l;
				})(l, t, r).forEach((e) => {
					o.push({
						...e,
						start: e.start + a
					});
				});
		}
		(s = !s), (a = n);
	}
	return o;
}
function M(e, t, n, r, a) {
	let { content: s, type: o, originalMatch: l } = n;
	switch ((i()(null != l, 'Slate: originalMatch must be set ' + JSON.stringify(n, void 0, 2)), o)) {
		case 'newline':
		case 'br':
		case 'paragraph':
		case 'text':
		case 'emoticon':
			return P(e, t, s || '', r, a);
		case 'emoji':
		case 'customEmoji': {
			let i = t.substring(r);
			if ((!i.startsWith(l[0]) && ((r = G(e, t, r, t.length)), (i = t.substring(r))), i.startsWith(l[0])))
				return w({
					result: e,
					sourceText: t,
					text: l[0],
					originalStart: r,
					attributes: [o],
					data: n
				});
			throw Error('Slate: Unable to find emoji: '.concat(l[0], ' in ').concat(t, ' at ').concat(r));
		}
		case 'mention':
		case 'roleMention':
		case 'channelMention':
		case 'commandMention':
		case 'staticRouteLink':
		case 'soundboard':
		case 'channel': {
			let { text: a, id: s } = n;
			if (null != a)
				return (
					i()(a === l[0], 'Slate: text mentions must exactly match the regex match'),
					w({
						result: e,
						sourceText: t,
						text: a,
						originalStart: r,
						attributes: ['textMention'],
						data: { text: a }
					})
				);
			return w({
				result: e,
				sourceText: t,
				text: l[0],
				originalStart: r,
				attributes: [o],
				data: { id: s }
			});
		}
		case 'timestamp':
			if (h.Z.getCurrentConfig({ location: 'c70cbb_1' }, { autoTrackExposure: !1 }).enabled)
				return w({
					result: e,
					sourceText: t,
					text: l[0],
					originalStart: r,
					attributes: [o],
					data: n
				});
			return P(e, t, l[0], r, a);
		case 'em':
		case 'autolink':
		case 'strong':
		case 'u':
		case 's':
		case 'escape':
		case 'inlineCode':
		case 'codeBlockSyntax':
		case 'codeBlockLang':
		case 'spoiler':
		case 'url':
		case 'link':
		case 'subtext': {
			r = x(t, r);
			let { before: n, after: i } = (function (e, t, n, r) {
				if ('inlineCode' === t)
					return {
						before: r[1],
						after: r[1]
					};
				if ('em' === t && '_' === e.substring(n, n + 1))
					return {
						before: '_',
						after: '_'
					};
				if ('subtext' === t)
					return {
						before: N.exec(r.input)[1],
						after: ''
					};
				let i = m['link' === t ? 'url' : t];
				if ('inlineStyle' === i.type) return i;
				throw Error('Slate: rule must be an inlineStyle');
			})(t, o, r, l);
			return (r = U(e, t, n, r, 'syntaxBefore')), a.push(o), (r = P(e, t, null != s ? s : '', r, a)), a.pop(), (r = U(e, t, i, r, 'syntaxAfter')), x(t, r);
		}
		default:
			throw Error('Slate: Unknown rule type: '.concat(o));
	}
}
function P(e, t, n, r, i) {
	return (
		'string' == typeof n
			? (r = w({
					result: e,
					sourceText: t,
					text: n,
					originalStart: r,
					attributes: i,
					data: null
				}))
			: (!(n instanceof Array) && (n = [n]),
				n.forEach((n) => {
					r = M(e, t, n, r, i);
				})),
		x(t, r)
	);
}
function U(e, t, n, r, a) {
	if (n.length > 0) {
		let s = t.indexOf(n, r),
			o = t.substring(r, s + n.length);
		i()(s >= 0, 'Slate: Unable to find syntax characters'),
			e.push({
				text: o,
				attributes: [a],
				start: r,
				data: null
			}),
			(r = s + n.length);
	}
	return r;
}
function w(e) {
	let { result: t, sourceText: n, text: r, originalStart: i, attributes: a, data: s } = e,
		o = x(n, i);
	for (; '\n' === r.charAt(0) || ' ' === r.charAt(0); ) r = r.substring(1);
	let l = n.indexOf(r, o);
	if ((l !== o ? (o = i = G(t, n, o, l)) : '\\' === r && '\\' === n.charAt(l + 1) && (l++, (i = ++o)), l !== o))
		throw (
			(new u.Z('MarkdownToSlate').error(
				JSON.stringify({
					sourceText: n,
					searchText: r,
					searchStartsAt: n.substring(o),
					startPos: o
				})
			),
			Error('Slate: Unable to find content in source text!'))
		);
	let c = o + r.length,
		d = n.substring(i, c);
	return (
		t.push({
			text: d,
			attributes: a.slice(),
			start: i,
			data: s
		}),
		c
	);
}
function x(e, t) {
	for (; '\n' === e.charAt(t) || ' ' === e.charAt(t); ) t++;
	return t;
}
function G(e, t, n, r) {
	for (; n < r; )
		if (I.has(t[n])) (n = U(e, t, t[n], n, 'syntaxBefore')), (n = x(t, n));
		else break;
	return n;
}
