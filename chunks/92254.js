"use strict";
t.r(a), t.d(a, {
  default: function() {
    return C
  }
}), t("47120");
var s = t("735250"),
  i = t("470079"),
  o = t("803997"),
  l = t.n(o),
  n = t("481060"),
  d = t("153124"),
  r = t("309081"),
  u = t("35463"),
  m = t("489887"),
  c = t("689938"),
  h = t("123621");
let L = (0, d.uid)();

function C(e) {
  var a;
  let {
    channelId: t,
    answer: o,
    onSave: d,
    transitionState: C,
    onClose: E
  } = e, {
    emoji: x,
    hasUpload: M,
    upload: j,
    mediaUrl: T,
    mediaFilename: g
  } = (0, u.default)({
    channelId: t,
    localCreationAnswerId: o.localCreationAnswerId,
    image: o.image
  }), [A, I] = i.useState(null !== (a = null == j ? void 0 : j.description) && void 0 !== a ? a : "");
  return (0, s.jsxs)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    className: l()(h.modal, {
      [h.hasImage]: M,
      [h.hasEmoji]: null != x
    }),
    transitionState: C,
    "aria-label": c.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
    children: [(0, s.jsx)(r.PollCreationMediaPreview, {
      hasUpload: M,
      mediaUrl: T,
      mediaFilename: g,
      imageClassName: h.imagePreview,
      emoji: x,
      emojiClassName: h.emojiPreview
    }), (0, s.jsxs)(n.ModalContent, {
      className: h.content,
      children: [(0, s.jsx)(n.FormTitle, {
        tag: n.FormTitleTags.LABEL,
        htmlFor: L,
        children: c.default.Messages.CREATE_POLL_ALT_TEXT_LABEL
      }), (0, s.jsx)(n.TextInput, {
        id: L,
        value: A,
        inputClassName: h.input,
        onChange: I,
        maxLength: m.MAX_POLL_ANSWER_LENGTH,
        autoFocus: !0
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: h.footer,
      children: [(0, s.jsx)(n.Button, {
        look: n.ButtonLooks.FILLED,
        size: n.Button.Sizes.MEDIUM,
        onClick: () => {
          null != A && d(A), E()
        },
        children: (0, s.jsx)(n.Text, {
          variant: "text-md/semibold",
          children: c.default.Messages.SAVE
        })
      }), (0, s.jsx)(n.Button, {
        look: n.ButtonLooks.LINK,
        size: n.Button.Sizes.MEDIUM,
        onClick: E,
        children: (0, s.jsx)(n.Text, {
          variant: "text-md/semibold",
          children: c.default.Messages.CANCEL
        })
      })]
    })]
  })
}