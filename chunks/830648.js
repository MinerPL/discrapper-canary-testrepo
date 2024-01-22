"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("65597"),
  u = s("77078"),
  o = s("206230"),
  d = s("812204"),
  c = s("685665"),
  _ = s("516322"),
  E = s("441413"),
  I = s("238956"),
  f = s("837899"),
  T = s("425190"),
  S = s("599110"),
  R = s("331358"),
  m = s("49111"),
  p = s("782340"),
  N = s("305224");
let g = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(u.Clickable, {
      onClick: s,
      className: N.customButton,
      children: [t ? p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(T.default, {
        className: N.arrow
      }) : (0, a.jsx)(f.default, {
        className: N.arrow
      })]
    })
  },
  A = e => {
    let {
      title: t,
      description: s,
      className: n,
      imageSource: l,
      imageClassName: i,
      titleBadge: o,
      isNew: I = !1,
      isEarlyAccess: f = !1
    } = e, {
      AnalyticsLocationProvider: T,
      analyticsLocations: S
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(T, {
      children: (0, a.jsxs)("div", {
        className: r(N.perkCard, n),
        children: [I ? (0, a.jsx)(E.default, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, f ? (0, a.jsx)(_.default, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: l,
          alt: "",
          className: r(i, N.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(u.Heading, {
            variant: "heading-lg/extrabold",
            className: N.perkCardHeading,
            children: [t, " ", o]
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: N.perkCardDescription,
            children: "function" == typeof s ? s(S) : s
          })]
        })]
      })
    })
  };
var P = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [l, d] = n.useState(!1), _ = (0, R.usePerkCards)({
    styles: N
  }), E = (0, i.default)([o.default], () => o.default.useReducedMotion), {
    analyticsLocations: f
  } = (0, c.default)(), T = (0, I.useIsRemixANitroPerk)(), P = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, T ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
  return (0, a.jsxs)("div", {
    className: r(N.perksContainer, t, {
      [N.partiallyHidden]: s && !l,
      [N.subscriberNitroHome]: s,
      [N.reducedMotion]: E
    }),
    children: [(0, a.jsx)(u.Heading, {
      variant: "heading-xxl/extrabold",
      className: N.perksTitle,
      children: s ? p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE
    }), (0, a.jsx)("div", {
      className: r(N.perkCardContainer, {
        [N.perkCardContainerExpanded]: l
      }),
      children: P.map(e => null != e && (0, a.jsx)(A, {
        ...e
      }, e.title))
    }), s && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: r({
          [N.sizeGizmo]: !l,
          [N.sizeGizmoExpanded]: l
        }),
        children: (0, a.jsx)(g, {
          onClick: () => {
            S.default.track(m.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: f,
              was_expanded: l
            }), d(!l)
          },
          isShowingAll: l
        })
      }), (0, a.jsx)("div", {
        className: r(N.cover, {
          [N.hidden]: l
        })
      })]
    })]
  })
}