n.d(t, {
  B: function() {
return h;
  },
  Z: function() {
return S;
  }
}), n(47120);
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(392711),
  l = n.n(r),
  o = n(481060),
  c = n(668781),
  d = n(603211),
  u = n(107862),
  _ = n(307707),
  I = n(305762),
  E = n(570961),
  T = n(290511),
  m = n(689938),
  N = n(857049);

function S(e) {
  var t, a, r, c;
  let {
guild: u,
prompt: S,
singleColumn: h,
promptIndex: g,
option: C,
hasError: x,
onDragStart: p,
onDragComplete: R,
onDragReset: f
  } = e, L = null, O = l().findIndex(S.options, e => e.id === C.id), {
drag: A,
dragSourcePosition: M,
drop: D,
setIsDraggable: v
  } = (0, d.Z)({
type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(S.id),
index: O,
optionId: C.id,
onDragStart: p,
onDragComplete: R,
onDragReset: f
  }), {
customEmoji: j,
unicodeEmoji: Z
  } = (0, _.Z)(null === (t = C.emoji) || void 0 === t ? void 0 : t.id, null === (a = C.emoji) || void 0 === a ? void 0 : a.name);
  return !((0, T.Oq)(C.emoji) || null != j || null != Z) && (L = m.Z.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, s.jsxs)(o.Clickable, {
className: i()(N.optionCard, {
  [N.hasError]: x || null != L,
  [N.dropIndicatorBefore]: null != M && O < M,
  [N.dropIndicatorAfter]: null != M && O > M,
  [N.singleColumn]: h
}),
onClick: () => (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('1862').then(n.bind(n, 801001));
  return t => (0, s.jsx)(e, {
    ...t,
    guild: u,
    prompt: S,
    option: C,
    index: g,
    onSave: e => {
      (0, E.Kk)(u, S.id, {
        options: S.options.map(t => t.id === C.id ? e : t)
      });
    },
    onDelete: () => {
      (0, E.Kk)(u, S.id, {
        options: S.options.filter(e => e.id !== C.id)
      });
    }
  });
}),
onMouseEnter: () => v(!0),
onMouseLeave: () => v(!1),
innerRef: e => A(D(e)),
children: [
  (0, s.jsx)('div', {
    className: N.dragContainer,
    children: (0, s.jsx)(o.DragIcon, {
      size: 'xs',
      color: 'currentColor',
      className: N.__invalid_dragIcon
    })
  }),
  (0, s.jsxs)('div', {
    className: N.optionCardRow,
    children: [
      (0, s.jsx)('div', {
        className: N.emoji,
        children: (0, s.jsx)(I.Z, {
          emojiId: null === (r = C.emoji) || void 0 === r ? void 0 : r.id,
          emojiName: null === (c = C.emoji) || void 0 === c ? void 0 : c.name,
          defaultComponent: null
        })
      }),
      (0, s.jsxs)('div', {
        className: N.text,
        children: [
          (0, s.jsx)(o.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            lineClamp: 1,
            children: C.title
          }),
          '' !== C.description && (0, s.jsx)(o.Text, {
            className: N.description,
            variant: 'text-xs/normal',
            color: 'header-secondary',
            children: C.description
          })
        ]
      })
    ]
  }),
  null != L && (0, s.jsx)(o.Text, {
    variant: 'text-xs/medium',
    color: 'text-danger',
    children: L
  })
]
  });
}

function h(e) {
  let {
guild: t,
prompt: a,
promptIndex: r,
singleColumn: l
  } = e, {
dropdownsAllowed: d
  } = (0, u.Ug)(t.id), _ = () => {
(0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('1862').then(n.bind(n, 801001));
  return n => (0, s.jsx)(e, {
    ...n,
    guild: t,
    prompt: a,
    onSave: e => (0, E.Kk)(t, a.id, {
      options: [
        ...a.options,
        e
      ]
    }),
    onDelete: () => {},
    index: r
  });
});
  };
  return (0, s.jsx)(o.Clickable, {
className: i()(N.optionCard, N.addOptionCard, {
  [N.addFirstOptionCard]: 0 === a.options.length,
  [N.singleColumn]: l
}),
onClick: () => {
  d && a.options.length + 1 === T.fY ? c.Z.show({
    title: m.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
    body: m.Z.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
      thresholdCount: T.fY
    }),
    confirmText: m.Z.Messages.OKAY,
    cancelText: m.Z.Messages.CANCEL,
    onConfirm: _
  }) : _();
},
children: (0, s.jsxs)('div', {
  className: N.optionCardRow,
  children: [
    (0, s.jsx)(o.CirclePlusIcon, {
      size: 'md',
      color: 'currentColor',
      className: N.plusIcon
    }),
    (0, s.jsx)(o.Text, {
      variant: 'text-md/medium',
      color: 'header-primary',
      children: m.Z.Messages.ONBOARDING_PROMPT_ADD_OPTION
    })
  ]
})
  });
}