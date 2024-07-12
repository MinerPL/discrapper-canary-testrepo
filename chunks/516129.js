l.d(n, {
  Z: function() {
return x;
  }
});
var s = l(735250);
l(470079);
var a = l(120356),
  t = l.n(a),
  i = l(780384),
  r = l(481060),
  o = l(410030),
  d = l(44315),
  c = l(208567),
  u = l(981631),
  E = l(2426);
let _ = u.Ilk.PRIMARY_400,
  I = u.Ilk.PRIMARY_500;

function x(e) {
  let {
enabled: n,
imageClassName: l,
iconWrapperClassName: a,
...u
  } = e, x = (0, o.ZP)(), N = (0, i.wj)(x) ? _ : I, m = {
height: 18,
width: 18,
color: (0, d.Lq)(N)
  };
  return (0, s.jsx)(c.Z, {
className: t()({
  [E.avatarUploader]: n,
  [E.avatarUploaderDisabled]: !n
}),
imageClassName: t()(l, E.avatarUploaderInnerSquare, {
  [E.avatarUploaderInnerSquareDisabled]: !n
}),
icon: null != u.image && '' !== u.image ? (0, s.jsx)(r.PencilIcon, {
  size: 'custom',
  ...m
}) : (0, s.jsx)(r.ImagePlusIcon, {
  size: 'custom',
  ...m
}),
iconClassName: t()(E.avatarUploadIcon, E.hideDefaultIcon),
iconWrapperClassName: a,
showIcon: !0,
showIconDisabled: !0,
hideSize: !0,
...u
  });
}