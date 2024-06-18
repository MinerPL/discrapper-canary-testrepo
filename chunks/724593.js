"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(10683),
  a = n(793080),
  l = n(481060),
  u = n(785717),
  _ = n(702557),
  d = n(993409),
  c = n(689938),
  E = n(66073);

function I(e) {
  let {
    user: t,
    isHovering: n,
    onOpenProfile: r
  } = e, {
    trackUserProfileAction: I
  } = (0, u.KZ)(), {
    note: T
  } = (0, _.Z)(t.id), h = () => {
    I({
      action: "PRESS_ADD_NOTE"
    }), null == r || r()
  };
  return null == T || "" === T ? (0, i.jsx)(d.Z, {
    variant: "icon",
    text: c.Z.Messages.ADD_NOTE,
    "aria-label": c.Z.Messages.ADD_NOTE,
    icon: a.W,
    onClick: h,
    color: E.color,
    look: l.Button.Looks.BLANK,
    className: s()(E.button, {
      [E.visible]: n
    })
  }) : (0, i.jsx)(d.Z, {
    variant: "icon",
    text: T,
    "aria-label": T,
    icon: o.A,
    onClick: h,
    color: E.color,
    look: l.Button.Looks.BLANK,
    className: s()(E.button, {
      [E.visible]: n
    }),
    tooltipClassName: E.tooltip
  })
}