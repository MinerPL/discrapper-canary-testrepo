"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("718017"),
  r = n("481060"),
  o = n("918701"),
  u = n("685613"),
  d = n("340100"),
  c = n("78826"),
  f = n("689938"),
  E = n("603961");
t.default = function(e) {
  var t, n, s;
  let {
    className: h,
    expansionSpring: _,
    isExpanded: C,
    isExpansionAnimationComplete: m,
    quest: S
  } = e, I = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = (null !== (s = null === (n = S.userStatus) || void 0 === n ? void 0 : n.streamProgressSeconds) && void 0 !== s ? s : 0) > 0;
  return (0, a.jsx)(i.animated.div, {
    "aria-hidden": C && m,
    className: l()(h, E.contentCollapsed, {
      [E.contentCollapsedAccepted]: I
    }),
    style: {
      opacity: _.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: I ? (0, a.jsxs)("div", {
      className: E.questProgressWrapper,
      children: [(0, a.jsx)(c.QuestsAsset, {
        id: "QuestsBarContentCollapsed_rewardTile",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: S.config.messages.rewardName,
          className: E.questProgressRewardTile,
          src: (0, o.getRewardAssetUrl)(S)
        })
      }), p ? (0, a.jsx)(d.default, {
        className: E.questProgressBar,
        quest: S
      }) : (0, a.jsx)(r.Text, {
        className: E.questProgressHint,
        color: "always-white",
        variant: "text-sm/semibold",
        children: f.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
      })]
    }) : (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: E.brandingWrapper,
        children: [(0, a.jsx)(u.default, {
          className: E.partnerBranding,
          quest: S
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: E.questName,
          children: f.default.Messages.QUEST.format({
            questName: S.config.messages.questName
          })
        })]
      })
    })
  })
}