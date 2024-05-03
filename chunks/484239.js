"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("314684"),
  o = s("176782"),
  u = s("743612"),
  d = s("735825"),
  c = s("58410"),
  _ = s("721239"),
  E = s("557634"),
  T = s("992429");
t.default = e => {
  var t;
  let s, r, {
      title: I,
      titleClassName: R,
      perkImage: f,
      isCarousel: S,
      onCtaClick: m,
      perkComponent: A,
      subtitle: N = "",
      descriptionCta: p = "",
      cardVariant: g,
      subtitleClassName: C
    } = e,
    P = (0, o.useCardVariantsInfo)(g),
    O = (0, l.useFreeBoostUserTenureReward)(),
    M = (null == O ? void 0 : O.nitroTenureStatus) === d.NitroRewardStatus.REDEEMABLE;
  switch (null == O ? void 0 : O.nitroTenureStatus) {
    case d.NitroRewardStatus.REDEEMABLE:
      s = T, r = "unlocked icon";
      break;
    case d.NitroRewardStatus.PENDING:
      s = _, r = "locked icon";
      break;
    case d.NitroRewardStatus.REDEEMED:
      s = E, r = "thumbs up icon";
      break;
    default:
      s = void 0, r = ""
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(c.cover, c.below)
    }), (0, a.jsx)(u.default, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: P,
      titleClassName: R,
      subtitle: N,
      subtitleClassName: C
    }), null != f && (0, a.jsx)("img", {
      src: f,
      alt: "",
      className: i()({
        [c.cardImage]: !S,
        [c.carouselCardImage]: S
      })
    }), null != A && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: c.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: c.cardComponent,
          children: A
        }), 0 !== p.length && null != m && (0, a.jsx)(n.Button, {
          disabled: !M,
          fullWidth: !0,
          onClick: m,
          children: (0, a.jsxs)("div", {
            className: null == P ? void 0 : null === (t = P.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, a.jsx)("img", {
              alt: r,
              src: s
            }), p]
          })
        })]
      })
    })]
  })
}