t.d(n, {
  EK: function() {
return u;
  },
  G0: function() {
return m;
  },
  QC: function() {
return _;
  },
  dd: function() {
return C;
  }
}), t(47120);
var a = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  s = t(481060),
  o = t(454585),
  l = t(489813),
  c = t(689938),
  d = t(902681);

function u(e) {
  let {
terms: n,
channelId: t,
className: r
  } = e;
  return (0, a.jsx)('div', {
className: i()(d.termsFieldBody, r),
children: n.map((e, n) => (0, a.jsxs)('div', {
  className: d.termsRow,
  children: [
    (0, a.jsx)(s.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: ''.concat(n + 1, '.')
    }),
    (0, a.jsx)(s.Text, {
      variant: 'text-md/normal',
      className: d.termsRowContent,
      children: o.Z.parseGuildVerificationFormRule(e, !0, {
        channelId: t
      })
    })
  ]
}, 'term-'.concat(n)))
  });
}

function m(e) {
  let {
onChange: n,
checked: t,
disabled: r
  } = e;
  return (0, a.jsx)(s.Checkbox, {
size: 20,
type: s.Checkbox.Types.INVERTED,
value: t,
onChange: n,
disabled: r,
style: {
  borderWidth: 2
},
className: d.checkbox,
children: (0, a.jsx)(s.Text, {
  variant: 'text-sm/normal',
  children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES
})
  });
}

function _(e) {
  let {
formField: n
  } = e;
  return (0, a.jsx)(l.Ih, {
icon: s.BookCheckIcon,
text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
meetsRequirement: !!n.response
  });
}
let C = e => {
  let {
channelId: n,
formField: t,
onChange: r
  } = e;
  return (0, a.jsxs)(l.hK, {
title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
children: [
  (0, a.jsx)(u, {
    className: d.fieldBackground,
    terms: t.values,
    channelId: n
  }),
  (0, a.jsx)(m, {
    onChange: r,
    checked: t.response
  })
]
  });
};