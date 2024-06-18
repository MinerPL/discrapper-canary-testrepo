"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(68405),
  u = n(985375),
  _ = n(225196),
  d = n(887208),
  c = n(585483),
  E = n(981631),
  I = n(689938),
  T = n(480710);
t.Z = r.memo(function(e) {
  let {
    width: t,
    height: n,
    src: s,
    url: h,
    format: S,
    className: f
  } = e, [N, A] = r.useState(!1), m = (0, u.hb)((0, l.iy)(h)), O = m ? I.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : I.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, R = m ? d.Z : _.Z;
  r.useEffect(() => {
    if (!N) return;
    let e = setTimeout(() => {
      A(!1)
    }, 500);
    return () => clearTimeout(e)
  }, [N]);
  let C = e => {
    e.preventDefault(), e.stopPropagation(), A(!0), m ? (0, l.PF)(h) : ((0, l.uL)({
      url: h,
      src: s,
      width: t,
      height: n,
      format: S
    }), c.S.dispatch(E.CkL.FAVORITE_GIF))
  };
  return (0, i.jsx)(a.Tooltip, {
    text: O,
    children: e => (0, i.jsx)(a.Clickable, {
      ...e,
      className: o()(f, T.size, T.gifFavoriteButton, {
        [T.selected]: m,
        [T.showPulse]: N
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: C,
      onDoubleClick: e => e.preventDefault(),
      children: (0, i.jsx)(R, {
        className: T.icon
      })
    })
  })
})