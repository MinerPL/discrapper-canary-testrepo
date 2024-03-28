"use strict";
let n;
a.r(t), a("757143");
var l = a("302454"),
  s = a.n(l),
  r = a("594199");
let o = s().defaultRules.lheading,
  i = s().defaultRules.heading,
  c = s().defaultRules.link,
  u = s().defaultRules.image,
  d = s().defaultRules.list,
  h = s().defaultRules.blockQuote,
  p = s().defaultRules.paragraph,
  g = /\{(.+?)}/,
  f = /^\$(\w+?)\$/;
n = a("235375");
let C = e => {
    let {
      transformUpperCase: t = !1
    } = e;
    return (e, a, n) => {
      let l = g.exec(e[1]),
        r = e[1].replace(g, "");
      return t && (r = r.toUpperCase()), {
        className: null != l ? l[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: s().parseInline(a, r, n)
      }
    }
  },
  m = e => ({
    ...n.baseRules,
    image: {
      ...u,
      ..."function" == typeof n.customRules.image ? n.customRules.image(e) : n.customRules.image
    },
    link: {
      ...c,
      ..."function" == typeof n.customRules.link ? n.customRules.link(e) : n.customRules.link
    },
    list: {
      ...d,
      ..."function" == typeof n.customRules.list ? n.customRules.list(e) : n.customRules.list
    },
    interpolation: {
      order: r.default.order,
      match: e => f.exec(e),
      parse(e, t, a) {
        let n = a.interpolations[e[1]];
        return null == n ? {
          type: "text",
          content: e[0]
        } : {
          type: "interpolation",
          renderer: n
        }
      },
      react: e => e.renderer()
    },
    lheading: {
      ...o,
      parse: C({
        transformUpperCase: !0
      }),
      ..."function" == typeof n.customRules.lheading ? n.customRules.lheading(e) : n.customRules.lheading
    },
    heading: {
      ...i,
      ..."function" == typeof n.customRules.heading ? n.customRules.heading(e) : n.customRules.heading
    },
    blockQuote: {
      ...h,
      ..."function" == typeof n.customRules.blockQuote ? n.customRules.blockQuote(e) : n.customRules.blockQuote
    },
    paragraph: {
      ...p,
      ..."function" == typeof n.customRules.paragraph ? n.customRules.paragraph(e) : n.customRules.paragraph
    }
  }),
  x = e => ({
    lheading: {
      ...o,
      parse: C({
        transformUpperCase: !1
      }),
      ..."function" == typeof n.customRules.lheading ? n.customRules.lheading(e) : n.customRules.lheading
    }
  });
t.default = {
  getDefaultRules: e => ({
    ...m(e)
  }),
  getSpecialRules: e => ({
    ...m(e),
    ...x(e)
  })
}