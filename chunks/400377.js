"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("446674"),
  r = s("77078"),
  o = s("448881"),
  d = s("2973"),
  u = s("227231"),
  c = s("782340"),
  S = s("268479");
let E = (e, t, s) => s ? c.default.Messages.QUESTS_SHOW_CODE : e || t ? c.default.Messages.QUESTS_CLAIM_REWARD : c.default.Messages.QUESTS_ACCEPT,
  f = (e, t) => e ? c.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? c.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : c.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  T = e => {
    var t, n, l;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (l = e.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null ? () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: t
        } = await s.el("36170").then(s.bind(s, "36170"));
        return s => (0, a.jsx)(t, {
          ...s,
          quest: e
        })
      })
    } : () => {
      (0, o.enrollInQuest)(e.id)
    }
  },
  m = e => {
    let {
      streamProgress: t,
      streamDurationRequirement: s,
      isQuestComplete: n
    } = e, i = Math.min(Math.floor((void 0 !== t ? t / 60 : 0) / s * 100), 100);
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: l(S.progressPercent, {
          [S.progressPercentInnerInProgress]: !n,
          [S.progressPercentInnerComplete]: n
        }),
        style: {
          left: "".concat(i - (0 === i ? 0 : 100 === i ? 6 : 5), "%")
        },
        children: "".concat(i, "%")
      }), (0, a.jsx)("div", {
        className: S.progressBarContainer,
        children: (0, a.jsx)("div", {
          className: S.progressBarOuter,
          children: (0, a.jsx)("div", {
            className: l(S.progressBarInner, {
              [S.progressBarInnerInProgress]: !n,
              [S.progressBarInnerComplete]: n
            }),
            style: {
              width: "".concat(i, "%")
            }
          })
        })
      })]
    })
  };
var _ = e => {
  var t, s, n, l, o;
  let {
    quest: _
  } = e, g = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, h = (null === (s = _.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, I = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, N = h && !I, p = h ? r.ButtonColors.BRAND_NEW : r.ButtonColors.GREEN, C = E(g, h, I), A = f(g, h), O = T(_), x = h && !g, R = (0, i.useStateFromStores)([d.default], () => d.default.isEnrolling(_.id));
  return (0, a.jsxs)("div", {
    className: S.outerContainer,
    children: [(0, a.jsx)("img", {
      src: (0, u.getRewardAssetUrl)(_.id),
      alt: "",
      className: S.questReward
    }), (0, a.jsxs)("div", {
      className: S.innerContainer,
      children: [(0, a.jsxs)("div", {
        className: S.questCopyCta,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(r.Text, {
            variant: "text-lg/medium",
            className: S.taskInstructions,
            children: c.default.Messages.QUESTS_STREAM_TASK.format({
              minutes: _.config.streamDurationRequirementMinutes,
              gameTitle: _.config.messages.gameTitle
            })
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: c.default.Messages.QUEST_REWARD.format({
              reward: _.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(r.TooltipContainer, {
          text: A,
          className: S.questCta,
          tooltipContentClassName: S.ctaTooltipCopy,
          shouldShow: !I,
          children: (0, a.jsx)(r.Button, {
            color: p,
            disabled: x,
            submitting: R,
            onClick: O,
            children: C
          })
        })]
      }), N && (0, a.jsx)(m, {
        streamProgress: null === (l = _.userStatus) || void 0 === l ? void 0 : l.streamProgressSeconds,
        streamDurationRequirement: _.config.streamDurationRequirementMinutes,
        isQuestComplete: (null === (o = _.userStatus) || void 0 === o ? void 0 : o.completedAt) != null
      })]
    })]
  })
}