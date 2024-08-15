t.d(r, {
  Z: function() {
return p;
  }
});
var a = t(735250);
t(470079);
var n = t(120356),
  i = t.n(n),
  o = t(481060),
  l = t(45114),
  c = t(110478),
  s = t(423932),
  d = t(601948),
  u = t(594174),
  h = t(804637),
  m = t(224499);
let g = () => {
  Promise.all([
t.e('52030'),
t.e('55900')
  ]).then(t.bind(t, 24031)).then(e => {
let {
  openMFAModal: r
} = e;
r({
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

function p() {
  let e = u.default.getCurrentUser(),
r = null == e ? void 0 : e.isStaff();
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)('div', {
    className: i()(h.buttonsContainer, m.marginBottom20),
    children: (0, a.jsx)(d.S, {
      isDevTools: !0
    })
  }),
  (0, a.jsx)('div', {
    className: i()(h.buttonsContainer, m.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: g,
      children: 'Launch MFA'
    })
  }),
  (0, a.jsx)('div', {
    className: i()(h.buttonsContainer, m.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: () => (0, s.Z)(),
      children: 'Launch Vibing Wumpus'
    })
  }),
  (0, a.jsx)('div', {
    className: i()(h.buttonsContainer, m.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: l.YJ,
      children: 'Clear Message Requests Read State'
    })
  }),
  r && (0, a.jsx)('div', {
    className: i()(h.buttonsContainer, m.marginBottom20),
    children: (0, a.jsx)(o.Button, {
      onClick: () => (0, c.N)(),
      children: 'Launch Captcha Test Tool'
    })
  })
]
  });
}