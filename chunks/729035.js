"use strict";
t.r(r);
var a, n, i = t("735250"),
  o = t("470079"),
  l = t("803997"),
  s = t.n(l),
  c = t("302454"),
  d = t.n(c),
  u = t("663993"),
  h = t("772096"),
  p = t("428595"),
  m = t("532901"),
  g = t("378720"),
  f = t("496019"),
  b = t("633353");

function y(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}
let x = new RegExp("https?://".concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""));

function k(e) {
  return "string" == typeof e.content ? e.content : S(e.content)
}
let v = {
    ...d().defaultRules,
    heading: {
      ...d().defaultRules.heading,
      react(e, r, t) {
        let a = "h".concat(e.level);
        return (0, i.jsx)(g.default, {
          tag: a,
          children: r(e.content, t)
        }, t.key)
      }
    },
    paragraph: {
      ...d().defaultRules.paragraph,
      react: (e, r, t) => (0, i.jsx)("div", {
        className: f.paragraph,
        children: r(e.content, t)
      }, t.key)
    },
    strong: {
      ...d().defaultRules.strong,
      order: 6
    },
    em: {
      ...d().defaultRules.em,
      order: 6
    },
    u: {
      ...d().defaultRules.u,
      order: 5
    },
    del: {
      ...d().defaultRules.del,
      order: 6
    },
    link: {
      ...h.default,
      ...(0, m.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...d().defaultRules.blockQuote,
      react: (e, r, t) => (0, i.jsx)("blockquote", {
        className: f.blockquote,
        children: k(e)
      }, t.key)
    },
    image: {
      ...d().defaultRules.image,
      order: 6,
      match(e, r, t) {
        let a = d().defaultRules.image;
        if (null == a || null == a.match) return !1;
        let n = a.match(e, r, t);
        if (null != n && Array.isArray(n) && n.length >= 3) {
          let e = n[2];
          if ("string" == typeof e) return null != e.match(x) ? n : null
        }
        return !1
      }
    },
    inlineCode: {
      ...p.default.RULES.inlineCode,
      order: 6,
      react: (e, r, t) => (0, i.jsx)("code", {
        className: f.codeInline,
        children: k(e)
      }, t.key)
    },
    codeBlock: {
      ...d().defaultRules.codeBlock,
      react(e, r, a) {
        let n = () => (0, i.jsx)("pre", {
          children: (0, i.jsx)("code", {
            className: s()(b.scrollbarGhostHairline, "hljs"),
            children: k(e)
          })
        }, a.key);
        return (0, i.jsx)(u.LazyLibrary, {
          createPromise: () => Promise.resolve().then(t.bind(t, "364964")),
          webpackId: "364964",
          renderFallback: n,
          render: r => {
            if (!(e.lang && r.hasLanguage(e.lang)) || "string" != typeof e.content) return n();
            {
              let t = r.highlight(e.lang, e.content, !0);
              return null == t ? n() : (0, i.jsx)("pre", {
                children: (0, i.jsx)("code", {
                  className: s()(b.scrollbarGhostHairline, "hljs", t.language),
                  dangerouslySetInnerHTML: {
                    __html: t.value
                  }
                })
              }, a.key)
            }
          }
        }, a.key)
      }
    }
  },
  C = d().parserFor(v),
  S = d().reactFor(d().ruleOutput(v, "react"));
class j extends(n = o.PureComponent) {
  render() {
    let {
      className: e,
      children: r,
      state: t,
      parser: a,
      output: n
    } = this.props, o = n(a("".concat(r, "\n\n"), {
      inline: !1,
      ...t
    }));
    return (0, i.jsx)("div", {
      className: s()(f.markdown, e),
      children: o
    })
  }
}
y(j, "rules", v), y(j, "defaultProps", {
  parser: C,
  output: S
}), r.default = j