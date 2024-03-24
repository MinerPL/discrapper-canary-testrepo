"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("448881"),
  i = n("473603"),
  r = e => {
    let {
      quest: t
    } = e;
    return t.preview ? (0, s.jsxs)("div", {
      className: i.questControls,
      children: [(0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        className: i.questControlsTitle,
        children: "Preview Controls:"
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: () => {
          (0, a.resetQuestDismissibilityStatus)(t.id)
        },
        children: "Reset Dismissibility"
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: () => {
          (0, a.resetQuestPreviewStatus)(t.id)
        },
        children: "Reset Enrollment"
      }), (0, s.jsx)(l.Button, {
        color: l.Button.Colors.PRIMARY,
        onClick: () => {
          (0, a.completeQuestPreview)(t.id)
        },
        children: "Complete Quest"
      })]
    }) : null
  }