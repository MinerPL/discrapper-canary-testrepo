"use strict";
t.r(a), t.d(a, {
  default: function() {
    return c
  }
});
var l = t("735250");
t("470079");
var s = t("481060"),
  n = t("626135"),
  i = t("39604"),
  d = t("981631"),
  o = t("689938"),
  r = t("963131");

function c(e) {
  let {
    transitionState: a,
    onClose: t,
    onBeforeDelete: c,
    onAfterDelete: u,
    clip: _
  } = e;
  return (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.SMALL,
    transitionState: a,
    className: r.__invalid_modal,
    children: [(0, l.jsxs)(s.ModalContent, {
      className: r.modalContent,
      children: [(0, l.jsxs)("div", {
        className: r.header,
        children: [(0, l.jsx)(s.Heading, {
          className: r.__invalid_title,
          variant: "text-md/semibold",
          color: "header-primary",
          children: o.default.Messages.CLIPS_DELETE_MODAL_TITLE
        }), (0, l.jsx)(s.ModalCloseButton, {
          onClick: t
        })]
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: r.__invalid_body,
        children: o.default.Messages.CLIPS_DELETE_MODAL_SUBTITLE
      })]
    }), (0, l.jsx)(s.ModalFooter, {
      children: (0, l.jsx)(s.Button, {
        color: s.Button.Colors.RED,
        onClick: function() {
          null == c || c(), i.deleteClip(_.filepath), u(), n.default.track(d.AnalyticEvents.CLIP_DELETED)
        },
        children: o.default.Messages.CLIPS_DELETE_CLIP
      })
    })]
  })
}