"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("481060"),
  r = n("971130"),
  o = n("689938"),
  u = n("966898"),
  d = n("794711");
let c = r.default.getMaxAgeOptions;

function I(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: a
  } = e;
  return n ? (0, l.jsx)("div", {
    className: d.marginTop20
  }) : (0, l.jsx)(i.FormItem, {
    className: s()(d.marginTop20, u.switch),
    children: (0, l.jsx)(i.FormSwitch, {
      value: t,
      onChange: e => a(e),
      note: o.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: o.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let g = r.default.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: a,
    maxUses: r,
    temporary: h,
    onGenerateNewLink: E,
    onToggleTemporary: f,
    onSelectMaxAge: _,
    onSelectMaxUses: T
  } = e, v = c.find(e => e.value === a), m = g.find(e => e.value === r);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: E,
      children: [(0, l.jsx)(i.FormItem, {
        title: o.default.Messages.EXPIRE_AFTER,
        className: d.marginTop20,
        children: (0, l.jsx)(i.SingleSelect, {
          value: null !== (t = null == v ? void 0 : v.value) && void 0 !== t ? t : c[0].value,
          options: c,
          onChange: _,
          maxVisibleItems: 8
        })
      }), (0, l.jsx)(i.FormItem, {
        title: o.default.Messages.MAX_NUMBER_OF_USES,
        className: s()(d.marginTop20, d.marginBottom4),
        children: (0, l.jsx)(i.SingleSelect, {
          value: null == m ? void 0 : m.value,
          options: g,
          onChange: T
        })
      }), (0, l.jsx)(I, {
        temporary: h,
        shouldHide: n,
        onToggleTemporary: f
      })]
    })
  })
}