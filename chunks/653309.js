n.d(t, {
	U: function () {
		return c;
	},
	Z: function () {
		return d;
	}
}),
	n(47120),
	n(390547),
	n(411104);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(887490),
	o = n(237002),
	l = n(968195),
	u = n(775448);
let c = {
	strong: o.bold,
	em: o.italics,
	u: o.underline,
	s: o.strikethrough,
	inlineCode: o.inlineCode,
	link: o.fakeLink,
	url: o.fakeLink,
	autolink: o.fakeLink,
	spoiler: a()(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, o.spoiler),
	staticRouteLink: o.fakeLink,
	syntaxBefore: o.syntaxBefore,
	syntaxAfter: o.syntaxAfter,
	codeBlockText: o.codeBlockText,
	codeBlockSyntax: o.codeBlockSyntax,
	codeBlockLang: o.codeBlockLang,
	subtext: o.subtext
};
function d(e, t) {
	let n;
	let { attributes: i, children: u, leaf: d, text: _ } = t,
		E = !1,
		[f] = s.bN.node(e, s.C0.parent(s.bN.findPath(e, _)));
	switch (s.bN.isEditor(f) ? 'editor' : f.type) {
		case 'line':
		case 'blockQuote': {
			E = void 0;
			let e = Object.entries(d)
				.filter((e) => {
					let [t] = e;
					return 'text' !== t;
				})
				.flatMap((e) => {
					let [t, n] = e;
					if ('hljsTypes' === t) return n;
					if (!0 === n) {
						if ((('codeBlockLang' === t || 'codeBlockSyntax' === t) && (E = !1), t.startsWith('before_') || t.startsWith('after_'))) return [o[t]];
						if (t in c) return [c[t]];
						throw Error('Slate: Unknown decoration attribute: '.concat(t));
					}
				})
				.filter((e) => null != e)
				.join(' ');
			n = a()(e, { [o.syntaxOverride]: '||' === d.text || '\\' === d.text });
		}
	}
	return (
		(n = a()(n, { [l.emptyText]: '' === _.text })),
		(0, r.jsx)('span', {
			...i,
			className: n,
			spellCheck: E,
			children: u
		})
	);
}
