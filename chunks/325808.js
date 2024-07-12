s.d(t, {
  Z: function() {
return R;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(442837),
  o = s(481060),
  l = s(846027),
  c = s(230711),
  d = s(825209),
  _ = s(131951),
  E = s(285952),
  u = s(153124),
  T = s(358085),
  I = s(962100),
  S = s(981631),
  N = s(689938),
  C = s(790158),
  m = s(549856);
let A = !T.isPlatformEmbedded,
  h = (0, u.hQ)();

function g(e) {
  let {
value: t
  } = e;
  t === S.pM4.PUSH_TO_TALK && A && (0, o.openModalLazy)(async () => {
let {
  default: e
} = await Promise.resolve().then(s.bind(s, 468026));
return t => (0, n.jsx)(e, {
  title: N.Z.Messages.PTT_LIMITED_TITLE,
  confirmText: N.Z.Messages.DOWNLOAD,
  cancelText: N.Z.Messages.OKAY,
  onConfirm: () => (0, I.y)('PTT Limited Modal'),
  body: N.Z.Messages.PTT_LIMITED_BODY,
  ...t
});
  }), l.Z.setMode(t);
}

function O(e) {
  return e >= 1000 ? (e /= 1000, ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}

function p(e) {
  let t, {
  inputMode: s
} = e,
{
  shortcut: a,
  delay: u
} = (0, r.cj)([_.Z], () => _.Z.getModeOptions());
  return t = T.isPlatformEmbedded || s !== S.pM4.PUSH_TO_TALK ? (0, n.jsx)(o.FormText, {
type: o.FormText.Types.DESCRIPTION,
className: i()(C.pttToolsMessage, m.marginBottom8),
children: N.Z.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({
  onClick: () => c.Z.setSection(S.oAB.KEYBINDS)
})
  }) : (0, n.jsx)(o.FormText, {
type: o.FormText.Types.DESCRIPTION,
className: i()(C.pttToolsMessage, C.pttToolsWarning, m.marginBottom8),
children: N.Z.Messages.PTT_LIMITED_WARNING.format({
  onDownloadClick: () => (0, I.y)('Help Text PTT')
})
  }), (0, n.jsxs)('div', {
className: C.pttTools,
children: [
  (0, n.jsxs)(E.Z, {
    children: [
      (0, n.jsx)(E.Z.Child, {
        basis: '50%',
        children: (0, n.jsx)(o.FormItem, {
          title: N.Z.Messages.FORM_LABEL_SHORTCUT,
          children: (0, n.jsx)(d.Z, {
            defaultValue: a,
            onChange: e => l.Z.setMode(s, {
              shortcut: e
            })
          })
        })
      }),
      (0, n.jsx)(E.Z.Child, {
        basis: '50%',
        children: (0, n.jsxs)(o.FormItem, {
          children: [
            (0, n.jsx)(o.FormTitle, {
              id: h,
              tag: o.FormTitleTags.H5,
              className: m.marginBottom8,
              children: N.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
            }),
            (0, n.jsx)(o.Slider, {
              initialValue: u,
              onValueChange: e => l.Z.setMode(s, {
                delay: e
              }),
              onValueRender: O,
              maxValue: S.qhL,
              'aria-labelledby': h
            })
          ]
        })
      })
    ]
  }),
  t
]
  });
}

function R() {
  let e = (0, r.e7)([_.Z], () => _.Z.getMode()),
t = [{
    value: S.pM4.VOICE_ACTIVITY,
    name: N.Z.Messages.INPUT_MODE_VAD
  },
  {
    value: S.pM4.PUSH_TO_TALK,
    name: A ? N.Z.Messages.INPUT_MODE_PTT_LIMITED : N.Z.Messages.INPUT_MODE_PTT
  }
];
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(o.FormItem, {
    title: N.Z.Messages.FORM_LABEL_INPUT_MODE,
    className: m.marginBottom20,
    children: (0, n.jsx)(o.RadioGroup, {
      onChange: g,
      options: t,
      value: e
    })
  }),
  e === S.pM4.PUSH_TO_TALK && (0, n.jsx)(p, {
    inputMode: e
  })
]
  });
}