"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  o = s("669491"),
  r = s("77078"),
  n = s("450911"),
  u = s("272030"),
  c = s("54239"),
  d = s("736964"),
  f = s("377114"),
  S = s("824794"),
  m = s("271938"),
  E = s("824563"),
  T = s("27618"),
  p = s("663745"),
  N = s("423487"),
  _ = s("50885"),
  A = s("756507"),
  I = s("713135"),
  v = s("106435"),
  x = s("906889"),
  U = s("289918"),
  h = s("609734"),
  C = s("590006"),
  y = s("717226"),
  j = s("590456"),
  R = s("49111"),
  M = s("843455"),
  P = s("782340"),
  O = s("431517");
let g = r.AvatarSizes.SIZE_120,
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
  } = e, V = (0, i.useStateFromStores)([T.default], () => T.default.getRelationshipType(_.id)), w = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(_.id)), H = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(_.id)), Y = (0, i.useStateFromStores)([I.default], () => I.default.getUserProfile(_.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === _.id), {
    profileTheme: J
  } = (0, x.default)(_, t), {
    trackUserProfileAction: K
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: Q,
    eventHandlers: W,
    avatarDecorationSrc: Z
  } = (0, v.default)({
    user: _,
    size: g
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
      className: O.header,
      children: [(0, a.jsx)("div", {
        ...W,
        children: (0, a.jsx)(F, {
          src: Q,
          avatarDecoration: Z,
          size: g,
          className: O.avatar,
          status: q ? M.StatusTypes.UNKNOWN : b ? M.StatusTypes.STREAMING : H,
          statusBackdropColor: (0, r.getStatusBackdropColor)(J),
          isMobile: w,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, a.jsxs)("div", {
        className: O.headerTop,
        children: [(null == Y ? void 0 : Y.profileFetchFailed) && !_.isClyde() ? (0, a.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(N.default, {
            ...e,
            className: O.warningCircleIcon,
            color: o.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(C.default, {
          user: _,
          className: O.badgeList,
          guildId: D,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: O.relationshipButtons,
          children: [(0, a.jsx)(h.default, {
            className: O.applicationInstallButton,
            application: null == Y ? void 0 : Y.application
          }), (0, a.jsx)(y.default, {
            user: _,
            isCurrentUser: z,
            relationshipType: V,
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
                } = await s.el("487956").then(s.bind(s, "487956"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: V,
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
            children: (0, a.jsx)(p.default, {
              className: O.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}