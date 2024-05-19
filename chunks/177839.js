"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("399606"),
  o = s("481060"),
  u = s("607070"),
  d = s("100527"),
  c = s("906732"),
  _ = s("66595"),
  E = s("535322"),
  T = s("477734"),
  I = s("86813"),
  R = s("826026"),
  f = s("626135"),
  S = s("881100"),
  m = s("474936"),
  A = s("981631"),
  N = s("689938"),
  p = s("35962");
let g = (e, t) => t === m.PremiumTypes.TIER_0 ? N.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  C = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: p.customButton,
      children: [t ? N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(R.default, {
        className: p.arrow
      }) : (0, a.jsx)(I.default, {
        className: p.arrow
      })]
    })
  },
  P = e => {
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
      analyticsLocations: R
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: R,
      children: (0, a.jsxs)("div", {
        className: n()(p.perkCard, r),
        children: [T ? (0, a.jsx)(E.default, {
          className: p.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, a.jsx)(_.default, {
          className: p.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: n()(l, p.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: p.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: p.perkCardDescription,
            children: "function" == typeof s ? s(R) : s
          })]
        })]
      })
    })
  };
t.default = e => {
  let t, {
      className: s,
      selectedPremiumType: i,
      isSubscriberNitroHome: d = !1
    } = e,
    [_, E] = r.useState(!1),
    I = (0, S.usePerkCards)({
      styles: p,
      selectedPremiumType: i
    }),
    R = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: N
    } = (0, c.default)(),
    O = (0, T.useIsRemixANitroPerk)();
  return t = i !== m.PremiumTypes.TIER_0 ? [I.emoji, I.streaming, I.upload, I.customAppIcons, I.soundboard, O ? I.remix : I.videoBackground, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt] : [I.emoji, I.upload, I.customAppIcons, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt], (0, a.jsxs)("div", {
    className: n()(p.perksContainer, s, {
      [p.partiallyHidden]: d && !_,
      [p.subscriberNitroHome]: d,
      [p.reducedMotion]: R
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n()({
        [p.perksTitle]: null == i,
        [p.perksTitleStackedCards]: null != i
      }),
      children: g(d, i)
    }), (0, a.jsx)("div", {
      className: n()(p.perkCardContainer, {
        [p.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(P, {
        ...e
      }, e.title))
    }), d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n()({
          [p.sizeGizmo]: !_,
          [p.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(C, {
          onClick: () => {
            f.default.track(A.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: N,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: n()(p.cover, {
          [p.hidden]: _
        })
      })]
    })]
  })
}