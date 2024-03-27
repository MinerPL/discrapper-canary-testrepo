"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("354023"),
  u = n("782340"),
  o = n("476057"),
  d = n("890957");
let c = r.default.getMaxAgeOptions;

function h(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: a
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(i.FormItem, {
    className: s(d.marginTop20, o.switch),
    children: (0, l.jsx)(i.FormSwitch, {
      value: t,
      onChange: e => a(e),
      note: u.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: u.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let f = r.default.getMaxUsesOptions;

function I(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: a,
    maxUses: r,
    temporary: I,
    onGenerateNewLink: g,
    onToggleTemporary: E,
    onSelectMaxAge: v,
    onSelectMaxUses: T
  } = e, m = c.find(e => e.value === a), p = f.find(e => e.value === r);
  return (0, l.jsx)("div", {
    className: o.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: g,
      children: [(0, l.jsx)(i.FormItem, {
        title: u.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(i.SingleSelect, {
          value: null !== (t = null == m ? void 0 : m.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: v,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(i.FormItem, {
        title: u.default.Messages.MAX_NUMBER_OF_USES,
        className: s(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(i.SingleSelect, {
          value: null == p ? void 0 : p.value,
          options: f,
          onChange: T
        })
      }), (0, l.jsx)(h, {
        temporary: I,
        shouldHide: n,
        onToggleTemporary: E
      })]
    })
  })
}