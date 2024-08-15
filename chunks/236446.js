n.d(t, {
  Z: function() {
return j;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  u = n(388905),
  d = n(362762),
  _ = n(409059),
  h = n(659900),
  E = n(962220),
  g = n(473855),
  p = n(306453),
  I = n(929809),
  m = n(108427),
  f = n(390885),
  N = n(314897),
  T = n(896797),
  x = n(954824),
  A = n(781428),
  C = n(163671),
  v = n(423527),
  Z = n(981631),
  S = n(58346),
  R = n(701476),
  O = n(630724),
  b = n(436620),
  D = n(689938),
  L = n(482899),
  M = n(224499);
c.ZP.initialize();
class P extends r.PureComponent {
  componentDidMount() {
(0, m.e)('guildTemplate'), !b.KO && x.Z.launch('discord://' + Z.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
  }
  componentDidUpdate(e) {
this.props.code !== e.code && E.Z.resolveGuildTemplate(this.props.code);
  }
  renderButton(e, t) {
return b.KO ? (0, s.jsx)(u.zx, {
  className: M.marginTop40,
  onClick: t,
  children: e
}) : (0, s.jsx)(u.v6, {
  className: M.marginTop40
});
  }
  renderSpinner(e) {
return (0, s.jsxs)(u.ZP, {
  children: [
    (0, s.jsx)(u.Dx, {
      children: e
    }),
    (0, s.jsx)(u.Hh, {})
  ]
});
  }
  renderInvalidGuildTemplate() {
return (0, s.jsxs)(u.ZP, {
  children: [
    (0, s.jsx)(u.Ee, {
      src: n(167969),
      className: M.marginBottom8
    }),
    (0, s.jsx)(u.Dx, {
      className: a()(M.marginTop8, M.marginBottom8),
      children: D.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
    }),
    (0, s.jsx)(u.DK, {
      children: D.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
    }),
    this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
  ]
});
  }
  renderAppOpened() {
return (0, s.jsxs)(u.ZP, {
  children: [
    (0, s.jsx)(u.Dx, {
      className: M.marginBottom8,
      children: D.Z.Messages.APP_OPENED_TITLE
    }),
    (0, s.jsx)(u.DK, {
      children: D.Z.Messages.APP_OPENED_BODY
    }),
    this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
  ]
});
  }
  renderAuthenticatedOrDownload() {
let {
  guildTemplate: e
} = this.props;
return (o()(null != e, 'guild template must not be null'), e.state === S.Rj.RESOLVING) ? (0, s.jsx)(u.ZP, {
  className: L.authBox,
  children: (0, s.jsx)(p.Z, {
    guildTemplate: e
  })
}) : (0, s.jsx)(y, {
  guildTemplate: e
});
  }
  renderContinue() {
return (0, s.jsxs)(u.ZP, {
  children: [
    (0, s.jsx)(u.Dx, {
      children: D.Z.Messages.APP_NOT_OPENED
    }),
    this.renderButton(D.Z.Messages.CONTINUE_TO_WEBAPP, this.handleContinue)
  ]
});
  }
  render() {
let {
  guildTemplate: e,
  nativeAppState: t,
  authenticated: n,
  transitionTo: r,
  location: i
} = this.props;
if (null == e)
  return this.renderSpinner(D.Z.Messages.LOADING);
if (t === Z.kEZ.OPEN)
  return this.renderAppOpened();
if (t === Z.kEZ.OPENING)
  return this.renderSpinner(D.Z.Messages.APP_OPENING);
switch (e.state) {
  case S.Rj.RESOLVING:
    return this.renderSpinner(D.Z.Messages.APP_OPENING);
  case S.Rj.RESOLVED:
    if (n || !b.KO)
      return this.renderAuthenticatedOrDownload();
    if (this.props.login)
      return (0, s.jsx)(A.Z, {
        guildTemplate: e,
        transitionTo: r,
        location: i
      });
    else
      return (0, s.jsx)(v.Z, {
        guildTemplate: e,
        transitionTo: r,
        location: i,
        onRegister: () => {
          (0, I.c)(R.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), f.Z.flowStart(O.MK.ORGANIC_GUILD_TEMPLATES, O.EW.NUF_STARTED);
        }
      });
  case S.Rj.EXPIRED:
    return this.renderInvalidGuildTemplate();
  default:
    return null;
}
  }
  constructor(...e) {
var t, n, s;
super(...e), t = this, n = 'handleContinue', s = () => {
  let {
    defaultRoute: e,
    transitionTo: t
  } = this.props;
  t(e);
}, n in t ? Object.defineProperty(t, n, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = s;
  }
}

function j(e) {
  let t = {
guildTemplate: (0, c.e7)([_.Z], () => _.Z.getGuildTemplate(e.code)),
nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
authenticated: (0, c.e7)([N.default], () => N.default.isAuthenticated()),
defaultRoute: (0, c.e7)([T.Z], () => T.Z.defaultRoute)
  };
  return (0, s.jsx)(P, {
...e,
...t
  });
}

function y(e) {
  let {
guildTemplate: t
  } = e, {
form: n,
handleSubmit: r
  } = (0, h.Z)(t, !1);
  f.Z.flowStep(O.MK.ORGANIC_GUILD_TEMPLATES, O.X2.GUILD_CREATE);
  let i = (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(u.Dx, {
    className: L.header,
    children: D.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
  }),
  n,
  (0, s.jsx)(u.zx, {
    className: L.createButton,
    onClick: r,
    children: D.Z.Messages.GUILD_TEMPLATE_CREATE_DISCORD
  })
]
  });
  return (0, s.jsx)(C.Z, {
className: L.authBox,
children: () => [
  (0, s.jsx)(g.Z, {
    guildTemplate: t
  }, 'template'),
  (0, s.jsx)('div', {
    className: L.formContainer,
    children: i
  }, 'contents')
]
  });
}