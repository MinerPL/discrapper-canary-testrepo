s.d(t, {
  S: function() {
return T;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(246992),
  o = s(535664),
  l = s(502087),
  c = s(921801),
  d = s(594174),
  _ = s(726985),
  E = s(474936),
  u = s(170670);
let T = e => {
  let {
isDevTools: t = !1
  } = e, s = (0, a.e7)([d.default], () => d.default.getCurrentUser()), T = (0, a.e7)([l.Z], () => {
let e = l.Z.getCreatedAtOverride();
return null != e ? e.toISOString().substring(0, 10) : '';
  }), I = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeOverride()), S = e => {
(0, o.u)(new Date(e));
  };
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsxs)(c.F, {
    setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
    children: [
      (0, n.jsx)(i.FormSection, {
        title: 'Override Client-Side Premium Type',
        tag: i.FormTitleTags.H3,
        children: (0, n.jsx)(i.SingleSelect, {
          options: E.b6,
          value: I,
          onChange: e => {
            (0, o.C)(e, s);
          },
          popoutLayerContext: t ? r.O$ : void 0
        })
      }),
      (0, n.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        style: {
          padding: '0'
        },
        onClick: () => {
          (0, o.C)(E.F_, s);
        },
        children: 'Reset premium type override'
      })
    ]
  }),
  (0, n.jsxs)(c.F, {
    setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
    children: [
      (0, n.jsx)(i.FormSection, {
        title: 'Override Client-Side Account Created At Date',
        tag: i.FormTitleTags.H3,
        children: (0, n.jsx)('input', {
          type: 'date',
          value: T,
          onChange: e => S(e.target.value),
          className: u.datePicker
        })
      }),
      (0, n.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        style: {
          padding: '0'
        },
        type: 'submit',
        onClick: () => (0, o.u)(void 0),
        children: 'Reset account created at override'
      })
    ]
  })
]
  });
};