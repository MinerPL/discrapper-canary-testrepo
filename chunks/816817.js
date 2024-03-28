"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("780384"),
  o = s("481060"),
  d = s("410030"),
  u = s("134432"),
  c = s("940627"),
  E = s("806519"),
  _ = s("768581"),
  I = s("624138"),
  T = s("689938"),
  S = s("916495"),
  f = s("129512"),
  m = s("330065");
let N = [16, 16, 14, 14, 12, 10, 8];
t.default = function(e) {
  var t, s;
  let {
    guild: n,
    disabled: g,
    small: h,
    loading: C = !1,
    description: R,
    memberCount: x,
    presenceCount: L,
    className: O
  } = e, A = (0, d.default)(), [p, M] = l.useState(!1);
  if (null == n || C) return (0, a.jsx)("div", {
    className: i()(O, S.card, S.cardPlaceholder, {
      [S.cardSmall]: h,
      [S.cardDisabled]: g
    })
  });
  let {
    name: D
  } = n, v = null != n.discoverySplash && /^data:/.test(n.discoverySplash) ? n.discoverySplash : _.default.getGuildDiscoverySplashURL({
    id: n.id,
    splash: n.discoverySplash,
    size: 240 * (0, u.getDevicePixelRatio)()
  }), j = (0, r.isThemeDark)(A) ? f : m, G = null !== (t = _.default.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 40
  })) && void 0 !== t ? t : void 0, U = null != n.description ? n.description : R, P = null != x ? x : null == n ? void 0 : n.memberCount, b = null != L ? L : null == n ? void 0 : n.presenceCount, B = null;
  if (null != G) B = (0, a.jsx)("img", {
    src: G,
    alt: "",
    className: S.avatar
  });
  else {
    let e = (0, I.getAcronym)(n.name);
    B = (0, a.jsx)("div", {
      className: S.defaultIcon,
      children: (0, a.jsx)(o.Text, {
        className: S.acronym,
        style: {
          fontSize: null !== (s = N[e.length]) && void 0 !== s ? s : N[N.length - 1]
        },
        variant: "text-sm/normal",
        children: e
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: i()(O, S.card, {
      [S.cardSmall]: h,
      [S.cardDisabled]: g,
      [S.splashLoaded]: p
    }),
    children: [(0, a.jsxs)("div", {
      className: S.cardHeader,
      children: [(0, a.jsx)("div", {
        className: S.splash,
        children: (0, a.jsx)("img", {
          src: null != v ? v : j,
          alt: "",
          className: S.splashImage,
          onLoad: () => M(!0)
        })
      }), (0, a.jsx)("div", {
        className: S.guildIcon,
        children: (0, a.jsx)(E.default, {
          mask: E.default.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, a.jsx)("div", {
            className: S.iconMask,
            children: (0, a.jsx)(E.default, {
              mask: E.default.Masks.SQUIRCLE,
              width: 40,
              height: 40,
              children: null != B ? B : null
            })
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      className: S.guildInfo,
      children: [(0, a.jsxs)("div", {
        className: S.title,
        children: [(0, a.jsx)(c.default, {
          className: S.verifiedIcon,
          guild: n,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }), (0, a.jsx)(o.Text, {
          className: S.guildName,
          variant: "text-md/normal",
          children: (0, a.jsx)("span", {
            children: D
          })
        })]
      }), (0, a.jsx)(o.Text, {
        className: S.description,
        variant: "text-sm/normal",
        children: (0, a.jsx)("span", {
          children: U
        })
      }), (0, a.jsxs)("div", {
        className: S.memberInfo,
        children: [null != b && (0, a.jsxs)("div", {
          className: S.memberCount,
          children: [(0, a.jsx)("div", {
            className: S.dotOnline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: h ? T.default.Messages.NUMBERS_ONLY.format({
              count: b
            }) : T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: b
            })
          })]
        }), null != P && (0, a.jsxs)("div", {
          className: S.memberCount,
          children: [(0, a.jsx)("div", {
            className: S.dotOffline
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: h ? T.default.Messages.NUMBERS_ONLY.format({
              count: P
            }) : T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: P
            })
          })]
        })]
      })]
    })]
  })
}