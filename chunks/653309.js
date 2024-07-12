n.d(t, {
  U: function() {
return c;
  },
  Z: function() {
return d;
  }
}), n(47120), n(390547), n(411104);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(887490),
  s = n(434175),
  l = n(551360),
  u = n(157409);
let c = {
  strong: s.bold,
  em: s.italics,
  u: s.underline,
  s: s.strikethrough,
  inlineCode: s.inlineCode,
  link: s.fakeLink,
  url: s.fakeLink,
  autolink: s.fakeLink,
  spoiler: a()(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, s.spoiler),
  staticRouteLink: s.fakeLink,
  syntaxBefore: s.syntaxBefore,
  syntaxAfter: s.syntaxAfter,
  codeBlockText: s.codeBlockText,
  codeBlockSyntax: s.codeBlockSyntax,
  codeBlockLang: s.codeBlockLang,
  subtext: s.subtext
};

function d(e, t) {
  let n;
  let {
attributes: i,
children: u,
leaf: d,
text: _
  } = t, E = !1, [f] = o.bN.node(e, o.C0.parent(o.bN.findPath(e, _)));
  switch (o.bN.isEditor(f) ? 'editor' : f.type) {
case 'line':
case 'blockQuote': {
  E = void 0;
  let e = Object.entries(d).filter(e => {
    let [t] = e;
    return 'text' !== t;
  }).flatMap(e => {
    let [t, n] = e;
    if ('hljsTypes' === t)
      return n;
    if (!0 === n) {
      if (('codeBlockLang' === t || 'codeBlockSyntax' === t) && (E = !1), t.startsWith('before_') || t.startsWith('after_'))
        return [s[t]];
      if (t in c)
        return [c[t]];
      throw Error('Slate: Unknown decoration attribute: '.concat(t));
    }
  }).filter(e => null != e).join(' ');
  n = a()(e, {
    [s.syntaxOverride]: '||' === d.text || '\\' === d.text
  });
}
  }
  return n = a()(n, {
[l.emptyText]: '' === _.text
  }), (0, r.jsx)('span', {
...i,
className: n,
spellCheck: E,
children: u
  });
}