"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(780384),
  o = t(481060),
  c = t(410030),
  d = t(134432),
  u = t(940627),
  E = t(806519),
  _ = t(768581),
  I = t(624138),
  T = t(689938),
  N = t(494439),
  m = t(129512),
  S = t(330065);
let h = [16, 16, 14, 14, 12, 10, 8];
s.Z = function(e) {
  var s, t;
  let {
    guild: l,
    disabled: g,
    small: x,
    loading: C = !1,
    description: R,
    memberCount: L,
    presenceCount: O,
    className: A
  } = e, p = (0, c.ZP)(), [M, f] = i.useState(!1);
  if (null == l || C) return (0, n.jsx)("div", {
    className: a()(A, N.card, N.cardPlaceholder, {
      [N.cardSmall]: x,
      [N.cardDisabled]: g
    })
  });
  let {
    name: v
  } = l, D = null != l.discoverySplash && /^data:/.test(l.discoverySplash) ? l.discoverySplash : _.ZP.getGuildDiscoverySplashURL({
    id: l.id,
    splash: l.discoverySplash,
    size: 240 * (0, d.x_)()
  }), Z = (0, r.wj)(p) ? m : S, j = null !== (s = _.ZP.getGuildIconURL({
    id: l.id,
    icon: l.icon,
    size: 40
  })) && void 0 !== s ? s : void 0, U = null != l.description ? l.description : R, G = null != L ? L : null == l ? void 0 : l.memberCount, P = null != O ? O : null == l ? void 0 : l.presenceCount, b = null;
  if (null != j) b = (0, n.jsx)("img", {
    src: j,
    alt: "",
    className: N.avatar
  });
  else {
    let e = (0, I.Zg)(l.name);
    b = (0, n.jsx)("div", {
      className: N.defaultIcon,
      children: (0, n.jsx)(o.Text, {
        className: N.acronym,
        style: {
          fontSize: null !== (t = h[e.length]) && void 0 !== t ? t : h[h.length - 1]
        },
        variant: "text-sm/normal",
        children: e
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: a()(A, N.card, {
      [N.cardSmall]: x,
      [N.cardDisabled]: g,
      [N.splashLoaded]: M
    }),
    children: [(0, n.jsxs)("div", {
      className: N.cardHeader,
      children: [(0, n.jsx)("div", {
        className: N.splash,
        children: (0, n.jsx)("img", {
          src: null != D ? D : Z,
          alt: "",
          className: N.splashImage,
          onLoad: () => f(!0)
        })
      }), (0, n.jsx)("div", {
        className: N.guildIcon,
        children: (0, n.jsx)(E.ZP, {
          mask: E.ZP.Masks.SQUIRCLE,
          width: 48,
          height: 48,
          children: (0, n.jsx)("div", {
            className: N.iconMask,
            children: (0, n.jsx)(E.ZP, {
              mask: E.ZP.Masks.SQUIRCLE,
              width: 40,
              height: 40,
              children: null != b ? b : null
            })
          })
        })
      })]
    }), (0, n.jsxs)("div", {
      className: N.guildInfo,
      children: [(0, n.jsxs)("div", {
        className: N.title,
        children: [(0, n.jsx)(u.Z, {
          className: N.verifiedIcon,
          guild: l,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }), (0, n.jsx)(o.Text, {
          className: N.guildName,
          variant: "text-md/normal",
          children: (0, n.jsx)("span", {
            children: v
          })
        })]
      }), (0, n.jsx)(o.Text, {
        className: N.description,
        variant: "text-sm/normal",
        children: (0, n.jsx)("span", {
          children: U
        })
      }), (0, n.jsxs)("div", {
        className: N.memberInfo,
        children: [null != P && (0, n.jsxs)("div", {
          className: N.memberCount,
          children: [(0, n.jsx)("div", {
            className: N.dotOnline
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: x ? T.Z.Messages.NUMBERS_ONLY.format({
              count: P
            }) : T.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: P
            })
          })]
        }), null != G && (0, n.jsxs)("div", {
          className: N.memberCount,
          children: [(0, n.jsx)("div", {
            className: N.dotOffline
          }), (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: x ? T.Z.Messages.NUMBERS_ONLY.format({
              count: G
            }) : T.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: G
            })
          })]
        })]
      })]
    })]
  })
}