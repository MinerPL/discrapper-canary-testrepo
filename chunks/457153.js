"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("718017"),
  r = n("481060"),
  o = n("497505"),
  u = n("685613"),
  d = n("340100"),
  c = n("644646"),
  f = n("898170"),
  E = n("689938"),
  h = n("336471");
t.default = function(e) {
  var t, s, _;
  let {
    className: C,
    expansionSpring: S,
    isExpanded: m,
    isExpansionAnimationComplete: p,
    quest: I,
    useReducedMotion: T
  } = e, g = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, A = (null !== (_ = null === (s = I.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds) && void 0 !== _ ? _ : 0) > 0;
  return (0, a.jsxs)(i.animated.div, {
    "aria-hidden": m && p,
    className: l()(C, h.contentCollapsed, {
      [h.contentCollapsedExpanded]: m,
      [h.contentCollapsedAccepted]: g
    }),
    style: {
      opacity: S.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsx)(f.QuestBarBackgroundAnimation, {
      className: h.background,
      animationClassName: h.backgroundAnimation,
      quest: I,
      useReducedMotion: T
    }), (0, a.jsx)("div", {
      className: h.contentCollapsedWrapper,
      children: g ? (0, a.jsxs)("div", {
        className: h.questProgressWrapper,
        children: [(0, a.jsx)(c.default, {
          className: h.questProgressRewardTile,
          quest: I,
          questContent: o.QuestContent.QUEST_BAR,
          autoplay: !1
        }), A ? (0, a.jsx)(d.default, {
          className: h.questProgressBar,
          quest: I
        }) : (0, a.jsx)(r.Text, {
          className: h.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: E.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: h.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: h.wreathIcon,
          src: n("896145")
        }), (0, a.jsx)(u.default, {
          className: h.partnerBranding,
          quest: I,
          withGameTile: !1
        }), (0, a.jsx)(r.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: h.questAvailable,
          children: E.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}