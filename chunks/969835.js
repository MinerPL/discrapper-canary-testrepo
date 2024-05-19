"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
  o = n("727637"),
  l = n("100527"),
  u = n("906732"),
  d = n("680295"),
  _ = n("271383"),
  c = n("430824"),
  E = n("594174"),
  I = n("785717"),
  T = n("318661"),
  f = n("502762"),
  S = n("544989"),
  h = n("301984"),
  A = n("94918"),
  m = n("664794"),
  N = n("171368"),
  p = n("958120"),
  O = n("215633"),
  C = n("23293"),
  R = n("228168"),
  g = n("689938");

function L(e) {
  e.stopPropagation()
}

function v(e) {
  let {
    user: t,
    guildId: n,
    channelId: v,
    messageId: D,
    roleId: M,
    closePopout: y,
    setPopoutRef: P,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: b = []
  } = e, {
    analyticsLocations: G
  } = (0, u.default)([...b, l.default.BITE_SIZE_PROFILE_POPOUT]), w = (0, I.useTrackUserProfileAction)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: v,
    messageId: D,
    roleId: M
  }), k = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), B = (0, a.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), V = (0, a.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null), x = r.useRef(null), F = (0, T.default)(t.id, n), H = (0, o.default)(x);
  r.useEffect(() => {
    null == P || P(null == x ? void 0 : x.current)
  }, [x, P]);
  let Y = e => {
    null == y || y(), (0, N.openUserProfileModal)({
      sourceAnalyticsLocations: G,
      userId: t.id,
      guildId: n,
      channelId: v,
      messageId: D,
      roleId: M,
      ...e
    })
  };
  return null == k ? null : (0, i.jsx)(u.AnalyticsLocationProvider, {
    value: G,
    children: (0, i.jsx)(I.UserProfileAnalyticsProvider, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: n,
      channelId: v,
      messageId: D,
      roleId: M,
      shouldTrackViewOnMount: null == V || null != V.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(s.Dialog, {
        ref: x,
        "aria-label": t.username,
        onClick: L,
        onContextMenu: L,
        children: [(0, i.jsxs)(f.default, {
          user: t,
          displayProfile: F,
          profileType: R.UserProfileTypes.BITE_SIZE,
          children: [(0, i.jsxs)(S.default, {
            profileType: R.UserProfileTypes.BITE_SIZE,
            children: [(0, i.jsx)(A.default, {
              user: t,
              guildId: n,
              channelId: v,
              onClose: y
            }), (0, i.jsx)(h.default, {
              user: t
            }), (0, i.jsx)(m.default, {
              user: t,
              profileType: R.UserProfileTypes.BITE_SIZE,
              guildId: n,
              viewProfileItem: (0, i.jsx)(s.MenuItem, {
                id: "view-profile",
                label: g.default.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  w({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: G
                  }), Y()
                }
              })
            })]
          }), (0, i.jsx)(C.default, {
            user: t,
            displayProfile: F,
            guildId: n,
            channelId: v,
            onOpenProfile: U ? void 0 : Y
          }), (0, i.jsx)(p.default, {
            user: t,
            currentUser: k,
            displayProfile: F,
            guild: B,
            isHovering: H,
            onOpenProfile: Y,
            channelId: v,
            onClose: y
          }), (0, i.jsx)(O.default, {
            user: t,
            guildId: n,
            channelId: v,
            onClose: y
          })]
        }), (null == F ? void 0 : F.profileEffectId) != null && (0, i.jsx)(d.default, {
          profileEffectId: null == F ? void 0 : F.profileEffectId,
          isHovering: H
        })]
      })
    })
  })
}