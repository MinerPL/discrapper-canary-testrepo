"use strict";
t.r(r), t.d(r, {
  default: function() {
    return p
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("442837"),
  s = t("481060"),
  c = t("98357"),
  d = t("432877"),
  u = t("178863"),
  h = t("779869");

function p(e) {
  let {
    devSettingsCategory: r
  } = e, t = (0, l.useStateFromStores)([d.default], () => d.default.allByCategory(r), [r], l.statesWillNeverBeEqual), i = n.useMemo(() => t.map(e => {
    let [r, t, {
      label: n
    }] = e;
    return (0, a.jsx)(s.FormSwitch, {
      value: t,
      onChange: e => (0, c.toggle)(r, e),
      hideBorder: !0,
      className: u.switch,
      children: n
    }, r)
  }), [t]);
  return (0, a.jsx)("div", {
    className: o()(h.panel, u.panel),
    children: i
  })
}