n.d(t, {
	yw: function () {
		return A;
	}
}),
	n(47120),
	n(315314),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(411104);
var r = n(392711),
	i = n.n(r),
	a = n(31775),
	s = n.n(a);
n(711739);
var o = n(302454),
	l = n.n(o),
	u = n(830121),
	c = n(823379),
	d = n(172244),
	_ = n(571989);
let E = new (s())({ max: 50 });
function f(e) {
	let t = E.get(e);
	if (null != t) return t;
	let n = (0, _.yx)(e),
		r = (0, _.zq)(n),
		i = {
			whitespaceSanitized: n,
			fullySanitized: r
		};
	return E.set(e, i), i;
}
let h = ['http:', 'https:', 'discord:'],
	p = [
		d.b.TEXT,
		d.b.UNDERLINE,
		d.b.STRONG,
		d.b.ITALICS,
		d.b.STRIKETHROUGH,
		d.b.INLINE_CODE,
		d.b.SPOILER,
		d.b.LINE_BREAK,
		d.b.TIMESTAMP
	],
	I = [...p, d.b.EMOJI, d.b.CUSTOM_EMOJI],
	m = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
	T = [d.b.TEXT],
	g = [
		d.b.UNDERLINE,
		d.b.STRONG,
		d.b.ITALICS,
		d.b.STRIKETHROUGH,
		d.b.INLINE_CODE,
		d.b.SPOILER,
		d.b.LINE_BREAK,
		d.b.TIMESTAMP,
		d.b.EMOJI,
		d.b.CUSTOM_EMOJI,
		d.b.LIST,
		d.b.HEADING,
		d.b.BLOCK_QUOTE,
		d.b.SUBTEXT
	];
function S(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
	for (let r of (!Array.isArray(e) && (e = [e]), e)) {
		if (void 0 === r || !t.includes(r.type)) return null;
		if (r.type === d.b.INLINE_CODE) {
			let e = [...t, ...n];
			if (null == S(r.validationChildContent, e)) return null;
		}
		if (Array.isArray(r.content) && null == S(r.content, t)) return null;
	}
	return e;
}
function A(e) {
	try {
		var t;
		let n = new URL(e),
			r = null !== (t = n.protocol) && void 0 !== t ? t : '';
		if (!h.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
		if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length))
			throw Error('no hostname');
		let i = (0, _.MO)(n);
		(n.username = ''), (n.password = '');
		let a = (0, _.MO)(n);
		return {
			target: i,
			displayTarget: a
		};
	} catch (e) {
		return null;
	}
}
t.ZP = {
	...l().defaultRules.link,
	match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
	parse(e, t, n) {
		let [r, a, s, o] = e,
			_ = () => ({
				type: d.b.TEXT,
				content: r
			}),
			E = f(s),
			h = f(a),
			N = f(null != o ? o : ''),
			v = E.whitespaceSanitized,
			O = h.fullySanitized,
			R = N.fullySanitized,
			C = O.trim();
		if (0 === v.trim().length || 0 === C.length) return _();
		let y = A(l().unescapeUrl(s)),
			D = (0, u.ZP)(a).length > 0 || (0, u.ZP)(o).length > 0;
		if (null == y || D) return _();
		let L = {
				...n,
				allowEscape: !1,
				parseInlineCodeChildContent: !0
			},
			b = n.allowEmojiLinks ? I : p,
			M = [...b, ...m],
			P = [...T, ...g],
			U = S(t(O, L), M, [d.b.EMOJI]),
			w = S(t(R, L), P);
		if (
			null == U ||
			null == w ||
			0 ===
				(function e(t) {
					let n = '';
					for (let r of t)
						switch (r.type) {
							case d.b.TEXT:
							case d.b.INLINE_CODE:
								n += r.content;
								break;
							case d.b.CUSTOM_EMOJI:
								n += r.name;
								break;
							case d.b.EMOJI:
								n += r.surrogate;
								break;
							case d.b.LINE_BREAK:
								n += '\n';
								break;
							case d.b.STRONG:
							case d.b.ITALICS:
							case d.b.UNDERLINE:
							case d.b.STRIKETHROUGH:
							case d.b.SPOILER:
								n += e(r.content);
								break;
							case d.b.TIMESTAMP:
								n += '<timestamp>';
								break;
							case d.b.BLOCK_QUOTE:
							case d.b.LIST:
							case d.b.HEADING:
							case d.b.SUBTEXT:
								n += '<'.concat(r.type, 'Content>');
								break;
							default:
								(0, c.vE)(r.type);
						}
					return n;
				})(U).trim().length
		)
			return _();
		let x = i().pick(t.rules, b),
			G = l().parserFor(x)(h.whitespaceSanitized, L),
			k = N.whitespaceSanitized,
			{ target: B } = y;
		return {
			content: G,
			target: B,
			title: k
		};
	}
};
