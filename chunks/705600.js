"use strict";
n.d(t, {
  Z: function() {
    return b
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(692547),
  u = n(780384),
  _ = n(481060),
  d = n(353093),
  c = n(979264),
  E = n(284363),
  I = n(854218),
  T = n(623624),
  h = n(210887),
  S = n(271383),
  f = n(594174),
  N = n(267642),
  A = n(797717),
  m = n(672752),
  O = n(665786),
  R = n(639740),
  C = n(433564),
  p = n(697725),
  g = n(192091),
  L = n(507957),
  v = n(981631),
  D = n(689938),
  M = n(530393);
let P = {
  [E.Q.STAFF]: {
    IconComponent: g.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.VERIFIED_AND_PARTNERED]: {
    IconComponent: L.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.VERIFIED]: {
    IconComponent: L.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
    backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [E.Q.PARTNERED]: {
    IconComponent: O.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
    backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
  },
  [E.Q.COMMUNITY]: {
    IconComponent: R.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: m.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [E.Q.DISCOVERABLE]: {
    IconComponent: C.Z,
    foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
    backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
    premiumBackgroundColor: m.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [E.Q.CLAN]: {},
  [E.Q.NONE]: {}
};

function y(e) {
  let {
    guildTraits: t
  } = e;
  return (0, i.jsxs)("div", {
    className: M.tooltipPremiumFooterContainer,
    children: [(0, i.jsxs)("div", {
      className: o()(M.tooltipPremiumFooterSegment, M.tooltipPremiumFooterTierSegment),
      children: [(0, i.jsx)(p.Z, {
        width: 18,
        height: 18,
        className: M.gemIcon
      }), (0, i.jsx)(_.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: N.nW(t.premiumTier)
      })]
    }), (0, i.jsx)("div", {
      className: o()(M.tooltipPremiumFooterSegment),
      children: (0, i.jsx)(_.Text, {
        variant: "text-xs/semibold",
        color: "always-white",
        children: D.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
          count: t.premiumSubscriberCount
        })
      })
    })]
  })
}

function U(e) {
  let {
    badgeType: t,
    guildTraits: n
  } = e, {
    tooltipTitle: r,
    tooltipSubtitle: s,
    tooltipDescription: o
  } = function(e, t) {
    let n = t === I.PZ.PUBLIC ? D.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : D.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
    switch (e) {
      case E.Q.STAFF:
        return {
          tooltipTitle: D.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: D.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: D.Z.Messages.INTERNAL_EMPLOYEE_ONLY
        };
      case E.Q.VERIFIED:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.Z.Messages.GUILD_VERIFIED, tooltipDescription: n
        };
      case E.Q.PARTNERED:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.Z.Messages.GUILD_PARTNERED, tooltipDescription: n
        };
      case E.Q.VERIFIED_AND_PARTNERED:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: n
        };
      case E.Q.COMMUNITY:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: D.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
        };
      case E.Q.DISCOVERABLE:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: D.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
        };
      case E.Q.CLAN:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_CLAN, tooltipDescription: D.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
        };
      default:
        return {
          tooltipTitle: D.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
        }
    }
  }(t, n.visibility);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: M.tooltipBodyContainer,
      children: [(0, i.jsx)(_.Text, {
        color: "interactive-active",
        variant: "text-xs/bold",
        children: r
      }), null != s ? (0, i.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: s
      }) : null, null != o ? (0, i.jsx)(_.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: o
      }) : null]
    }), n.premium ? (0, i.jsx)(y, {
      guildTraits: n
    }) : null]
  })
}

function b(e) {
  let t, n, {
      guild: s,
      tooltipColor: l = _.Tooltip.Colors.BRAND,
      tooltipPosition: N,
      className: m,
      flowerStarClassName: O,
      iconClassName: R,
      badgeStrokeColor: C,
      badgeColor: p,
      size: g = 16,
      disableBoostClick: L,
      "aria-label": D = !1
    } = e,
    y = (0, a.e7)([f.default, S.ZP], () => {
      let e = f.default.getCurrentUser();
      return S.ZP.isMember(null == s ? void 0 : s.id, null == e ? void 0 : e.id)
    }),
    b = (0, a.e7)([h.Z], () => h.Z.theme),
    G = (0, I.XX)(s),
    w = (0, E.i)(G),
    k = r.useCallback(e => {
      G.premium && y && !L && (e.stopPropagation(), e.preventDefault(), (0, T.f)({
        guildId: s.id,
        location: {
          section: v.jXE.GUILD_HEADER,
          object: v.qAy.BOOST_GEM_ICON
        }
      }))
    }, [G.premium, y, L, s.id]);
  if (w === E.Q.NONE) return null;
  if (w === E.Q.CLAN) {
    var B;
    let e = (0, d.ky)(s.id, null === (B = s.clan) || void 0 === B ? void 0 : B.badge, g);
    return (0, i.jsx)(_.Tooltip, {
      color: l,
      position: N,
      "aria-label": D,
      text: (0, i.jsx)(U, {
        badgeType: w,
        guildTraits: G
      }),
      tooltipContentClassName: M.tooltipRemovePadding,
      children: t => (0, i.jsx)(_.Clickable, {
        ...t,
        onClick: k,
        className: o()(M.clanBadgeContainer, m),
        children: (0, i.jsx)(c.KQ, {
          src: e,
          size: g
        })
      })
    })
  }
  let {
    IconComponent: x,
    backgroundDarkColor: V,
    backgroundLightColor: Z,
    foregroundDarkColor: H,
    foregroundLightColor: F,
    premiumBackgroundColor: Y,
    premiumForegroundColor: j
  } = P[w];
  if (null == x) return null;
  G.premium && (t = j, n = Y);
  let W = (0, u.wj)(b) ? H : F,
    K = (0, u.wj)(b) ? V : Z;
  return t = null != t ? t : W, n = null != n ? n : K, (0, i.jsx)(_.Tooltip, {
    color: l,
    position: N,
    "aria-label": D,
    text: (0, i.jsx)(U, {
      badgeType: w,
      guildTraits: G
    }),
    tooltipContentClassName: M.tooltipRemovePadding,
    children: e => (0, i.jsx)(_.Clickable, {
      onClick: k,
      children: (0, i.jsx)(A.Z, {
        ...e,
        className: m,
        flowerStarClassName: O,
        color: null != n ? n : p,
        stroke: C,
        size: g,
        children: (0, i.jsx)(x, {
          className: R,
          color: t
        })
      })
    })
  })
}