"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("692547"),
  r = s("481060"),
  n = s("493683"),
  u = s("239091"),
  c = s("37234"),
  d = s("194359"),
  f = s("726521"),
  S = s("233440"),
  m = s("314897"),
  E = s("158776"),
  T = s("699516"),
  N = s("621113"),
  p = s("759231"),
  _ = s("998502"),
  I = s("785717"),
  A = s("621853"),
  v = s("204197"),
  x = s("358794"),
  U = s("735336"),
  h = s("520978"),
  C = s("184325"),
  y = s("496206"),
  j = s("228168"),
  R = s("981631"),
  M = s("231338"),
  P = s("689938"),
  g = s("950114");
let O = r.AvatarSizes.SIZE_120,
  F = _.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function D(e) {
  let {
    displayProfile: t,
    user: _,
    guildId: D,
    channelId: B,
    friendToken: L,
    isStreaming: b,
    hasProfileEffect: G,
    onClose: k
  } = e, w = (0, i.useStateFromStores)([T.default], () => T.default.getRelationshipType(_.id)), H = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(_.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(_.id)), Y = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(_.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === _.id), {
    profileTheme: J
  } = (0, x.default)(_, t), {
    trackUserProfileAction: K
  } = (0, I.useUserProfileAnalyticsContext)(), {
    avatarSrc: Q,
    eventHandlers: W,
    avatarDecorationSrc: Z
  } = (0, v.default)({
    user: _,
    size: O
  }), q = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(_, B), [_, B]);

  function X() {
    k(), (0, c.popLayer)()
  }

  function $() {
    K({
      action: "REMOVE_FRIEND"
    }), d.default.removeFriend(_.id, {
      location: "User Profile"
    })
  }

  function ee(e) {
    K({
      action: "SEND_MESSAGE"
    }), n.default.openPrivateChannel(_.id, !1, !1, e), X()
  }

  function et() {
    try {
      K({
        action: "BLOCK"
      }), d.default.addRelationship({
        userId: _.id,
        context: {
          location: "User Profile"
        },
        type: R.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      X()
    }
  }

  function es() {
    let e = "@me" === D ? void 0 : D;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(_, e)
  }
  return (0, a.jsxs)("header", {
    children: [(0, a.jsx)(U.default, {
      displayProfile: t,
      onClose: X,
      user: _,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: G
    }), (0, a.jsxs)("div", {
      className: g.header,
      children: [(0, a.jsx)("div", {
        ...W,
        children: (0, a.jsx)(F, {
          src: Q,
          avatarDecoration: Z,
          size: O,
          className: g.avatar,
          status: q ? M.StatusTypes.UNKNOWN : b ? M.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, r.getStatusBackdropColor)(J),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, a.jsxs)("div", {
        className: g.headerTop,
        children: [(null == Y ? void 0 : Y.profileFetchFailed) && !_.isClyde() ? (0, a.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(p.default, {
            ...e,
            className: g.warningCircleIcon,
            color: o.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(C.default, {
          user: _,
          className: g.badgeList,
          guildId: D,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: g.relationshipButtons,
          children: [(0, a.jsx)(h.default, {
            className: g.applicationInstallButton,
            application: null == Y ? void 0 : Y.application
          }), (0, a.jsx)(y.default, {
            user: _,
            isCurrentUser: z,
            relationshipType: w,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), d.default.addRelationship({
                  userId: _.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: L
                })
              } catch (e) {
                X()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), d.default.cancelFriendRequest(_.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => ee("User Profile Modal - Send Message Button")
          }), z || _.isNonUserBot() ? null : (0, a.jsx)(r.Clickable, {
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
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: w,
                  onRemoveFriend: $,
                  onBlock: et,
                  onReport: es,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => ee("User Profile Modal - Context Menu"),
                  user: _
                })
              })
            },
            children: (0, a.jsx)(N.default, {
              className: g.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}