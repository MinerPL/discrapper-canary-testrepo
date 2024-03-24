"use strict";
i.r(t), i.d(t, {
  useUsernameHook: function() {
    return h
  }
});
var n = i("37983"),
  a = i("884691"),
  l = i("77078"),
  o = i("812204"),
  s = i("685665"),
  r = i("506885"),
  u = i("981601"),
  c = i("42203"),
  d = i("441823");

function h(e) {
  var t, i;
  let {
    user: h,
    channelId: m,
    guildId: f,
    messageId: p,
    stopPropagation: T = !1,
    ariaLabel: R
  } = e, {
    AnalyticsLocationProvider: g
  } = (0, s.default)(o.default.USERNAME);
  let E = (t = h, i = m, a.useCallback(e => {
    let n = c.default.getChannel(i);
    null != n && null != t && (0, d.openUserContextMenu)(e, t, n)
  }, [t, i]));
  return a.useCallback(e => (t, i) => {
    let o = (i, n) => (0, a.createElement)(l.NameWithRoleAnchor, {
        ...null != i ? i : {},
        key: n,
        onContextMenu: E,
        name: t,
        color: null == e ? void 0 : e.colorString,
        roleName: null == e ? void 0 : e.colorRoleName,
        "aria-label": R
      }),
      s = e => t => {
        T && t.stopPropagation(), e(t)
      };
    return (0, n.jsx)(g, {
      children: null != h ? (0, n.jsx)(l.Popout, {
        position: "right",
        preload: () => (0, r.default)(h.id, h.getAvatarURL(f, 80), {
          guildId: f,
          channelId: m
        }),
        renderPopout: t => (0, n.jsx)(u.default, {
          ...t,
          userId: h.id,
          guildId: f,
          channelId: m,
          messageId: p,
          roleId: null == e ? void 0 : e.colorRoleId
        }),
        children: e => {
          let {
            onClick: t,
            ...i
          } = e;
          return o({
            onClick: s(t),
            ...i
          })
        }
      }, i) : o(void 0, i)
    })
  }, [h, m, f, p, E, T, R, g])
}