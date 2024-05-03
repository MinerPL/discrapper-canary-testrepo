"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("866442"),
  d = n("399606"),
  o = n("481060"),
  u = n("749210"),
  N = n("410030"),
  c = n("607070"),
  _ = n("484459"),
  I = n("318661"),
  E = n("721987"),
  O = n("502762"),
  f = n("430824"),
  S = n("594174"),
  T = n("551388"),
  m = n("5192"),
  D = n("51144"),
  A = n("228168"),
  g = n("208495");

function G(e) {
  let {
    guildId: t,
    welcomeMessage: n,
    className: s
  } = e, G = (0, d.useStateFromStores)([f.default], () => f.default.getGuild(t)), h = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion), L = (0, d.useStateFromStores)([S.default], () => S.default.getUser(null == n ? void 0 : n.authorIds[0])), R = (0, d.useStateFromStores)([S.default], () => S.default.getCurrentUser()), p = (0, I.default)(null == L ? void 0 : L.id, t), {
    theme: P,
    primaryColor: x
  } = (0, E.default)({
    user: L,
    displayProfile: p
  }), M = (0, N.default)(), U = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, P).hex(), v = l.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.authorIds) && void 0 !== e ? e : []
  }, [n]);
  l.useEffect(() => {
    u.default.requestMembersById(t, v)
  }, [t, v]), l.useEffect(() => {
    null != L && (0, _.default)(L.id, L.getAvatarURL(t, 48), {
      guildId: t
    })
  }, [L, t]);
  let C = (0, D.useName)(R);
  if (null == L || null == R || null == n) return null;
  let B = null != G && G.ownerId === L.id;
  return (0, a.jsx)("div", {
    className: i()(g.welcomeMessageContainer, s),
    children: (0, a.jsxs)(O.default, {
      className: g.welcomeMessageProfileContainer,
      user: L,
      displayProfile: p,
      profileType: A.UserProfileTypes.CARD,
      themeOverride: M,
      forceShowPremium: !0,
      children: [(0, a.jsx)("div", {
        className: g.avatarBackground
      }), h ? (0, a.jsx)(o.Avatar, {
        src: L.getAvatarURL(t, 48),
        size: o.AvatarSizes.SIZE_48,
        className: g.avatar,
        "aria-label": L.username
      }) : (0, a.jsx)(o.AnimatedAvatar, {
        src: L.getAvatarURL(t, 48),
        size: o.AvatarSizes.SIZE_48,
        className: g.avatar,
        "aria-label": L.username
      }), (0, a.jsx)("div", {
        className: g.avatarBorder,
        style: {
          backgroundColor: null != x ? (0, r.int2rgba)(x, 1) : U
        }
      }), (0, a.jsxs)("div", {
        className: g.welcomeMessageContent,
        children: [(0, a.jsxs)("div", {
          className: g.adminUsernameContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            children: m.default.getName(t, null, L)
          }), B ? (0, a.jsx)(T.default, {
            className: g.ownerIcon
          }) : null]
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          children: function(e, t) {
            let n = e.split(/\[@username\]/g);
            return (0, a.jsx)("span", {
              children: n.map((e, l) => (0, a.jsxs)(a.Fragment, {
                children: [e, l < n.length - 1 ? (0, a.jsx)(o.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  children: "@".concat(t)
                }) : null]
              }))
            })
          }(null == n ? void 0 : n.message, null != C ? C : R.username)
        })]
      })]
    })
  })
}