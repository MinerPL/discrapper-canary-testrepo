"use strict";
n.r(t), n.d(t, {
  AutomodAvatar: function() {
    return _
  },
  useAutomodAvatar: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("607070"),
  o = n("426563"),
  u = n("998502"),
  d = n("689938"),
  c = n("250259");
let f = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    [t, n] = a.useState(!1),
    s = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    i = a.useMemo(() => {
      let n = t || !s && !e;
      return (0, o.getAutomodAvatarURL)(n)
    }, [t, s, e]),
    u = a.useCallback(() => n(!0), []);
  return {
    avatarSrc: i,
    eventHandlers: {
      onMouseEnter: u,
      onMouseLeave: a.useCallback(() => n(!1), [])
    }
  }
}

function _(e) {
  let {
    src: t
  } = e;
  return (0, s.jsx)("div", {
    className: c.avatarContainer,
    children: (0, s.jsx)(f, {
      src: t,
      size: i.AvatarSizes.SIZE_40,
      "aria-label": d.default.Messages.GUILD_AUTOMOD_USERNAME
    })
  })
}