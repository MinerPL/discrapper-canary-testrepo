"use strict";
n.d(t, {
  C: function() {
    return E
  },
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(75735),
  l = n(40851),
  u = n(67844),
  _ = n(871499),
  d = n(239618);

function c(e) {
  let t = (0, u.X)(e),
    {
      enabled: n,
      cameraUnavailable: s,
      onChange: o,
      onCameraUnavailable: _,
      hasPermission: d,
      children: c,
      channelLimitReached: E = !1,
      join: I
    } = e,
    T = (0, l.bp)(),
    h = s ? () => _() : () => o(!e.enabled, T),
    {
      Component: S,
      play: f,
      events: N
    } = (0, a.o)(I || n ? "disable" : "enable");
  return r.useEffect(() => () => f(), [n, f]), (0, i.jsx)(i.Fragment, {
    children: c({
      onClick: h,
      active: n,
      disabled: !n && (!d || E),
      iconComponent: S,
      label: t,
      unavailable: s,
      onMouseEnter: I ? void 0 : N.onMouseEnter,
      onMouseLeave: I ? void 0 : N.onMouseLeave
    })
  })
}

function E(e) {
  let {
    enabled: t,
    join: n,
    channel: r,
    onChange: s,
    onCameraUnavailable: a,
    cameraUnavailable: l,
    hasPermission: u,
    className: E,
    channelLimitReached: I,
    channelLimit: T,
    centerButton: h = !1,
    onPopoutClick: S,
    ...f
  } = e, N = h ? _.d : _.Z;
  return (0, i.jsx)(c, {
    enabled: t,
    join: n,
    channel: r,
    onChange: s,
    onCameraUnavailable: a,
    cameraUnavailable: l,
    hasPermission: u,
    channelLimitReached: I,
    channelLimit: T,
    children: e => {
      let {
        unavailable: n,
        onMouseEnter: r,
        onMouseLeave: s,
        ...a
      } = e;
      return (0, i.jsx)(N, {
        ...a,
        ...f,
        onMouseEnter: e => {
          var t;
          null === (t = f.onMouseEnter) || void 0 === t || t.call(f, e), null == r || r()
        },
        onMouseLeave: e => {
          var t;
          null === (t = f.onMouseLeave) || void 0 === t || t.call(f, e), null == s || s()
        },
        isActive: t,
        className: o()(E, {
          [d.fauxDisabled]: n
        }),
        onPopoutClick: S
      })
    }
  })
}