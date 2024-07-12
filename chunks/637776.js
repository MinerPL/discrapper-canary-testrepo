n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  a = n(231239),
  l = n(129293),
  o = n(388905),
  c = n(703656),
  u = n(108427),
  d = n(844800),
  h = n(580497),
  _ = n(981631),
  E = n(689938),
  g = n(39957);

function p(e) {
  let {
location: t
  } = e, [p, f] = r.useState(!1), {
verifySuccess: I,
verifyErrors: m,
redirectGuildId: N
  } = (0, i.e7)([d.Z], () => d.Z.getState());
  r.useEffect(() => {
let e = (0, l.Z)(t);
a.Z.verify(e), (0, u.e)('verify_hub_email');
  }, [t]);
  let T = () => {
(0, h.Z)(N), f(!0);
  };
  return p ? (0, s.jsxs)(o.ZP, {
children: [
  (0, s.jsx)(o.Dx, {
    className: g.title,
    children: E.Z.Messages.APP_OPENED_TITLE
  }),
  (0, s.jsx)(o.DK, {
    className: g.subtitle,
    children: E.Z.Messages.APP_OPENED_BODY
  }),
  (0, s.jsx)(o.zx, {
    className: g.spacedButton,
    onClick: () => (0, c.uL)(_.Z5c.CHANNEL(N)),
    children: E.Z.Messages.CONTINUE_TO_WEBAPP
  })
]
  }) : I ? (0, s.jsxs)(o.ZP, {
children: [
  (0, s.jsx)(o.Ee, {
    className: g.image,
    src: n(73962)
  }),
  (0, s.jsx)(o.Dx, {
    className: g.title,
    children: E.Z.Messages.VERIFICATION_VERIFIED
  }),
  (0, s.jsx)(o.zx, {
    onClick: T,
    children: E.Z.Messages.VERIFICATION_OPEN_DISCORD
  })
]
  }) : null != m ? (0, s.jsxs)(o.ZP, {
children: [
  (0, s.jsx)(o.Ee, {
    className: g.image,
    src: n(375673)
  }),
  (0, s.jsx)(o.Dx, {
    className: g.title,
    children: E.Z.Messages.VERFICATION_EXPIRED
  }),
  (0, s.jsx)(o.DK, {
    className: g.subtitle,
    children: E.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
  }),
  (0, s.jsx)(o.zx, {
    onClick: T,
    children: E.Z.Messages.VERIFICATION_OPEN_DISCORD
  })
]
  }) : (0, s.jsxs)(o.ZP, {
children: [
  (0, s.jsx)(o.Ee, {
    className: g.image,
    src: n(892235)
  }),
  (0, s.jsx)(o.Dx, {
    className: g.title,
    children: E.Z.Messages.VERIFICATION_VERIFYING
  }),
  (0, s.jsx)(o.DK, {
    className: g.subtitle,
    children: E.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
  }),
  (0, s.jsx)(o.zx, {
    submitting: !0,
    color: o.zx.Colors.PRIMARY
  })
]
  });
}
i.ZP.initialize();