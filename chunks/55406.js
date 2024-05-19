"use strict";
let i;
n.r(t), n("757143");
var r = n("302454"),
  a = n.n(r),
  s = n("800927"),
  o = n("945884"),
  l = n("594199");
let u = a().defaultRules.lheading,
  d = a().defaultRules.heading,
  _ = a().defaultRules.link,
  c = a().defaultRules.image,
  E = a().defaultRules.list,
  I = a().defaultRules.blockQuote,
  T = a().defaultRules.paragraph,
  f = /\{(.+?)}/,
  S = /^\$(\w+?)\$/;
i = n("235375");
let h = e => {
    let {
      transformUpperCase: t = !1
    } = e;
    return (e, n, i) => {
      let r = f.exec(e[1]),
        s = e[1].replace(f, "");
      return t && (s = s.toUpperCase()), {
        className: null != r ? r[1] : null,
        level: "=" === e[2] ? 1 : 2,
        content: a().parseInline(n, s, i)
      }
    }
  },
  A = e => ({
    ...i.baseRules,
    image: {
      ...c,
      ..."function" == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image
    },
    link: {
      ..._,
      ..."function" == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link
    },
    list: {
      ...E,
      ..."function" == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list
    },
    interpolation: {
      order: l.default.order,
      match: e => S.exec(e),
      parse(e, t, n) {
        let i = n.interpolations[e[1]];
        return null == i ? {
          type: "text",
          content: e[0]
        } : {
          type: "interpolation",
          renderer: i
        }
      },
      react: e => e.renderer()
    },
    lheading: {
      ...u,
      parse: h({
        transformUpperCase: !0
      }),
      ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
    },
    heading: {
      ...d,
      ..."function" == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading
    },
    blockQuote: {
      ...I,
      ..."function" == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote
    },
    paragraph: {
      ...T,
      ..."function" == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph
    }
  }),
  m = e => ({
    lheading: {
      ...u,
      parse: h({
        transformUpperCase: !1
      }),
      ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
    }
  }),
  N = e => ({
    ...A(e),
    newline: {
      ...a().defaultRules.newline
    },
    text: l.default,
    list: s.default,
    subtext: o.default
  });
t.default = {
  getDefaultRules: e => ({
    ...A(e)
  }),
  getSpecialRules: e => ({
    ...A(e),
    ...m(e)
  }),
  getMessageRules: e => ({
    ...N(e)
  })
}