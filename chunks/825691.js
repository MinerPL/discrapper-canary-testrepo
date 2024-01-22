"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("272091"),
  u = n("577617"),
  d = n("255070"),
  c = n("354023"),
  f = n("849366"),
  g = n("782340"),
  h = n("911011"),
  I = n("926622");
let m = c.default.getMaxAgeOptions;

function E(e) {
  let {
    temporary: t,
    shouldHide: n,
    onToggleTemporary: i
  } = e;
  return n ? (0, l.jsx)("div", {
    className: I.marginTop20
  }) : (0, l.jsx)(r.FormItem, {
    className: s(I.marginTop20, h.switch),
    children: (0, l.jsx)(r.FormSwitch, {
      value: t,
      onChange: e => i(e),
      note: g.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
      hideBorder: !0,
      children: (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: g.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
      })
    })
  })
}
let p = c.default.getMaxUsesOptions;

function v(e) {
  var t;
  let {
    guildId: n,
    shouldHideTemporaryInviteToggle: a,
    maxAge: c,
    maxUses: v,
    temporary: _,
    onGenerateNewLink: T,
    onToggleTemporary: N,
    onSelectMaxAge: C,
    onSelectMaxUses: S
  } = e, x = (0, o.default)(n, 0 === c), A = (0, o.default)(n, !0), M = (0, f.default)(n), w = M.find(e => e.value === c), L = p.find(e => e.value === v), [R, y] = i.useState(!1), U = (0, o.useIsNewCommunity)(n, R);
  return (0, l.jsx)("div", {
    className: h.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: T,
      children: [(0, l.jsx)(r.FormItem, {
        title: g.default.Messages.EXPIRE_AFTER,
        className: I.marginTop20,
        children: (0, l.jsx)(r.SingleSelect, {
          value: null !== (t = null == w ? void 0 : w.value) && void 0 !== t ? t : m[0].value,
          options: M,
          renderOptionLabel: e => {
            let t = 0 === e.value;
            return (0, u.renderOption)(e, t && A, t && U)
          },
          renderOptionValue: e => {
            let [t] = e, n = 0 === t.value;
            return (0, u.renderOption)(t, n && A, n && U)
          },
          onChange: C,
          optionClassName: h.option,
          className: h.option,
          maxVisibleItems: 8
        })
      }), x ? (0, l.jsx)(d.default, {
        guildId: n,
        permanentInviteSelected: 0 === c,
        onClick: () => y(!0)
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.FormItem, {
          title: g.default.Messages.MAX_NUMBER_OF_USES,
          className: s(I.marginTop20, I.marginBottom4),
          children: (0, l.jsx)(r.SingleSelect, {
            value: null == L ? void 0 : L.value,
            options: p,
            onChange: S
          })
        }), (0, l.jsx)(E, {
          temporary: _,
          shouldHide: x || a,
          onToggleTemporary: N
        })]
      })]
    })
  })
}