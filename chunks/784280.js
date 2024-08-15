o.r(a), o.d(a, {
  default: function() {
return b;
  }
}), o(47120);
var t = o(735250),
  n = o(470079),
  r = o(442837),
  s = o(481060),
  i = o(881052),
  l = o(607070),
  d = o(745510),
  c = o(600164),
  u = o(781792),
  f = o(430824),
  m = o(645792),
  _ = o(981631),
  h = o(689938),
  E = o(248932);

function b(e) {
  let {
guildId: a
  } = e, o = (0, r.e7)([f.Z], () => f.Z.getGuild(a)), [b, A] = n.useState(null), [g, H] = n.useState(''), {
createMultipleConfettiAt: M
  } = n.useContext(d.h), x = (0, r.e7)([l.Z], () => l.Z.useReducedMotion, []), C = async a => {
let {
  onClose: o,
  guildId: t
} = e;
a.preventDefault(), A(null);
try {
  await (0, u.e)(t, {
    nick: g
  }), null == o || o();
} catch (e) {
  A(new i.Hx(e));
}
  }, {
transitionState: R
  } = e, N = Object.values(f.Z.getGuilds()).filter(e => e.id !== a && e.hasFeature(_.oNc.HUB)).length > 0, L = !x && !N && (null == o ? void 0 : o.hasFeature(_.oNc.HUB)) && (0, m.b)();
  return n.useEffect(() => {
if (L) {
  let e = window.innerWidth / 2;
  M(e, window.innerHeight / 2);
}
  }, [
M,
L
  ]), (0, t.jsxs)(s.ModalRoot, {
className: E.__invalid_modalRoot,
transitionState: R,
'aria-label': h.Z.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
  guildName: null == o ? void 0 : o.name
}),
children: [
  (0, t.jsxs)(s.ModalHeader, {
    separator: !1,
    className: E.formHeaderContainer,
    direction: c.Z.Direction.VERTICAL,
    children: [
      (0, t.jsx)('div', {
        className: E.formImage
      }),
      (0, t.jsx)(s.Heading, {
        variant: 'heading-xl/semibold',
        className: E.formHeader,
        children: h.Z.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
          guildName: null == o ? void 0 : o.name
        })
      }),
      (0, t.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        className: E.formSubHeader,
        children: h.Z.Messages.HUB_REAL_NAME_MODAL_SUBHEADER
      })
    ]
  }),
  (0, t.jsxs)('form', {
    className: E.formContent,
    onSubmit: C,
    children: [
      (0, t.jsx)(s.ModalContent, {
        children: (0, t.jsx)(s.FormItem, {
          title: h.Z.Messages.HUB_REAL_NAME_MODAL_FORM_TITLE,
          children: (0, t.jsx)(s.TextInput, {
            placeholder: h.Z.Messages.HUB_REAL_NAME_MODAL_FORM_PLACEHOLDER,
            onChange: e => {
              H(e);
            },
            error: null == b ? void 0 : b.getFirstFieldErrorMessage('name'),
            value: g
          })
        })
      }),
      (0, t.jsx)(s.ModalFooter, {
        className: E.formFooter,
        direction: c.Z.Direction.VERTICAL,
        children: (0, t.jsx)(s.Button, {
          type: 'submit',
          size: s.Button.Sizes.LARGE,
          color: s.Button.Colors.BRAND,
          children: h.Z.Messages.HUB_REAL_NAME_CTA
        })
      })
    ]
  })
]
  });
}