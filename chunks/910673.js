"use strict";
a.r(t);
var s = a("735250"),
  i = a("470079"),
  n = a("481060"),
  o = a("230711"),
  l = a("782568"),
  d = a("880257"),
  r = a("63063"),
  c = a("163268"),
  u = a("981631"),
  E = a("526761"),
  _ = a("689938"),
  M = a("841905"),
  R = a("444812");
t.default = e => {
  let {
    channelId: t,
    messageId: T,
    transitionState: I,
    onClose: C
  } = e, A = (0, d.default)(), f = i.useCallback(e => {
    (0, c.trackMediaRedactionAction)({
      action: e,
      channelId: t,
      messageId: T
    })
  }, [t, T]);
  return i.useEffect(() => {
    (0, c.trackMediaRedactionAction)({
      action: c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: t,
      messageId: T
    })
  }, [t, T]), (0, s.jsxs)(n.ModalRoot, {
    transitionState: I,
    "aria-label": _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
    children: [(0, s.jsx)(n.ModalHeader, {
      separator: !1,
      className: M.modalHeader,
      children: (0, s.jsx)("img", {
        src: R,
        alt: _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
        className: M.headerImg
      })
    }), (0, s.jsxs)(n.ModalContent, {
      className: M.modalBody,
      children: [(0, s.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        className: M.modalInteriorHeader,
        children: _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
      }), (0, s.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A ? _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
      }), (0, s.jsxs)("div", {
        className: M.buttonContainer,
        children: [A ? (0, s.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          onClick: function() {
            f(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), o.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY, null, {
              scrollPosition: E.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
            }), C()
          },
          fullWidth: !0,
          children: _.default.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
        }) : (0, s.jsx)(n.Button, {
          color: n.Button.Colors.BRAND,
          onClick: () => {
            (0, l.default)(r.default.getArticleURL(u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION))
          },
          fullWidth: !0,
          children: _.default.Messages.LEARN_MORE
        }), (0, s.jsx)(n.Button, {
          color: n.Button.Colors.PRIMARY,
          onClick: function() {
            C(), f(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
          },
          fullWidth: !0,
          children: _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
        }), (0, s.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: _.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
            handleFalsePositiveHook: () => {
              C(), f(c.TrackMediaRedactionActionType.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, n.openModalLazy)(async () => {
                let {
                  default: e
                } = await a("788679");
                return a => (0, s.jsx)(e, {
                  channelId: t,
                  messageId: T,
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