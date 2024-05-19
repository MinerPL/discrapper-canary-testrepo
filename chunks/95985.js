"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("497505"),
  r = n("918701"),
  o = n("644646"),
  u = n("472144"),
  d = n("569379"),
  c = n("743294"),
  f = n("481900");
t.default = e => {
  let {
    quest: t,
    progressBarRef: n,
    isExpanded: E
  } = e, h = s.useMemo(() => (0, r.calculatePercentComplete)(t), [t]), _ = h > 0 ? c.HAS_PROGRESS_COLORS : c.NO_PROGRESS_COLORS, C = (0, d.useQuestBarTitle)(t), m = (0, d.useQuestBarSubtitle)(t, E);
  return (0, a.jsxs)("div", {
    className: f.questProgressWrapper,
    children: [(0, a.jsx)(u.default, {
      percentComplete: h,
      size: 42,
      strokeWidth: 3,
      progressBarBackgroundTop: _.backgroundTop,
      progressBarBackgroundBottom: _.backgroundBottom,
      progressBarForeground: _.foreground,
      glowColor: _.glow,
      progressBarRef: n,
      children: (0, a.jsx)(o.default, {
        className: f.questProgressRewardTile,
        quest: t,
        questContent: i.QuestContent.QUEST_BAR,
        autoplay: !1
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        className: f.questProgressHint,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: C
      }), (0, a.jsx)(l.Text, {
        className: f.questProgressHint,
        color: "text-muted",
        variant: "text-xs/normal",
        children: m
      })]
    })]
  })
}