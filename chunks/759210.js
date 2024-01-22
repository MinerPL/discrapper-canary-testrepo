"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var l = s("37983"),
  a = s("884691"),
  i = s("446674"),
  r = s("669491"),
  o = s("77078"),
  n = s("450911"),
  u = s("272030"),
  d = s("54239"),
  c = s("736964"),
  f = s("377114"),
  S = s("824794"),
  m = s("271938"),
  E = s("824563"),
  T = s("27618"),
  x = s("663745"),
  N = s("423487"),
  p = s("50885"),
  h = s("713135"),
  v = s("106435"),
  A = s("906889"),
  I = s("289918"),
  _ = s("609734"),
  C = s("590006"),
  U = s("717226"),
  j = s("590456"),
  y = s("49111"),
  g = s("843455"),
  M = s("782340"),
  R = s("734675");
let P = o.AvatarSizes.SIZE_120,
  O = p.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: p,
    guildId: F,
    channelId: B,
    friendToken: D,
    isStreaming: L,
    hasProfileEffect: b,
    onClose: G
  } = e, k = (0, i.useStateFromStores)([T.default], () => T.default.getRelationshipType(p.id)), w = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(p.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(p.id)), H = (0, i.useStateFromStores)([h.default], () => h.default.getUserProfile(p.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === p.id), {
    profileTheme: Y
  } = (0, A.default)(p, t), {
    avatarSrc: K,
    eventHandlers: Z,
    avatarDecorationSrc: Q
  } = (0, v.default)({
    user: p,
    size: P
  }), W = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(p, B), [p, B]);

  function q() {
    G(), (0, d.popLayer)()
  }

  function J() {
    c.default.removeFriend(p.id, {
      location: "User Profile"
    })
  }

  function X(e) {
    n.default.openPrivateChannel(p.id, !1, !1, e), q()
  }

  function $() {
    try {
      c.default.addRelationship({
        userId: p.id,
        context: {
          location: "User Profile"
        },
        type: y.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      q()
    }
  }

  function ee() {
    let e = "@me" === F ? void 0 : F;
    (0, f.showReportModalForUser)(p, e)
  }
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(I.default, {
      displayProfile: t,
      onClose: q,
      user: p,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: b
    }), (0, l.jsxs)("div", {
      className: R.header,
      children: [(0, l.jsx)("div", {
        ...Z,
        children: (0, l.jsx)(O, {
          src: K,
          avatarDecoration: Q,
          size: P,
          className: R.avatar,
          status: W ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
          isMobile: w,
          statusTooltip: !0,
          "aria-label": p.username
        })
      }), (0, l.jsxs)("div", {
        className: R.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !p.isClyde() ? (0, l.jsx)(o.Tooltip, {
          text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(N.default, {
            ...e,
            className: R.warningCircleIcon,
            color: r.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: p,
          className: R.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: R.relationshipButtons,
          children: [(0, l.jsx)(_.default, {
            className: R.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, l.jsx)(U.default, {
            user: p,
            isCurrentUser: z,
            relationshipType: k,
            onAddFriend: function() {
              try {
                c.default.addRelationship({
                  userId: p.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: D
                })
              } catch (e) {
                q()
              }
            },
            onIgnoreFriend: function() {
              c.default.cancelFriendRequest(p.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => X("User Profile Modal - Send Message Button")
          }), z || p.isNonUserBot() ? null : (0, l.jsx)(o.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.el("487956").then(s.bind(s, "487956"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  relationshipType: k,
                  onRemoveFriend: J,
                  onBlock: $,
                  onReport: ee,
                  onMessage: () => X("User Profile Modal - Context Menu"),
                  user: p
                })
              })
            },
            children: (0, l.jsx)(x.default, {
              className: R.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}