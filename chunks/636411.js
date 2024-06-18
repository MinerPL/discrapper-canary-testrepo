"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(607070),
  u = n(104494),
  _ = n(639119),
  d = n(165583),
  c = n(197115),
  E = n(465670),
  I = n(466111),
  T = n(810090),
  h = n(981631),
  S = n(474936),
  f = n(689938),
  N = n(884050);

function A(e) {
  var t, n;
  let {
    onDismiss: r
  } = e, A = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), m = f.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, O = (0, _.N)(), R = (0, u.Ng)(), C = (null == O ? void 0 : O.subscription_trial) != null || null != R, p = {
    object: h.qAy.BUTTON_CTA,
    section: h.jXE.SUPER_REACTION_PICKER
  };
  return (0, i.jsxs)("div", {
    className: N.wrapper,
    children: [(0, i.jsx)(a.Clickable, {
      onClick: r,
      className: N.closeButton,
      "aria-label": f.Z.Messages.DISMISS,
      children: (0, i.jsx)(E.Z, {
        width: 24,
        height: 24
      })
    }), (0, i.jsxs)("div", {
      className: N.content,
      children: [(0, i.jsx)("div", {
        className: N.contentFill,
        children: (0, i.jsx)(T.Z, {
          className: s()(N.banner, {
            [N.hasTrialOffer]: C
          }),
          src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
          loop: !0,
          autoPlay: !A,
          muted: !0,
          controls: !0
        })
      }), C ? (0, i.jsx)(d.ZP, {
        type: S.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : S.Si.TIER_2,
        headingText: f.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
        analyticsLocationObject: p,
        discountOffer: R,
        trialOffer: O,
        children: m
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: N.header,
          children: [(0, i.jsx)(I.Z, {
            className: N.nitroWheel,
            width: 32,
            height: 32
          }), (0, i.jsx)(a.Heading, {
            className: N.headerText,
            variant: "heading-xl/bold",
            children: f.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
          })]
        }), (0, i.jsx)(a.Text, {
          className: N.subheaderText,
          variant: "text-md/normal",
          children: m
        }), (0, i.jsx)("div", {
          className: N.ctaActionWrapper,
          children: (0, i.jsx)(c.Z, {
            subscriptionTier: S.Si.TIER_2,
            buttonText: f.Z.Messages.UNLOCK_WITH_NITRO
          })
        })]
      })]
    })]
  })
}