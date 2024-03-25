"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("448881"),
  i = n("473603"),
  r = e => {
    let {
      quest: t
    } = e;
    return t.preview ? (0, s.jsxs)("div", {
      className: i.questControls,
      children: [(0, s.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: i.questControlsTitle,
        children: "Preview Controls:"
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          (0, l.resetQuestDismissibilityStatus)(t.id)
        },
        children: "Reset Dismissibility"
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          (0, l.resetQuestPreviewStatus)(t.id)
        },
        children: "Reset Enrollment"
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          (0, l.completeQuestPreview)(t.id)
        },
        children: "Complete Quest"
      })]
    }) : null
  }