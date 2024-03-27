"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("146606"),
  r = n("77078"),
  o = n("227231"),
  u = n("555226"),
  d = n("315130"),
  c = n("782340"),
  f = n("368347"),
  E = function(e) {
    var t, n, s;
    let {
      className: E,
      expansionSpring: h,
      isExpanded: _,
      isExpansionAnimationComplete: C,
      quest: S
    } = e, I = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, m = (null !== (s = null === (n = S.userStatus) || void 0 === n ? void 0 : n.streamProgressSeconds) && void 0 !== s ? s : 0) > 0;
    return (0, a.jsx)(i.animated.div, {
      "aria-hidden": _ && C,
      className: l(E, f.contentCollapsed, {
        [f.contentCollapsedAccepted]: I
      }),
      style: {
        opacity: h.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      children: I ? (0, a.jsxs)("div", {
        className: f.questProgressWrapper,
        children: [(0, a.jsx)("img", {
          alt: S.config.messages.rewardName,
          className: f.questProgressRewardTile,
          src: (0, o.getRewardAssetUrl)(S.id)
        }), m ? (0, a.jsx)(d.default, {
          className: f.questProgressBar,
          quest: S
        }) : (0, a.jsx)(r.Text, {
          className: f.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: c.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)("div", {
          className: f.brandingWrapper,
          children: [(0, a.jsx)(u.default, {
            className: f.partnerBranding,
            quest: S
          }), (0, a.jsx)(r.Heading, {
            color: "always-white",
            variant: "heading-sm/medium",
            className: f.questName,
            children: c.default.Messages.QUEST.format({
              questName: S.config.messages.questName
            })
          })]
        })
      })
    })
  }