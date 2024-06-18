"use strict";
t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(780384),
  r = t(410030),
  o = t(44315),
  c = t(586791),
  d = t(54264),
  u = t(208567),
  E = t(981631),
  _ = t(221272);
let I = E.Ilk.PRIMARY_400,
  T = E.Ilk.PRIMARY_500;

function N(e) {
  let {
    enabled: s,
    imageClassName: t,
    iconWrapperClassName: i,
    ...E
  } = e, N = (0, r.ZP)(), m = (0, a.wj)(N) ? I : T, S = {
    height: 18,
    width: 18,
    color: (0, o.Lq)(m)
  };
  return (0, n.jsx)(u.Z, {
    className: l()({
      [_.avatarUploader]: s,
      [_.avatarUploaderDisabled]: !s
    }),
    imageClassName: l()(t, _.avatarUploaderInnerSquare, {
      [_.avatarUploaderInnerSquareDisabled]: !s
    }),
    icon: null != E.image && "" !== E.image ? (0, n.jsx)(c.Z, {
      ...S
    }) : (0, n.jsx)(d.Z, {
      ...S
    }),
    iconClassName: l()(_.avatarUploadIcon, _.hideDefaultIcon),
    iconWrapperClassName: i,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}