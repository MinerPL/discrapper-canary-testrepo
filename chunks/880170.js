"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("359499"),
  o = s("598739"),
  u = s("449881"),
  d = s("511143"),
  c = s("635650"),
  _ = s("270443"),
  E = s("955902"),
  T = s("583973"),
  I = e => {
    var t;
    let s, r, {
        title: I,
        titleClassName: f,
        perkImage: R,
        isCarousel: S,
        onCtaClick: m,
        perkComponent: N,
        subtitle: A = "",
        descriptionCta: p = "",
        cardVariant: C,
        subtitleClassName: g
      } = e,
      O = null != C ? o.CardVariantsInfo[C] : void 0,
      P = (0, l.useFreeBoostUserTenureReward)(),
      M = (null == P ? void 0 : P.nitroTenureStatus) === d.NitroRewardStatus.REDEEMABLE,
      h = null == P ? void 0 : P.nitroTenureStatus;
    switch (h) {
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
        className: n(c.cover, c.below)
      }), (0, a.jsx)(u.default, {
        title: I,
        shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        cardVariantStyleInfo: O,
        titleClassName: f,
        subtitle: A,
        subtitleClassName: g
      }), null != R && (0, a.jsx)("img", {
        src: R,
        alt: "",
        className: n({
          [c.cardImage]: !S,
          [c.carouselCardImage]: S
        })
      }), null != N && (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)("div", {
          className: c.cardIllustrationNoHover,
          children: [(0, a.jsx)("div", {
            className: c.cardComponent,
            children: N
          }), 0 !== p.length && null != m && (0, a.jsx)(i.Button, {
            disabled: !M,
            fullWidth: !0,
            onClick: m,
            children: (0, a.jsxs)("div", {
              className: null == O ? void 0 : null === (t = O.descriptionCta) || void 0 === t ? void 0 : t.className,
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