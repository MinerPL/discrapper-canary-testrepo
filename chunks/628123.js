n(47120);
var r = n(735250),
  i = n(470079),
  a = n(392711),
  s = n.n(a),
  o = n(818405),
  l = n(587158),
  u = n(286379),
  c = n(442837),
  d = n(481060),
  _ = n(386506),
  E = n(304761),
  f = n(865427),
  h = n(406128),
  p = n(25779),
  m = n(797614),
  I = n(703656),
  T = n(626135),
  g = n(960048),
  S = n(998502),
  A = n(981631),
  N = n(689938),
  v = n(728641);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function R() {
  let [e, t] = i.useState(!1);
  if (null == (0, c.e7)([E.C], () => {
  var e;
  return (0, f.fD)() ? null === (e = E.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
}))
return null;
  let n = async () => {
try {
  t(!0), await (0, _.bF)(), window.location.reload(!0);
} catch (e) {
  t(!1);
}
  };
  return (0, r.jsx)(d.Button, {
size: d.ButtonSizes.LARGE,
onClick: n,
submitting: e,
className: v.clearOverrideButton,
children: N.Z.Messages.CLEAR_BUILD_OVERRIDE
  });
}
let C = s().throttle(e => {
  m.Z.increment({
name: u.V.APP_CRASHED,
tags: [
  'reason:'.concat(o.v.UNHANDLED_JS_ERROR),
  'level:'.concat(l.c.FATAL),
  'modded_client:'.concat(e)
]
  }, !0);
}, 100, {
  trailing: !1
});
class y extends i.PureComponent {
  componentDidCatch(e, t) {
this.triggerSoftCrash(e, t);
  }
  triggerSoftCrash(e, t) {
let n = (0, I.s1)().location;
this.setState({
  error: e,
  info: t
});
let r = (0, p.e)(),
  i = g.Z.captureCrash(e, {
    extra: t
  });
T.default.track(A.rMx.APP_CRASHED, {
  path: n.pathname,
  extra: t,
  error_message: e.message,
  error_stack: e.stack,
  sentry_issue_id: i,
  uses_client_mods: r
}), C(r), S.ZP.cleanupDisplaySleep();
  }
  _handleSubmitReport() {
location.reload(!0);
  }
  componentDidMount() {
null == window.DiscordErrors && (window.DiscordErrors = {
  softCrash: e => {
    this.triggerSoftCrash(e);
  }
}, this.discordErrorsSet = !0);
  }
  componentWillUnmount() {
this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1);
  }
  render() {
let {
  children: e,
  renderCustomMessage: t
} = this.props;
if (null !== this.state.error) {
  let e = (0, r.jsxs)('div', {
      children: [
        (0, r.jsx)('p', {
          children: N.Z.Messages.ERRORS_UNEXPECTED_CRASH
        }),
        (0, r.jsx)('p', {
          children: N.Z.Messages.ERRORS_ACTION_TO_TAKE
        })
      ]
    }),
    n = (0, r.jsxs)('div', {
      className: v.buttons,
      children: [
        (0, r.jsx)(d.Button, {
          size: d.ButtonSizes.LARGE,
          onClick: this._handleSubmitReport,
          children: N.Z.Messages.ERRORS_RELOAD
        }),
        (0, r.jsx)(R, {})
      ]
    });
  return (0, r.jsx)(h.Z, {
    title: N.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
    note: null != t ? t() : e,
    action: n,
    className: v.errorPage
  });
}
return e;
  }
  constructor(...e) {
super(...e), O(this, 'state', {
  error: null,
  info: null
}), O(this, 'discordErrorsSet', !1);
  }
}
t.Z = y;