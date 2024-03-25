"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("819855"),
  r = n("841098"),
  u = n("449918"),
  o = n("832132"),
  d = n("818643"),
  c = n("608684"),
  E = n("49111"),
  f = n("854045");
let h = E.Color.PRIMARY_400,
  v = E.Color.PRIMARY_500;

function m(e) {
  let {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: a,
    ...E
  } = e, m = (0, r.default)(), N = (0, i.isThemeDark)(m) ? h : v, _ = {
    height: 18,
    width: 18,
    color: (0, u.getColor)(N)
  };
  return (0, l.jsx)(c.default, {
    className: s({
      [f.avatarUploader]: t,
      [f.avatarUploaderDisabled]: !t
    }),
    imageClassName: s(n, f.avatarUploaderInnerSquare, {
      [f.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != E.image && "" !== E.image ? (0, l.jsx)(o.default, {
      ..._
    }) : (0, l.jsx)(d.default, {
      ..._
    }),
    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
    iconWrapperClassName: a,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}