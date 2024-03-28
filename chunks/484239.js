"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("314684"),
  o = s("176782"),
  u = s("743612"),
  d = s("735825"),
  c = s("622481"),
  _ = s("721239"),
  E = s("557634"),
  T = s("992429");
t.default = e => {
  var t;
  let s, i, {
      title: I,
      titleClassName: R,
      perkImage: S,
      isCarousel: f,
      onCtaClick: m,
      perkComponent: N,
      subtitle: A = "",
      descriptionCta: p = "",
      cardVariant: C,
      subtitleClassName: g
    } = e,
    O = (0, o.useCardVariantsInfo)(C),
    P = (0, l.useFreeBoostUserTenureReward)(),
    M = (null == P ? void 0 : P.nitroTenureStatus) === d.NitroRewardStatus.REDEEMABLE;
  switch (null == P ? void 0 : P.nitroTenureStatus) {
    case d.NitroRewardStatus.REDEEMABLE:
      s = T, i = "unlocked icon";
      break;
    case d.NitroRewardStatus.PENDING:
      s = _, i = "locked icon";
      break;
    case d.NitroRewardStatus.REDEEMED:
      s = E, i = "thumbs up icon";
      break;
    default:
      s = void 0, i = ""
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: r()(c.cover, c.below)
    }), (0, a.jsx)(u.default, {
      title: I,
      shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
      cardVariantStyleInfo: O,
      titleClassName: R,
      subtitle: A,
      subtitleClassName: g
    }), null != S && (0, a.jsx)("img", {
      src: S,
      alt: "",
      className: r()({
        [c.cardImage]: !f,
        [c.carouselCardImage]: f
      })
    }), null != N && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: c.cardIllustrationNoHover,
        children: [(0, a.jsx)("div", {
          className: c.cardComponent,
          children: N
        }), 0 !== p.length && null != m && (0, a.jsx)(n.Button, {
          disabled: !M,
          fullWidth: !0,
          onClick: m,
          children: (0, a.jsxs)("div", {
            className: null == O ? void 0 : null === (t = O.descriptionCta) || void 0 === t ? void 0 : t.className,
            children: [(0, a.jsx)("img", {
              alt: i,
              src: s
            }), p]
          })
        })]
      })
    })]
  })
}