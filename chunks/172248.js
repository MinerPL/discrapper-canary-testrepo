"use strict";
t.r(r), t.d(r, {
  default: function() {
    return p
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("446674"),
  s = t("77078"),
  c = t("220462"),
  d = t("676574"),
  u = t("89447"),
  h = t("699412");

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
    className: o(h.panel, u.panel),
    children: i
  })
}