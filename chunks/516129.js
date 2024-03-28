"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var a = l("735250");
l("470079");
var n = l("803997"),
  s = l.n(n),
  r = l("780384"),
  i = l("410030"),
  d = l("44315"),
  u = l("586791"),
  o = l("54264"),
  c = l("208567"),
  E = l("981631"),
  _ = l("109523");
let f = E.Color.PRIMARY_400,
  T = E.Color.PRIMARY_500;

function h(e) {
  let {
    enabled: t,
    imageClassName: l,
    iconWrapperClassName: n,
    ...E
  } = e, h = (0, i.default)(), I = (0, r.isThemeDark)(h) ? f : T, N = {
    height: 18,
    width: 18,
    color: (0, d.getColor)(I)
  };
  return (0, a.jsx)(c.default, {
    className: s()({
      [_.avatarUploader]: t,
      [_.avatarUploaderDisabled]: !t
    }),
    imageClassName: s()(l, _.avatarUploaderInnerSquare, {
      [_.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != E.image && "" !== E.image ? (0, a.jsx)(u.default, {
      ...N
    }) : (0, a.jsx)(o.default, {
      ...N
    }),
    iconClassName: s()(_.avatarUploadIcon, _.hideDefaultIcon),
    iconWrapperClassName: n,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}