n.r(t), n.d(t, {
  default: function() {
return h;
  }
}), n(47120);
var o = n(735250),
  l = n(470079),
  s = n(442837),
  a = n(481060),
  i = n(596454),
  d = n(907040),
  u = n(339085),
  r = n(592125),
  m = n(944486),
  c = n(594174),
  j = n(401227),
  x = n(74538),
  S = n(906605),
  _ = n(106301),
  T = n(505905),
  p = n(185923),
  v = n(689938),
  C = n(201885);

function I(e) {
  let {
customStatusEmoji: t,
setCustomStatusEmoji: n,
onClose: l
  } = e, u = (0, s.e7)([
m.Z,
r.Z
  ], () => r.Z.getChannel(m.Z.getVoiceChannelId())), c = e => {
var t;
if (null == e) {
  n(null);
  return;
}
n(null != e.id ? {
  id: e.id,
  name: e.name,
  animated: e.animated
} : {
  id: null,
  name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : '',
  animated: !1
});
  };
  return (0, o.jsx)(a.Popout, {
renderPopout: e => {
  var t;
  let {
    closePopout: n
  } = e;
  return (0, o.jsx)(d.Z, {
    channel: u,
    guildId: null !== (t = null == u ? void 0 : u.guild_id) && void 0 !== t ? t : void 0,
    closePopout: n,
    onSelectEmoji: (e, t) => {
      c(e), t && n();
    },
    pickerIntention: p.Hz.STATUS,
    onNavigateAway: l
  });
},
position: 'left',
animation: a.Popout.Animation.NONE,
align: 'top',
children: (e, n) => {
  let {
    isShown: l
  } = n;
  return (0, o.jsx)(j.Z, {
    ...e,
    active: l,
    className: C.emojiButton,
    tabIndex: 0,
    renderButtonContents: null == t ? null : () => (0, o.jsx)(i.Z, {
      className: C.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: !!t.animated
    })
  });
}
  });
}

function h(e) {
  var t, n;
  let {
transitionState: s,
onClose: i,
startingText: d,
startingEmoji: r
  } = e, m = _.Z.getCustomHangStatus(), j = null != d ? d : null !== (t = null == m ? void 0 : m.status) && void 0 !== t ? t : '', p = null !== (n = null == m ? void 0 : m.emoji) && void 0 !== n ? n : null;
  (null == r ? void 0 : r.id) != null ? p = x.ZP.canUseEmojisEverywhere(c.default.getCurrentUser()) && null != u.Z.getUsableCustomEmojiById(r.id) ? r : null : (null == r ? void 0 : r.name) != null && (p = r);
  let [h, g] = l.useState(j), [N, A] = l.useState(p);
  return (0, o.jsxs)(a.ModalRoot, {
className: C.modal,
transitionState: s,
size: a.ModalSize.DYNAMIC,
children: [
  (0, o.jsxs)(a.ModalContent, {
    className: C.modalContent,
    children: [
      (0, o.jsx)(a.Button, {
        'aria-label': v.Z.Messages.CLOSE,
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        onClick: i,
        className: C.closeButton,
        children: (0, o.jsx)(a.CloseSmallIcon, {
          size: 'xs',
          color: 'currentColor',
          className: C.closeIcon
        })
      }),
      (0, o.jsx)(I, {
        customStatusEmoji: N,
        setCustomStatusEmoji: A,
        onClose: i
      }),
      (0, o.jsxs)('div', {
        className: C.customInputGroup,
        children: [
          (0, o.jsx)(a.Text, {
            className: C.leadInText,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: v.Z.Messages.STATUS_LEAD_IN_JUST
          }),
          (0, o.jsx)(a.TextInput, {
            className: C.customInput,
            value: h,
            onChange: e => g(e.substring(0, T.s)),
            placeholder: v.Z.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
          })
        ]
      })
    ]
  }),
  (0, o.jsxs)(a.ModalFooter, {
    className: C.modalFooter,
    children: [
      (0, o.jsxs)('div', {
        children: [
          (0, o.jsx)(a.Heading, {
            variant: 'heading-md/semibold',
            children: v.Z.Messages.SET_STATUS_MODAL_TITLE
          }),
          (0, o.jsx)(a.Text, {
            color: 'text-muted',
            variant: 'text-sm/normal',
            children: v.Z.Messages.SET_STATUS_MODAL_SUBTITLE
          })
        ]
      }),
      (0, o.jsx)(a.Button, {
        onClick: () => {
          let e = h.trim();
          '' !== e && null != N && ((0, S._s)(e, N, !0), i());
        },
        disabled: '' === h.trim() || null == N,
        children: v.Z.Messages.SET_STATUS_MODAL_CTA
      })
    ]
  })
]
  });
}