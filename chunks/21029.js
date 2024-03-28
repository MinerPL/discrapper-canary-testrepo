"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("272008"),
  i = n("340747");
t.default = e => {
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