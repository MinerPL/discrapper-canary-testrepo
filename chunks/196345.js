t.d(n, {
  EK: function() {
return d;
  },
  G0: function() {
return m;
  },
  QC: function() {
return f;
  },
  dd: function() {
return _;
  }
}), t(47120);
var o = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  a = t(481060),
  s = t(454585),
  l = t(489813),
  c = t(689938),
  u = t(994735);

function d(e) {
  let {
terms: n,
channelId: t,
className: r
  } = e;
  return (0, o.jsx)('div', {
className: i()(u.termsFieldBody, r),
children: n.map((e, n) => (0, o.jsxs)('div', {
  className: u.termsRow,
  children: [
    (0, o.jsx)(a.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: ''.concat(n + 1, '.')
    }),
    (0, o.jsx)(a.Text, {
      variant: 'text-md/normal',
      className: u.termsRowContent,
      children: s.Z.parseGuildVerificationFormRule(e, !0, {
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
  return (0, o.jsx)(a.Checkbox, {
size: 20,
type: a.Checkbox.Types.INVERTED,
value: t,
onChange: n,
disabled: r,
style: {
  borderWidth: 2
},
className: u.checkbox,
children: (0, o.jsx)(a.Text, {
  variant: 'text-sm/normal',
  children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES
})
  });
}

function f(e) {
  let {
formField: n
  } = e;
  return (0, o.jsx)(l.Ih, {
icon: a.BookCheckIcon,
text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
meetsRequirement: !!n.response
  });
}
let _ = e => {
  let {
channelId: n,
formField: t,
onChange: r
  } = e;
  return (0, o.jsxs)(l.hK, {
title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
children: [
  (0, o.jsx)(d, {
    className: u.fieldBackground,
    terms: t.values,
    channelId: n
  }),
  (0, o.jsx)(m, {
    onChange: r,
    checked: t.response
  })
]
  });
};