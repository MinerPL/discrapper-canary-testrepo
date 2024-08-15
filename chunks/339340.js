t.r(n), t.d(n, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
return I;
  },
  default: function() {
return g;
  }
}), t(47120), t(757143);
var l = t(735250),
  i = t(470079),
  u = t(399606),
  r = t(343817),
  a = t(481060),
  o = t(787014),
  s = t(12498),
  d = t(541716),
  c = t(752305),
  E = t(893718),
  _ = t(600164),
  N = t(19780),
  f = t(626135),
  S = t(981631),
  T = t(689938),
  Z = t(764954);
let I = 'VoiceChannelStatusModal';

function g(e) {
  let {
channel: n,
transitionState: t,
onClose: g
  } = e, A = (0, u.e7)([s.Z], () => s.Z.getChannelStatus(n)), C = (0, u.e7)([N.Z], () => N.Z.getMediaSessionId()), [O, h] = i.useState(null != A ? A : ''), [v, M] = i.useState(!1), [L, m] = i.useState(null), U = O.length > 500;
  i.useEffect(() => {
f.default.track(S.rMx.OPEN_MODAL, {
  type: 'Voice Channel Topic Modal',
  guild_id: n.guild_id
});
  }, [n.guild_id]);
  let D = e => {
  m(new r.Hx(e, e.status).getAnyErrorMessage());
},
P = async e => {
  O === A && g(), null == e || e.preventDefault(), m(null), M(!0);
  let t = O.length,
    l = O.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
  try {
    let e = await o.ZP.updateVoiceChannelStatus(n.id, O);
    204 === e.status ? (f.default.track(S.rMx.VOICE_CHANNEL_TOPIC_SET, {
      guild_id: n.guild_id,
      channel_id: n.id,
      media_session_id: C,
      raw_length: t,
      text_length: l
    }), g()) : D(e);
  } catch (e) {
    D(e);
  }
  M(!1);
}, [p, V] = i.useState((0, c.JM)(O)), y = async () => (!U && !v && await P(), Promise.resolve({
  shouldClear: !1,
  shouldRefocus: !0
}));
  return (0, l.jsx)('form', {
onSubmit: P,
className: Z.form,
children: (0, l.jsxs)(a.ModalRoot, {
  transitionState: t,
  size: a.ModalSize.SMALL,
  children: [
    (0, l.jsxs)(a.ModalContent, {
      children: [
        (0, l.jsxs)(a.ModalHeader, {
          direction: _.Z.Direction.VERTICAL,
          className: Z.modalHeader,
          separator: !1,
          children: [
            (0, l.jsx)(a.ModalCloseButton, {
              className: Z.closeButton,
              onClick: g
            }),
            (0, l.jsx)('div', {
              className: Z.headerImage
            }),
            (0, l.jsx)(a.FormTitle, {
              tag: 'h1',
              className: Z.title,
              children: T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
            }),
            (0, l.jsx)(a.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
            })
          ]
        }),
        (0, l.jsxs)(a.FormSection, {
          className: Z.inputSection,
          title: T.Z.Messages.VOICE_CHANNEL_STATUS,
          children: [
            (0, l.jsx)(E.Z, {
              innerClassName: Z.textArea,
              textValue: O,
              richValue: p,
              placeholder: T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
                channelName: n.name
              }),
              focused: !0,
              channel: n,
              onChange: (e, n, t) => {
                h(n), V(t);
              },
              onSubmit: y,
              type: d.I.VOICE_CHANNEL_STATUS,
              canMentionRoles: !1,
              canMentionChannels: !1,
              allowNewLines: !1,
              parentModalKey: I,
              maxCharacterCount: 500,
              showRemainingCharsAfterCount: 250,
              emojiPickerCloseOnModalOuterClick: !0
            }),
            null != L ? (0, l.jsx)(a.FormErrorBlock, {
              className: Z.error,
              children: L
            }) : null
          ]
        })
      ]
    }),
    (0, l.jsxs)(a.ModalFooter, {
      justify: _.Z.Justify.BETWEEN,
      direction: _.Z.Direction.HORIZONTAL,
      children: [
        (0, l.jsx)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          onClick: g,
          children: T.Z.Messages.CANCEL
        }),
        (0, l.jsx)(a.Button, {
          onClick: P,
          submitting: v,
          className: Z.button,
          disabled: U,
          children: T.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })
      ]
    })
  ]
})
  });
}