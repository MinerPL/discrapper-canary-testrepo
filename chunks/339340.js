"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return v
  },
  default: function() {
    return m
  }
}), n("47120"), n("757143");
var l = n("735250"),
  u = n("470079"),
  a = n("399606"),
  i = n("481060"),
  r = n("787014"),
  s = n("12498"),
  d = n("541716"),
  o = n("752305"),
  c = n("893718"),
  f = n("19780"),
  E = n("285952"),
  C = n("626135"),
  S = n("981631"),
  h = n("689938"),
  N = n("33129");
let v = "VoiceChannelStatusModal";

function m(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: m
  } = e, _ = (0, a.useStateFromStores)([s.default], () => s.default.getChannelStatus(t)), T = (0, a.useStateFromStores)([f.default], () => f.default.getMediaSessionId()), [I, g] = u.useState(null != _ ? _ : ""), [p, A] = u.useState(!1), [L, O] = u.useState(null);
  u.useEffect(() => {
    C.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let V = async e => {
    I === _ && m(), null == e || e.preventDefault(), O(null), A(!0);
    let n = I.length,
      l = I.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
    await r.default.updateVoiceChannelStatus(t.id, I).then(e => {
      204 === e.status ? (C.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
        guild_id: t.guild_id,
        channel_id: t.id,
        media_session_id: T,
        raw_length: n,
        text_length: l
      }), m()) : O(e.body.message)
    }, e => {
      O(e.body.message)
    }), A(!1)
  }, [M, x] = u.useState((0, o.toRichValue)(I));
  return (0, l.jsx)("form", {
    onSubmit: V,
    className: N.form,
    children: (0, l.jsxs)(i.ModalRoot, {
      transitionState: n,
      size: i.ModalSize.SMALL,
      children: [(0, l.jsxs)(i.ModalContent, {
        children: [(0, l.jsxs)(i.ModalHeader, {
          direction: E.default.Direction.VERTICAL,
          className: N.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(i.ModalCloseButton, {
            className: N.closeButton,
            onClick: m
          }), (0, l.jsx)("div", {
            className: N.headerImage
          }), (0, l.jsx)(i.FormTitle, {
            tag: "h1",
            className: N.title,
            children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(i.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(i.FormSection, {
          className: N.inputSection,
          title: h.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(c.default, {
            innerClassName: N.textArea,
            textValue: I,
            richValue: M,
            placeholder: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              g(t), x(n)
            },
            onSubmit: () => (V(), Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !0
            })),
            type: d.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: v,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != L ? (0, l.jsx)(i.FormErrorBlock, {
            className: N.error,
            children: L
          }) : null]
        })]
      }), (0, l.jsxs)(i.ModalFooter, {
        justify: E.default.Justify.BETWEEN,
        direction: E.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          onClick: m,
          children: h.default.Messages.CANCEL
        }), (0, l.jsx)(i.Button, {
          onClick: V,
          submitting: p,
          className: N.button,
          disabled: I.length > 500,
          children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}