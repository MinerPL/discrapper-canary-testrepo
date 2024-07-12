n.d(t, {
  DI: function() {
return f;
  },
  x3: function() {
return R;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(512722),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(596454),
  d = n(907040),
  u = n(339085),
  _ = n(633302),
  I = n(984933),
  E = n(401227),
  T = n(285952),
  m = n(474333),
  N = n(153124),
  S = n(691886),
  h = n(185923),
  g = n(689938),
  C = n(271820);

function x(e) {
  let {
guildId: t,
emojiData: n,
'aria-labelledby': i,
onSelectEmoji: r
  } = e, T = (0, l.e7)([u.Z], () => null != n.id ? u.Z.getCustomEmojiById(n.id) : void 0), m = (0, l.e7)([I.ZP], () => I.ZP.getDefaultChannel(t)), N = a.useCallback(e => {
let {
  closePopout: t
} = e;
return (0, s.jsx)(d.Z, {
  pickerIntention: h.Hz.GUILD_ROLE_BENEFIT_EMOJI,
  channel: m,
  closePopout: t,
  onNavigateAway: t,
  onSelectEmoji: (e, n) => {
    null != e && r(null != e.id ? {
      id: e.id,
      name: void 0
    } : {
      id: void 0,
      name: e.optionallyDiverseSequence
    }), n && t();
  }
});
  }, [
r,
m
  ]), S = a.useMemo(() => null == T && null == n.name ? null : function() {
return (0, s.jsx)(c.Z, {
  className: C.emoji,
  emojiId: n.id,
  emojiName: n.name,
  animated: null == T ? void 0 : T.animated
});
  }, [
n,
T
  ]), x = '';
  return null != T ? x = ':'.concat(T.name, ':') : null != n.name && (x = _.ZP.convertSurrogateToName(n.name)), (0, s.jsx)(o.Popout, {
animation: o.Popout.Animation.NONE,
position: 'top',
renderPopout: N,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, s.jsxs)('div', {
    className: C.emojiInputContainer,
    ...e,
    children: [
      (0, s.jsx)(E.Z, {
        className: C.emojiButton,
        active: n,
        tabIndex: 0,
        renderButtonContents: S
      }),
      (0, s.jsx)(o.TextInput, {
        inputClassName: C.emojiText,
        placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
        value: x,
        'aria-labelledby': i,
        readOnly: !0
      })
    ]
  });
}
  });
}

function p(e) {
  var t;
  let {
guildId: n,
initialData: i,
benefitTypeInput: r,
descriptionPlaceholder: l,
canSubmit: c,
onSave: d,
onDelete: u,
transitionState: _,
onClose: I
  } = e, E = (0, N.Dt)(), m = (0, N.Dt)(), S = (0, N.Dt)(), [h, p] = a.useState(null !== (t = null == i ? void 0 : i.description) && void 0 !== t ? t : ''), [R, f] = a.useState(() => ({
id: null == i ? void 0 : i.emoji_id,
name: null == i ? void 0 : i.emoji_name
  })), L = c && '' !== h && (null != R.id || null != R.name);
  return (0, s.jsx)('form', {
onSubmit: function(e) {
  e.preventDefault(), L && (d({
    description: h,
    emojiId: R.id,
    emojiName: R.name
  }), I());
},
children: (0, s.jsxs)(o.ModalRoot, {
  transitionState: _,
  'aria-labelledby': E,
  children: [
    (0, s.jsxs)(o.ModalHeader, {
      children: [
        (0, s.jsx)(o.Heading, {
          id: E,
          variant: 'heading-md/semibold',
          children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }),
        (0, s.jsx)(o.ModalCloseButton, {
          className: C.closeButton,
          onClick: I
        })
      ]
    }),
    (0, s.jsxs)(o.ModalContent, {
      className: C.modalContent,
      children: [
        r,
        (0, s.jsx)(o.Spacer, {
          size: 24
        }),
        (0, s.jsx)(o.FormSection, {
          title: g.Z.Messages.DESCRIPTION,
          titleId: m,
          children: (0, s.jsx)(o.TextArea, {
            placeholder: l,
            value: h,
            rows: 1,
            autosize: !0,
            onChange: p,
            'aria-labelledby': m
          })
        }),
        (0, s.jsx)(o.Spacer, {
          size: 24
        }),
        (0, s.jsx)(o.FormSection, {
          title: g.Z.Messages.EMOJI,
          titleId: S,
          children: (0, s.jsx)(x, {
            guildId: n,
            emojiData: R,
            onSelectEmoji: f,
            'aria-labelledby': S
          })
        })
      ]
    }),
    (0, s.jsxs)(o.ModalFooter, {
      justify: T.Z.Justify.BETWEEN,
      children: [
        (0, s.jsxs)('div', {
          className: C.primaryButtons,
          children: [
            (0, s.jsx)(o.Button, {
              type: 'submit',
              disabled: !L,
              children: null == i ? g.Z.Messages.ADD : g.Z.Messages.SAVE
            }),
            null != u && (0, s.jsx)(o.Button, {
              look: o.Button.Looks.BLANK,
              size: o.Button.Sizes.ICON,
              className: C.deleteButton,
              onClick: () => {
                u(), I();
              },
              children: (0, s.jsx)(o.TrashIcon, {
                size: 'md',
                color: 'currentColor',
                'aria-label': g.Z.Messages.DELETE
              })
            })
          ]
        }),
        (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: C.cancelButton,
          onClick: I,
          children: g.Z.Messages.CANCEL
        })
      ]
    })
  ]
})
  });
}

function R(e) {
  let {
guildId: t,
omitChannelIds: n,
initialData: i,
onSave: l,
onDelete: c,
transitionState: d,
onClose: u
  } = e, [_, I] = a.useState(null == i ? void 0 : i.ref_id), E = (0, N.Dt)(), T = (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(m.Z, {
    messageType: m.Q.WARNING,
    children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
  }),
  (0, s.jsx)(o.Spacer, {
    size: 24
  }),
  (0, s.jsx)(o.FormSection, {
    title: g.Z.Messages.CHANNEL,
    titleId: E,
    children: (0, s.jsx)(S.Z, {
      guildId: t,
      value: _,
      initialChannelId: null == i ? void 0 : i.ref_id,
      omitChannelIds: n,
      onChange: function(e) {
        I(e);
      },
      'aria-labelledby': E
    })
  })
]
  });
  return (0, s.jsx)(p, {
guildId: t,
initialData: i,
benefitTypeInput: T,
descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
canSubmit: null != _,
onSave: function(e) {
  r()(null != _, 'Cannot submit null channel'), l({
    ...e,
    channelId: _
  });
},
transitionState: d,
onClose: u,
onDelete: c
  });
}

function f(e) {
  var t;
  let {
initialData: n,
onSave: i,
transitionState: l,
onClose: c,
onDelete: d,
guildId: u
  } = e, [_, I] = a.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''), E = (0, N.Dt)(), T = (0, s.jsx)(o.FormSection, {
title: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
titleId: E,
children: (0, s.jsx)(o.TextArea, {
  placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
  value: _,
  rows: 1,
  onChange: function(e) {
    I(e);
  },
  'aria-labelledby': E
})
  });
  return (0, s.jsx)(p, {
guildId: u,
initialData: n,
benefitTypeInput: T,
descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
canSubmit: '' !== _,
onSave: function(e) {
  r()('' !== _, 'Cannot submit empty name'), i({
    ...e,
    name: _
  });
},
transitionState: l,
onClose: c,
onDelete: d
  });
}