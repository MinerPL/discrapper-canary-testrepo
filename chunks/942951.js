"use strict";
i.r(t), i.d(t, {
  useUsernameHook: function() {
    return h
  }
});
var n = i("735250"),
  a = i("470079"),
  s = i("481060"),
  l = i("100527"),
  o = i("906732"),
  r = i("484459"),
  u = i("103575"),
  d = i("592125"),
  c = i("91047");

function h(e) {
  var t, i;
  let {
    user: h,
    channelId: f,
    guildId: m,
    messageId: p,
    stopPropagation: g = !1,
    ariaLabel: T
  } = e, {
    analyticsLocations: v
  } = (0, o.default)(l.default.USERNAME);
  let S = (t = h, i = f, a.useCallback(e => {
    let n = d.default.getChannel(i);
    null != n && null != t && (0, c.openUserContextMenu)(e, t, n)
  }, [t, i]));
  return a.useCallback(e => (t, i) => {
    let l = (i, n) => (0, a.createElement)(s.NameWithRoleAnchor, {
        ...null != i ? i : {},
        key: n,
        onContextMenu: S,
        name: t,
        color: null == e ? void 0 : e.colorString,
        roleName: null == e ? void 0 : e.colorRoleName,
        "aria-label": T
      }),
      d = e => t => {
        g && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(o.AnalyticsLocationProvider, {
      value: v,
      children: null != h ? (0, n.jsx)(s.Popout, {
        position: "right",
        preload: () => (0, r.default)(h.id, h.getAvatarURL(m, 80), {
          guildId: m,
          channelId: f
        }),
        renderPopout: t => (0, n.jsx)(u.default, {
          ...t,
          location: "useUsernameHook",
          userId: h.id,
          guildId: m,
          channelId: f,
          messageId: p,
          roleId: null == e ? void 0 : e.colorRoleId
        }),
        children: e => {
          let {
            onClick: t,
            ...i
          } = e;
          return l({
            onClick: d(t),
            ...i
          })
        }
      }, i) : l(void 0, i)
    })
  }, [v, h, f, m, p, S, g, T])
}