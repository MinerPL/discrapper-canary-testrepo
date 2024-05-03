"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("37234"),
  o = s("727637"),
  u = s("100527"),
  d = s("906732"),
  c = s("680295"),
  f = s("158776"),
  S = s("5192"),
  m = s("785717"),
  I = s("318661"),
  E = s("502762"),
  v = s("705556"),
  _ = s("301984"),
  T = s("94918"),
  x = s("664794"),
  N = s("980768"),
  A = s("806926"),
  U = s("740021"),
  g = s("228168"),
  C = s("981631"),
  h = s("689938"),
  p = s("750721");

function R(e) {
  let {
    user: t,
    guildId: s,
    channelId: R,
    messageId: j,
    roleId: M,
    friendToken: P,
    initialSection: y,
    autoFocusNote: O,
    transitionState: L,
    sourceAnalyticsLocations: F = [],
    onClose: D
  } = e, b = s === C.ME ? void 0 : s, {
    analyticsLocations: B
  } = (0, d.default)([...F, u.default.SIMPLIFIED_PROFILE_MODAL]), G = (0, m.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: b,
    channelId: R,
    messageId: j,
    roleId: M
  }), [k, w] = a.useState(b), V = (0, I.default)(t.id), H = (0, I.default)(t.id, b), Y = null == k ? V : H, {
    activity: z,
    customStatusActivity: W
  } = (0, i.useStateFromStoresObject)([f.default], () => ({
    activity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== C.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: f.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === C.ActivityTypes.CUSTOM_STATUS
    })
  })), Z = a.createRef(), K = (0, o.default)(Z);
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(m.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: b,
      channelId: R,
      messageId: j,
      roleId: M,
      children: (0, l.jsx)(n.ModalRoot, {
        transitionState: L,
        className: p.root,
        hideShadow: !0,
        "aria-label": h.default.Messages.USER_PROFILE_MODAL,
        children: (0, l.jsxs)(E.default, {
          user: t,
          displayProfile: Y,
          profileType: g.UserProfileTypes.FULL_SIZE,
          ref: Z,
          children: [(0, l.jsxs)(N.default, {
            profileType: g.UserProfileTypes.FULL_SIZE,
            isFaded: (null == Y ? void 0 : Y.profileEffectId) != null && !K,
            children: [(0, l.jsx)(T.default, {
              user: t,
              guildId: b,
              channelId: R,
              onClose: D
            }), (0, l.jsx)(_.default, {
              user: t,
              friendToken: P
            }), (0, l.jsx)(v.default, {
              type: "overlay",
              user: t,
              guildId: b,
              onClose: () => {
                D(), (0, r.popLayer)()
              }
            }), (0, l.jsx)(x.default, {
              user: t,
              guildId: b,
              viewProfileItem: (null == H ? void 0 : H.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                id: "view-main-profile",
                label: h.default.Messages.VIEW_MAIN_PROFILE,
                subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: S.default.getName(void 0, void 0, t)
                }),
                action: () => {
                  G({
                    action: "PRESS_VIEW_MAIN_PROFILE",
                    analyticsLocations: B
                  }), w(void 0)
                }
              }) : (0, l.jsx)(n.MenuItem, {
                id: "view-server-profile",
                label: h.default.Messages.VIEW_SERVER_PROFILE,
                subtext: h.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: S.default.getName(b, R, t)
                }),
                action: () => {
                  G({
                    action: "PRESS_VIEW_SERVER_PROFILE",
                    analyticsLocations: B
                  }), w(b)
                }
              })
            })]
          }), (0, l.jsx)(U.default, {
            user: t,
            displayProfile: Y,
            guildId: b,
            channelId: R,
            activity: z,
            customStatusActivity: W,
            onClose: D
          }), (0, l.jsx)(A.default, {
            user: t,
            displayProfile: Y,
            initialSection: y,
            autoFocusNote: O,
            transitionState: L,
            onClose: D
          }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, l.jsx)(c.default, {
            profileEffectId: null == Y ? void 0 : Y.profileEffectId,
            isHovering: K
          })]
        })
      })
    })
  })
}