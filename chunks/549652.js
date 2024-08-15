n.r(t), n.d(t, {
  default: function() {
return g;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(593473),
  r = n(442837),
  l = n(544891),
  o = n(536285),
  c = n(388905),
  u = n(600164),
  d = n(703656),
  p = n(314897),
  m = n(981631),
  x = n(689938),
  h = n(999730),
  N = n(224499);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
r.ZP.initialize();
let b = {
  HANDOFF: 'handoff',
  DONE: 'done',
  FAILED: 'failed'
};

function _() {
  try {
window.close();
  } catch (e) {}
}
class g extends a.PureComponent {
  componentDidMount() {
let {
  stage: e,
  key: t
} = this.state;
e === b.DONE ? _() : p.default.isAuthenticated() ? l.tn.post({
  url: m.ANM.HANDOFF,
  body: {
    key: t
  },
  oldFormErrors: !0
}).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff();
  }
  handoff(e) {
o.default.requestRedirect(m.Etm.BROWSER_HANDOFF, {
  handoffToken: e,
  fingerprint: p.default.getFingerprint()
}).then(this.done, this.failed);
  }
  renderDone() {
return (0, s.jsxs)(c.ZP, {
  children: [
    (0, s.jsx)(c.Ee, {
      src: n(69008),
      className: N.marginBottom20
    }),
    (0, s.jsx)(c.Dx, {
      className: N.marginBottom8,
      children: x.Z.Messages.BROWSER_HANDOFF_DONE_TITLE
    }),
    (0, s.jsx)(c.DK, {
      className: N.marginBottom40,
      children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
    }),
    (0, s.jsx)(c.zx, {
      onClick: this.handleOpenApp,
      children: x.Z.Messages.CONTINUE_TO_WEBAPP
    })
  ]
});
  }
  renderFailed() {
return (0, s.jsxs)(c.ZP, {
  children: [
    (0, s.jsx)(c.Ee, {
      src: n(69008),
      className: N.marginBottom20
    }),
    (0, s.jsx)(c.Dx, {
      className: N.marginBottom8,
      children: x.Z.Messages.BROWSER_HANDOFF_FAILED_TITLE
    }),
    (0, s.jsx)(c.DK, {
      className: N.marginBottom40,
      children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
    }),
    (0, s.jsx)(c.zx, {
      onClick: this.handleOpenApp,
      children: x.Z.Messages.CONTINUE_TO_WEBAPP
    })
  ]
});
  }
  renderHandoff() {
return (0, s.jsxs)(c.ZP, {
  children: [
    (0, s.jsx)(c.Hh, {}),
    (0, s.jsx)(c.Dx, {
      className: N.marginBottom8,
      children: x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
    }),
    (0, s.jsx)(c.DK, {
      children: x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
    })
  ]
});
  }
  render() {
let e;
let {
  stage: t
} = this.state;
switch (t) {
  case b.DONE:
    e = this.renderDone();
    break;
  case b.FAILED:
    e = this.renderFailed();
    break;
  case b.HANDOFF:
  default:
    e = this.renderHandoff();
}
return (0, s.jsx)(u.Z, {
  justify: u.Z.Justify.CENTER,
  align: u.Z.Align.CENTER,
  className: h.wrapper,
  children: e
});
  }
  constructor(e) {
var t;
super(e), f(this, 'done', () => {
  _(), this.setState({
    stage: b.DONE
  });
}), f(this, 'failed', () => {
  this.setState({
    stage: b.FAILED
  }), _();
}), f(this, 'handleOpenApp', () => {
  (0, d.uL)(m.Z5c.ME);
});
let {
  search: n
} = e.location, s = null != n && '' !== n ? (0, i.parse)(n) : {};
this.state = {
  key: null !== (t = s.key) && void 0 !== t ? t : '',
  stage: 'true' === s.done ? b.DONE : b.HANDOFF
};
  }
}