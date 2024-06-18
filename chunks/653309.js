"use strict";
n.d(t, {
  U: function() {
    return _
  },
  Z: function() {
    return d
  }
}), n(47120), n(390547), n(411104);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(887490),
  a = n(453875),
  l = n(697692),
  u = n(223697);
let _ = {
  strong: a.bold,
  em: a.italics,
  u: a.underline,
  s: a.strikethrough,
  inlineCode: a.inlineCode,
  link: a.fakeLink,
  url: a.fakeLink,
  autolink: a.fakeLink,
  spoiler: s()(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, a.spoiler),
  staticRouteLink: a.fakeLink,
  syntaxBefore: a.syntaxBefore,
  syntaxAfter: a.syntaxAfter,
  codeBlockText: a.codeBlockText,
  codeBlockSyntax: a.codeBlockSyntax,
  codeBlockLang: a.codeBlockLang,
  subtext: a.subtext
};

function d(e, t) {
  let n;
  let {
    attributes: r,
    children: u,
    leaf: d,
    text: c
  } = t, E = !1, [I] = o.bN.node(e, o.C0.parent(o.bN.findPath(e, c)));
  switch (o.bN.isEditor(I) ? "editor" : I.type) {
    case "line":
    case "blockQuote": {
      E = void 0;
      let e = Object.entries(d).filter(e => {
        let [t] = e;
        return "text" !== t
      }).flatMap(e => {
        let [t, n] = e;
        if ("hljsTypes" === t) return n;
        if (!0 === n) {
          if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (E = !1), t.startsWith("before_") || t.startsWith("after_")) return [a[t]];
          if (t in _) return [_[t]];
          throw Error("Slate: Unknown decoration attribute: ".concat(t))
        }
      }).filter(e => null != e).join(" ");
      n = s()(e, {
        [a.syntaxOverride]: "||" === d.text || "\\" === d.text
      })
    }
  }
  return n = s()(n, {
    [l.emptyText]: "" === c.text
  }), (0, i.jsx)("span", {
    ...r,
    className: n,
    spellCheck: E,
    children: u
  })
}