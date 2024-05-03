"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("153867"),
  o = s("706454"),
  d = s("689938"),
  u = s("66014"),
  c = s("444675");
t.default = l.default.connectStores([o.default], () => ({
  currentLocale: o.default.locale
}))(function(e) {
  let [t, l] = n.useState(e.currentLocale), [o] = n.useState(() => d.default.getAvailableLocales().map(e => {
    let t;
    try {
      t = s("333369")("@discordapp/common/images/flags/".concat(e.value, ".png").replace("@discordapp/common/images/flags/", "./"))
    } catch (e) {
      t = s("1474")
    }
    return {
      ...e,
      name: (0, a.jsxs)("div", {
        className: u.option,
        children: [(0, a.jsx)("span", {
          className: u.localeName,
          children: e.name
        }), (0, a.jsx)("span", {
          className: u.localizedName,
          children: e.localizedName
        }), (0, a.jsx)("div", {
          className: u.flag,
          "aria-hidden": !0,
          children: (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: u.flagImage
          })
        })]
      })
    }
  })), S = n.useCallback(e => {
    let {
      value: t
    } = e;
    l(t), c.nextTick(() => r.default.updateLocale(t))
  }, []);
  return (0, a.jsx)(i.FormSection, {
    tag: i.FormTitleTags.H1,
    title: d.default.Messages.LANGUAGE,
    children: (0, a.jsx)(i.FormSection, {
      children: (0, a.jsx)(i.FormItem, {
        title: d.default.Messages.LANGUAGE_SELECT,
        children: (0, a.jsx)(i.RadioGroup, {
          onChange: S,
          options: o,
          value: t
        })
      })
    })
  })
})