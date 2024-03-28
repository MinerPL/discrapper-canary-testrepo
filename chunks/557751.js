"use strict";
a.r(s), a.d(s, {
  default: function() {
    return o
  }
});
var t = a("735250");
a("470079");
var n = a("481060"),
  i = a("701488"),
  r = a("689938"),
  E = a("585634"),
  l = a("221886");

function o(e) {
  let {
    application: s,
    onCancel: a,
    onClose: o,
    onConfirm: d,
    ...c
  } = e;
  return (0, t.jsxs)(n.ModalRoot, {
    role: "alertdialog",
    transitionState: c.transitionState,
    className: E.modalRoot,
    children: [(0, t.jsx)("div", {
      className: E.birbContainer,
      children: (0, t.jsx)("img", {
        src: l,
        className: E.announcementBirb,
        alt: r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_ANNOUNCEMENT_BIRD_A11Y_LABEL
      })
    }), (0, t.jsxs)(n.ModalContent, {
      className: E.modalContent,
      children: [(0, t.jsx)(n.Text, {
        variant: "eyebrow",
        className: E.eyebrow,
        children: r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_HEADS_UP
      }), (0, t.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        className: E.header,
        children: r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_TITLE.format({
          activityName: s.name
        })
      }), (0, t.jsx)(n.Text, {
        variant: "text-sm/normal",
        className: E.subHeader,
        children: r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: E.buttonContainer,
        children: [(0, t.jsx)(n.Button, {
          size: n.Button.Sizes.LARGE,
          onClick: () => {
            d(), o()
          },
          children: r.default.Messages.CONTINUE
        }), (0, t.jsx)(n.Button, {
          size: n.Button.Sizes.LARGE,
          onClick: () => {
            a(), o()
          },
          color: n.Button.Colors.PRIMARY,
          children: r.default.Messages.CANCEL
        }), (0, t.jsx)(n.Text, {
          variant: "text-xs/normal",
          children: (0, t.jsx)(n.Anchor, {
            href: i.PRIVATE_APPS_HELP_ARTICLE,
            children: r.default.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_LEARN_MORE
          })
        })]
      })]
    })]
  })
}