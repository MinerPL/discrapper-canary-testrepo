"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("692547"),
  r = s("481060"),
  o = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  m = s("314897"),
  I = s("158776"),
  E = s("699516"),
  v = s("621113"),
  _ = s("759231"),
  T = s("998502"),
  x = s("785717"),
  N = s("621853"),
  A = s("204197"),
  U = s("735336"),
  g = s("520978"),
  C = s("184325"),
  h = s("652853"),
  p = s("496206"),
  R = s("228168"),
  j = s("981631"),
  M = s("231338"),
  P = s("689938"),
  y = s("370386");
let O = r.AvatarSizes.SIZE_120,
  L = T.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: T,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([E.default], () => E.default.getRelationshipType(T.id)), H = (0, i.useStateFromStores)([I.default], () => I.default.isMobileOnline(T.id)), Y = (0, i.useStateFromStores)([I.default], () => I.default.getStatus(T.id)), z = (0, i.useStateFromStores)([N.default], () => N.default.getUserProfile(T.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === T.id), {
    theme: Z
  } = (0, h.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, x.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, A.default)({
    user: T,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(T, D), [T, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(T.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(T.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: T.id,
        context: {
          location: "User Profile"
        },
        type: j.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(T, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: T,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(L, {
          src: J,
          avatarDecoration: q,
          size: O,
          className: y.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": T.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !T.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          color: r.TooltipColors.NESTED,
          children: e => (0, l.jsx)(_.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: T,
          className: y.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(g.default, {
            className: y.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(p.default, {
            user: T,
            isCurrentUser: W,
            relationshipType: V,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: T.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: b
                })
              } catch (e) {
                $()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(T.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || T.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              K({
                action: "PRESS_OPTIONS"
              }), (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.e("29136").then(s.bind(s, "193646"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  relationshipType: V,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: el,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: T
                })
              })
            },
            children: (0, l.jsx)(v.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}