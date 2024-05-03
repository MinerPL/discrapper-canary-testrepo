"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return _
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
  d = n("12498"),
  s = n("541716"),
  o = n("752305"),
  c = n("893718"),
  f = n("19780"),
  E = n("285952"),
  S = n("626135"),
  C = n("981631"),
  N = n("689938"),
  h = n("407247");
let _ = "VoiceChannelStatusModal";

function m(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: m
  } = e, T = (0, a.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), v = (0, a.useStateFromStores)([f.default], () => f.default.getMediaSessionId()), [I, g] = u.useState(null != T ? T : ""), [A, L] = u.useState(!1), [p, O] = u.useState(null);
  u.useEffect(() => {
    S.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let M = async e => {
    I === T && m(), null == e || e.preventDefault(), O(null), L(!0);
    let n = I.length,
      l = I.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
    await r.default.updateVoiceChannelStatus(t.id, I).then(e => {
      204 === e.status ? (S.default.track(C.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
        guild_id: t.guild_id,
        channel_id: t.id,
        media_session_id: v,
        raw_length: n,
        text_length: l
      }), m()) : O(e.body.message)
    }, e => {
      O(e.body.message)
    }), L(!1)
  }, [y, G] = u.useState((0, o.toRichValue)(I));
  return (0, l.jsx)("form", {
    onSubmit: M,
    className: h.form,
    children: (0, l.jsxs)(i.ModalRoot, {
      transitionState: n,
      size: i.ModalSize.SMALL,
      children: [(0, l.jsxs)(i.ModalContent, {
        children: [(0, l.jsxs)(i.ModalHeader, {
          direction: E.default.Direction.VERTICAL,
          className: h.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(i.ModalCloseButton, {
            className: h.closeButton,
            onClick: m
          }), (0, l.jsx)("div", {
            className: h.headerImage
          }), (0, l.jsx)(i.FormTitle, {
            tag: "h1",
            className: h.title,
            children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(i.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(i.FormSection, {
          className: h.inputSection,
          title: N.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(c.default, {
            innerClassName: h.textArea,
            textValue: I,
            richValue: y,
            placeholder: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              g(t), G(n)
            },
            onSubmit: () => (M(), Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !0
            })),
            type: s.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: _,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != p ? (0, l.jsx)(i.FormErrorBlock, {
            className: h.error,
            children: p
          }) : null]
        })]
      }), (0, l.jsxs)(i.ModalFooter, {
        justify: E.default.Justify.BETWEEN,
        direction: E.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          onClick: m,
          children: N.default.Messages.CANCEL
        }), (0, l.jsx)(i.Button, {
          onClick: M,
          submitting: A,
          className: h.button,
          disabled: I.length > 500,
          children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}