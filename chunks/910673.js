"use strict";
a.r(t);
var s = a("735250"),
  i = a("470079"),
  n = a("481060"),
  d = a("230711"),
  o = a("782568"),
  l = a("880257"),
  r = a("63063"),
  c = a("163268"),
  u = a("981631"),
  E = a("689938"),
  _ = a("707024"),
  M = a("444812");
t.default = e => {
  let {
    channelId: t,
    messageId: R,
    transitionState: T,
    onClose: C
  } = e, I = (0, l.default)(), A = i.useCallback(e => {
    (0, c.trackMediaRedactionAction)({
      action: e,
      channelId: t,
      messageId: R
    })
  }, [t, R]);
  return i.useEffect(() => {
    (0, c.trackMediaRedactionAction)({
      action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: t,
      messageId: R
    })
  }, [t, R]), (0, s.jsxs)(n.ModalRoot, {
    transitionState: T,
    "aria-label": E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
    children: [(0, s.jsx)(n.ModalHeader, {
      separator: !1,
      className: _.modalHeader,
      children: (0, s.jsx)("img", {
        src: M,
        alt: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
        className: _.headerImg
      })
    }), (0, s.jsxs)(n.ModalContent, {
      className: _.modalBody,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        className: _.modalInteriorHeader,
        children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
      }), (0, s.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: I ? E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
      }), (0, s.jsxs)("div", {
        className: _.buttonContainer,
        children: [I ? (0, s.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          onClick: function() {
            A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), d.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY), C()
          },
          fullWidth: !0,
          children: E.default.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
        }) : (0, s.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          onClick: () => {
            (0, o.default)(r.default.getArticleURL(u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION))
          },
          fullWidth: !0,
          children: E.default.Messages.LEARN_MORE
        }), (0, s.jsx)(n.Button, {
          color: n.Button.Colors.PRIMARY,
          onClick: function() {
            C(), A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
          },
          fullWidth: !0,
          children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
        }), (0, s.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
            handleFalsePositiveHook: () => {
              C(), A(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, n.openModalLazy)(async () => {
                let {
                  default: e
                } = await a("788679");
                return a => (0, s.jsx)(e, {
                  channelId: t,
                  messageId: R,
                  ...a
                })
              })
            }
          })
        })]
      })]
    })]
  })
}