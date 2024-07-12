var r, l, a = t(735250),
  o = t(470079),
  i = t(120356),
  s = t.n(i),
  c = t(302454),
  u = t.n(c),
  d = t(663993),
  f = t(772096),
  h = t(428595),
  p = t(532901),
  g = t(378720),
  m = t(625400),
  b = t(986095);

function k(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
let x = new RegExp('https?://'.concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ''));

function j(e) {
  return 'string' == typeof e.content ? e.content : E(e.content);
}
let y = {
...u().defaultRules,
heading: {
  ...u().defaultRules.heading,
  react(e, n, t) {
    let r = 'h'.concat(e.level);
    return (0, a.jsx)(g.Z, {
      tag: r,
      children: n(e.content, t)
    }, t.key);
  }
},
paragraph: {
  ...u().defaultRules.paragraph,
  react: (e, n, t) => (0, a.jsx)('div', {
    className: m.paragraph,
    children: n(e.content, t)
  }, t.key)
},
strong: {
  ...u().defaultRules.strong,
  order: 6
},
em: {
  ...u().defaultRules.em,
  order: 6
},
u: {
  ...u().defaultRules.u,
  order: 5
},
del: {
  ...u().defaultRules.del,
  order: 6
},
link: {
  ...f.ZP,
  ...(0, p.Z)({
    enableBuildOverrides: !1
  }),
  order: 6
},
blockQuote: {
  ...u().defaultRules.blockQuote,
  react: (e, n, t) => (0, a.jsx)('blockquote', {
    className: m.blockquote,
    children: j(e)
  }, t.key)
},
image: {
  ...u().defaultRules.image,
  order: 6,
  match(e, n, t) {
    let r = u().defaultRules.image;
    if (null == r || null == r.match)
      return !1;
    let l = r.match(e, n, t);
    if (null != l && Array.isArray(l) && l.length >= 3) {
      let e = l[2];
      if ('string' == typeof e)
        return null != e.match(x) ? l : null;
    }
    return !1;
  }
},
inlineCode: {
  ...h.Z.RULES.inlineCode,
  order: 6,
  react: (e, n, t) => (0, a.jsx)('code', {
    className: m.codeInline,
    children: j(e)
  }, t.key)
},
codeBlock: {
  ...u().defaultRules.codeBlock,
  react(e, n, r) {
    let l = () => (0, a.jsx)('pre', {
      children: (0, a.jsx)('code', {
        className: s()(b.scrollbarGhostHairline, 'hljs'),
        children: j(e)
      })
    }, r.key);
    return (0, a.jsx)(d.GI, {
      createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
      webpackId: 364964,
      renderFallback: l,
      render: n => {
        if (!(e.lang && n.hasLanguage(e.lang)) || 'string' != typeof e.content)
          return l();
        {
          let t = n.highlight(e.lang, e.content, !0);
          return null == t ? l() : (0, a.jsx)('pre', {
            children: (0, a.jsx)('code', {
              className: s()(b.scrollbarGhostHairline, 'hljs', t.language),
              dangerouslySetInnerHTML: {
                __html: t.value
              }
            })
          }, r.key);
        }
      }
    }, r.key);
  }
}
  },
  v = u().parserFor(y),
  E = u().reactFor(u().ruleOutput(y, 'react'));
class _ extends(l = o.PureComponent) {
  render() {
let {
  className: e,
  children: n,
  state: t,
  parser: r,
  output: l
} = this.props, o = l(r(''.concat(n, '\n\n'), {
  inline: !1,
  ...t
}));
return (0, a.jsx)('div', {
  className: s()(m.markdown, e),
  children: o
});
  }
}
k(_, 'rules', y), k(_, 'defaultProps', {
  parser: v,
  output: E
}), n.Z = _;