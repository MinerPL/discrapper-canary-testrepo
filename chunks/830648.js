"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("65597"),
  o = s("77078"),
  u = s("206230"),
  d = s("812204"),
  c = s("685665"),
  _ = s("516322"),
  E = s("441413"),
  T = s("238956"),
  I = s("837899"),
  f = s("425190"),
  S = s("599110"),
  R = s("331358"),
  m = s("646718"),
  A = s("49111"),
  N = s("782340"),
  p = s("101662");
let C = (e, t) => t === m.PremiumTypes.TIER_0 ? N.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  g = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: p.customButton,
      children: [t ? N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: p.arrow
      }) : (0, a.jsx)(I.default, {
        className: p.arrow
      })]
    })
  },
  O = e => {
    let {
      title: t,
      description: s,
      className: r,
      imageSource: i,
      imageClassName: l,
      titleBadge: u,
      isNew: T = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: f
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: f,
      children: (0, a.jsxs)("div", {
        className: n(p.perkCard, r),
        children: [T ? (0, a.jsx)(E.default, {
          className: p.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, a.jsx)(_.default, {
          className: p.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: n(l, p.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: p.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: p.perkCardDescription,
            children: "function" == typeof s ? s(f) : s
          })]
        })]
      })
    })
  };
var P = e => {
  let t, {
      className: s,
      selectedPremiumType: i,
      isSubscriberNitroHome: d = !1
    } = e,
    [_, E] = r.useState(!1),
    I = (0, R.usePerkCards)({
      styles: p,
      selectedPremiumType: i
    }),
    f = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: N
    } = (0, c.default)(),
    P = (0, T.useIsRemixANitroPerk)();
  return t = i !== m.PremiumTypes.TIER_0 ? [I.emoji, I.streaming, I.upload, I.customAppIcons, I.soundboard, P ? I.remix : I.videoBackground, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt] : [I.emoji, I.upload, I.customAppIcons, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt], (0, a.jsxs)("div", {
    className: n(p.perksContainer, s, {
      [p.partiallyHidden]: d && !_,
      [p.subscriberNitroHome]: d,
      [p.reducedMotion]: f
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n({
        [p.perksTitle]: null == i,
        [p.perksTitleStackedCards]: null != i
      }),
      children: C(d, i)
    }), (0, a.jsx)("div", {
      className: n(p.perkCardContainer, {
        [p.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(O, {
        ...e
      }, e.title))
    }), d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n({
          [p.sizeGizmo]: !_,
          [p.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(g, {
          onClick: () => {
            S.default.track(A.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: N,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: n(p.cover, {
          [p.hidden]: _
        })
      })]
    })]
  })
}