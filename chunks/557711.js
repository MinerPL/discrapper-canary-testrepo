"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(432247),
  l = n(5192),
  u = n(829820),
  _ = n(22387);

function d(e) {
  let {
    activity: t,
    user: n,
    channelId: r,
    guildId: d,
    source: c,
    size: E,
    look: I,
    color: T,
    className: h,
    onAction: S
  } = e, {
    tooltip: f,
    loading: N,
    disabled: A,
    onClick: m
  } = (0, u.Fe)(t, n, c, l.ZP.getNickname(d, r, n)), O = () => {
    null == S || S(), m()
  };
  return (0, i.jsx)(o.Tooltip, {
    text: f,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: r
      } = e;
      return (0, i.jsx)(o.Button, {
        size: E,
        className: s()(_.syncButton, h),
        innerClassName: _.syncButtonInner,
        look: I,
        color: T,
        onClick: O,
        onMouseEnter: n,
        onMouseLeave: r,
        disabled: A,
        submitting: N,
        "aria-label": null != f ? f : t.name,
        children: (0, i.jsx)(a.Z, {
          width: 16,
          height: 16
        })
      })
    }
  })
}