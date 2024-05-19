"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("481060"),
  o = n("432247"),
  l = n("5192"),
  u = n("829820"),
  d = n("22387");

function _(e) {
  let {
    activity: t,
    user: n,
    channelId: r,
    guildId: _,
    source: c,
    size: E,
    look: I,
    color: T,
    className: f,
    onAction: S
  } = e, {
    tooltip: h,
    loading: A,
    disabled: m,
    onClick: N
  } = (0, u.useSpotifySyncAction)(t, n, c, l.default.getNickname(_, r, n)), p = () => {
    null == S || S(), N()
  };
  return (0, i.jsx)(s.Tooltip, {
    text: h,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: r
      } = e;
      return (0, i.jsx)(s.Button, {
        size: a()(E, d.iconButtonSize),
        className: a()(f, d.iconButton),
        look: I,
        color: T,
        onClick: p,
        onMouseEnter: n,
        onMouseLeave: r,
        disabled: m,
        submitting: A,
        "aria-label": null != h ? h : t.name,
        children: (0, i.jsx)(o.default, {
          className: d.listenAlongIcon
        })
      })
    }
  })
}