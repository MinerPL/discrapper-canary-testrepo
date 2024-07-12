r.d(t, {
  Z: function() {
return m;
  }
});
var a = r(735250);
r(470079);
var n = r(120356),
  i = r.n(n),
  o = r(481060),
  l = r(45114),
  c = r(423932),
  s = r(601948),
  d = r(870872),
  u = r(549856);
let h = () => {
  Promise.all([
r.e('52030'),
r.e('25593')
  ]).then(r.bind(r, 24031)).then(e => {
let {
  openMFAModal: t
} = e;
t({
  ticket: 'ticket',
  methods: [{
      type: 'webauthn',
      challenge: '{}'
    },
    {
      type: 'totp',
      backup_codes_allowed: !0
    },
    {
      type: 'sms'
    },
    {
      type: 'password'
    }
  ]
}, console.log, console.error);
  });
};

function m() {
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)('div', {
    className: i()(d.buttonsContainer, u.marginBottom20),
    children: (0, a.jsx)(s.S, {
      isDevTools: !0
    })
  }),
  (0, a.jsx)('div', {
    className: i()(d.buttonsContainer, u.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: h,
      children: 'Launch MFA'
    })
  }),
  (0, a.jsx)('div', {
    className: i()(d.buttonsContainer, u.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: () => (0, c.Z)(),
      children: 'Launch Vibing Wumpus'
    })
  }),
  (0, a.jsx)('div', {
    className: i()(d.buttonsContainer, u.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: l.YJ,
      children: 'Clear Message Requests Read State'
    })
  })
]
  });
}