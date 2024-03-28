"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("866442"),
  d = n("399606"),
  o = n("481060"),
  u = n("749210"),
  N = n("410030"),
  c = n("607070"),
  _ = n("168631"),
  I = n("484459"),
  E = n("318661"),
  f = n("84244"),
  O = n("747074"),
  S = n("430824"),
  T = n("594174"),
  m = n("551388"),
  D = n("5192"),
  A = n("51144"),
  g = n("228168"),
  G = n("420899");

function h(e) {
  var t;
  let {
    guildId: n,
    welcomeMessage: s,
    className: h
  } = e, L = (0, N.default)(), R = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(n)), p = (0, d.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme), P = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion), x = (0, d.useStateFromStores)([T.default], () => T.default.getUser(null == s ? void 0 : s.authorIds[0])), M = (0, d.useStateFromStores)([T.default], () => T.default.getCurrentUser()), U = (0, E.default)(null == x ? void 0 : x.id, n), [v] = (0, f.default)(x, U), C = p ? L : null !== (t = (0, _.getProfileTheme)(v)) && void 0 !== t ? t : L, B = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, C).hex(), b = l.useMemo(() => {
    var e;
    return null !== (e = null == s ? void 0 : s.authorIds) && void 0 !== e ? e : []
  }, [s]);
  l.useEffect(() => {
    u.default.requestMembersById(n, b)
  }, [n, b]), l.useEffect(() => {
    null != x && (0, I.default)(x.id, x.getAvatarURL(n, 48), {
      guildId: n
    })
  }, [x, n]);
  let j = (0, A.useName)(M);
  if (null == x || null == M || null == s) return null;
  let w = null != R && R.ownerId === x.id;
  return (0, a.jsx)("div", {
    className: i()(G.welcomeMessageContainer, h),
    children: (0, a.jsxs)(O.default, {
      className: G.welcomeMessageProfileContainer,
      user: x,
      guildId: n,
      profileType: g.UserProfileTypes.CARD,
      forceShowPremium: !0,
      useDefaultClientTheme: !0,
      children: [(0, a.jsx)("div", {
        className: G.avatarBackground
      }), P ? (0, a.jsx)(o.Avatar, {
        src: x.getAvatarURL(n, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": x.username
      }) : (0, a.jsx)(o.AnimatedAvatar, {
        src: x.getAvatarURL(n, 48),
        size: o.AvatarSizes.SIZE_48,
        className: G.avatar,
        "aria-label": x.username
      }), (0, a.jsx)("div", {
        className: G.avatarBorder,
        style: {
          backgroundColor: null != v ? (0, r.int2rgba)(v, 1) : B
        }
      }), (0, a.jsxs)("div", {
        className: G.welcomeMessageContent,
        children: [(0, a.jsxs)("div", {
          className: G.adminUsernameContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            children: D.default.getName(n, null, x)
          }), w ? (0, a.jsx)(m.default, {
            className: G.ownerIcon
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
          }(null == s ? void 0 : s.message, null != j ? j : M.username)
        })]
      })]
    })
  })
}