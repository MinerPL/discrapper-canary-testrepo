"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("781738");
var l = n("404828"),
  s = n.n(l),
  r = n("290689");
let o = s.defaultRules.lheading,
  i = s.defaultRules.heading,
  c = s.defaultRules.link,
  u = s.defaultRules.image,
  d = s.defaultRules.list,
  h = s.defaultRules.blockQuote,
  p = s.defaultRules.paragraph,
  g = /\{(.+?)}/,
  f = /^\$(\w+?)\$/;
a = n("159661");
let C = e => {
    let {
      transformUpperCase: t = !1
    } = e;
    return (e, n, a) => {
      let l = g.exec(e[1]),
        r = e[1].replace(g, "");
      return t && (r = r.toUpperCase()), {
        className: null != l ? l[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: s.parseInline(n, r, a)
      }
    }
  },
  m = e => ({
    ...a.baseRules,
    image: {
      ...u,
      ..."function" == typeof a.customRules.image ? a.customRules.image(e) : a.customRules.image
    },
    link: {
      ...c,
      ..."function" == typeof a.customRules.link ? a.customRules.link(e) : a.customRules.link
    },
    list: {
      ...d,
      ..."function" == typeof a.customRules.list ? a.customRules.list(e) : a.customRules.list
    },
    interpolation: {
      order: r.default.order,
      match: e => f.exec(e),
      parse(e, t, n) {
        let a = n.interpolations[e[1]];
        return null == a ? {
          type: "text",
          content: e[0]
        } : {
          type: "interpolation",
          renderer: a
        }
      },
      react: e => e.renderer()
    },
    lheading: {
      ...o,
      parse: C({
        transformUpperCase: !0
      }),
      ..."function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading
    },
    heading: {
      ...i,
      ..."function" == typeof a.customRules.heading ? a.customRules.heading(e) : a.customRules.heading
    },
    blockQuote: {
      ...h,
      ..."function" == typeof a.customRules.blockQuote ? a.customRules.blockQuote(e) : a.customRules.blockQuote
    },
    paragraph: {
      ...p,
      ..."function" == typeof a.customRules.paragraph ? a.customRules.paragraph(e) : a.customRules.paragraph
    }
  }),
  x = e => ({
    lheading: {
      ...o,
      parse: C({
        transformUpperCase: !1
      }),
      ..."function" == typeof a.customRules.lheading ? a.customRules.lheading(e) : a.customRules.lheading
    }
  });
var _ = {
  getDefaultRules: e => ({
    ...m(e)
  }),
  getSpecialRules: e => ({
    ...m(e),
    ...x(e)
  })
}