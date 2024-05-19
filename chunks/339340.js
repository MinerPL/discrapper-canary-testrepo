"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return h
  },
  default: function() {
    return L
  }
}), n("47120"), n("757143");
var l = n("735250"),
  a = n("470079"),
  i = n("399606"),
  u = n("343817"),
  s = n("481060"),
  r = n("787014"),
  d = n("12498"),
  o = n("541716"),
  c = n("752305"),
  f = n("893718"),
  E = n("19780"),
  S = n("285952"),
  N = n("626135"),
  _ = n("981631"),
  g = n("689938"),
  C = n("287950");
let h = "VoiceChannelStatusModal";

function L(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: L
  } = e, T = (0, i.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), I = (0, i.useStateFromStores)([E.default], () => E.default.getMediaSessionId()), [v, m] = a.useState(null != T ? T : ""), [A, O] = a.useState(!1), [M, p] = a.useState(null), G = v.length > 500;
  a.useEffect(() => {
    N.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let U = e => {
      p(new u.APIError(e, e.status).getAnyErrorMessage())
    },
    x = async e => {
      v === T && L(), null == e || e.preventDefault(), p(null), O(!0);
      let n = v.length,
        l = v.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await r.default.updateVoiceChannelStatus(t.id, v);
        204 === e.status ? (N.default.track(_.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: t.guild_id,
          channel_id: t.id,
          media_session_id: I,
          raw_length: n,
          text_length: l
        }), L()) : U(e)
      } catch (e) {
        U(e)
      }
      O(!1)
    }, [y, F] = a.useState((0, c.toRichValue)(v)), V = async () => (!G && !A && await x(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: x,
    className: C.form,
    children: (0, l.jsxs)(s.ModalRoot, {
      transitionState: n,
      size: s.ModalSize.SMALL,
      children: [(0, l.jsxs)(s.ModalContent, {
        children: [(0, l.jsxs)(s.ModalHeader, {
          direction: S.default.Direction.VERTICAL,
          className: C.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(s.ModalCloseButton, {
            className: C.closeButton,
            onClick: L
          }), (0, l.jsx)("div", {
            className: C.headerImage
          }), (0, l.jsx)(s.FormTitle, {
            tag: "h1",
            className: C.title,
            children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(s.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(s.FormSection, {
          className: C.inputSection,
          title: g.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(f.default, {
            innerClassName: C.textArea,
            textValue: v,
            richValue: y,
            placeholder: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              m(t), F(n)
            },
            onSubmit: V,
            type: o.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: h,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != M ? (0, l.jsx)(s.FormErrorBlock, {
            className: C.error,
            children: M
          }) : null]
        })]
      }), (0, l.jsxs)(s.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        direction: S.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          onClick: L,
          children: g.default.Messages.CANCEL
        }), (0, l.jsx)(s.Button, {
          onClick: x,
          submitting: A,
          className: C.button,
          disabled: G,
          children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}