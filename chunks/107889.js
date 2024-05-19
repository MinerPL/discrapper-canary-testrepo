"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("727637"),
  o = s("100527"),
  u = s("906732"),
  d = s("680295"),
  c = s("158776"),
  f = s("5192"),
  S = s("785717"),
  m = s("318661"),
  E = s("502762"),
  I = s("544989"),
  v = s("301984"),
  _ = s("94918"),
  T = s("664794"),
  g = s("806926"),
  A = s("740021"),
  x = s("228168"),
  U = s("981631"),
  N = s("689938"),
  p = s("61007");

function C(e) {
  let {
    user: t,
    guildId: s,
    channelId: C,
    messageId: h,
    roleId: R,
    friendToken: P,
    initialSection: M,
    autoFocusNote: j,
    transitionState: L,
    sourceAnalyticsLocations: y = [],
    onClose: O
  } = e, F = s === U.ME ? void 0 : s, {
    analyticsLocations: D
  } = (0, u.default)([...y, o.default.SIMPLIFIED_PROFILE_MODAL]), b = (0, S.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_MODAL",
    userId: t.id,
    guildId: F,
    channelId: C,
    messageId: h,
    roleId: R
  }), [B, G] = a.useState(F), k = (0, m.default)(t.id), w = (0, m.default)(t.id, F), Y = null == B ? k : w, {
    activity: H,
    customStatusActivity: V
  } = (0, i.useStateFromStoresObject)([c.default], () => ({
    activity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t !== U.ActivityTypes.CUSTOM_STATUS
    }),
    customStatusActivity: c.default.findActivity(t.id, e => {
      let {
        type: t
      } = e;
      return t === U.ActivityTypes.CUSTOM_STATUS
    })
  })), z = a.createRef(), W = (0, r.default)(z);
  return (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: D,
    children: (0, l.jsx)(S.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: F,
      channelId: C,
      messageId: h,
      roleId: R,
      children: (0, l.jsxs)(n.ModalRoot, {
        transitionState: L,
        className: p.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, l.jsxs)(E.default, {
          user: t,
          displayProfile: Y,
          profileType: x.UserProfileTypes.FULL_SIZE,
          ref: z,
          children: [(0, l.jsxs)(I.default, {
            profileType: x.UserProfileTypes.FULL_SIZE,
            children: [(0, l.jsx)(_.default, {
              user: t,
              guildId: F,
              channelId: C,
              onClose: O
            }), (0, l.jsx)(v.default, {
              user: t,
              friendToken: P
            }), (0, l.jsx)(T.default, {
              user: t,
              profileType: x.UserProfileTypes.FULL_SIZE,
              guildId: F,
              viewProfileItem: (null == w ? void 0 : w.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, l.jsx)(n.MenuItem, {
                id: "view-main-profile",
                label: N.default.Messages.VIEW_MAIN_PROFILE,
                subtext: N.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: f.default.getName(void 0, void 0, t)
                }),
                action: () => {
                  b({
                    action: "PRESS_VIEW_MAIN_PROFILE",
                    analyticsLocations: D
                  }), G(void 0)
                }
              }) : (0, l.jsx)(n.MenuItem, {
                id: "view-server-profile",
                label: N.default.Messages.VIEW_SERVER_PROFILE,
                subtext: N.default.Messages.AKA_DISPLAY_NAME.format({
                  displayName: f.default.getName(F, C, t)
                }),
                action: () => {
                  b({
                    action: "PRESS_VIEW_SERVER_PROFILE",
                    analyticsLocations: D
                  }), G(F)
                }
              })
            })]
          }), (0, l.jsx)(A.default, {
            user: t,
            displayProfile: Y,
            guildId: F,
            channelId: C,
            activity: H,
            customStatusActivity: V,
            onClose: O
          }), (0, l.jsx)(g.default, {
            user: t,
            displayProfile: Y,
            initialSection: M,
            autoFocusNote: j,
            transitionState: L,
            onClose: O
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, l.jsx)(d.default, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: W
        })]
      })
    })
  })
}