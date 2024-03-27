"use strict";
n.r(t), n.d(t, {
  useAutomodAvatar: function() {
    return f
  },
  AutomodAvatar: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("206230"),
  o = n("523096"),
  u = n("50885"),
  d = n("782340"),
  c = n("864994");
let E = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    [t, n] = a.useState(!1),
    s = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    i = a.useMemo(() => {
      let n = t || !s && !e;
      return (0, o.getAutomodAvatarURL)(n)
    }, [t, s, e]),
    u = a.useCallback(() => n(!0), []),
    d = a.useCallback(() => n(!1), []);
  return {
    avatarSrc: i,
    eventHandlers: {
      onMouseEnter: u,
      onMouseLeave: d
    }
  }
}

function _(e) {
  let {
    src: t
  } = e;
  return (0, s.jsx)("div", {
    className: c.avatarContainer,
    children: (0, s.jsx)(E, {
      src: t,
      size: i.AvatarSizes.SIZE_40,
      "aria-label": d.default.Messages.GUILD_AUTOMOD_USERNAME
    })
  })
}