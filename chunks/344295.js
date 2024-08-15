n(789020), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(533800),
  o = n(756647),
  c = n(442837),
  u = n(298444),
  d = n(447543),
  _ = n(881052),
  h = n(899370),
  E = n(267394),
  g = n(388905),
  p = n(639946),
  I = n(792766),
  m = n(362762),
  f = n(978684),
  N = n(264229),
  T = n(929809),
  x = n(703656),
  A = n(108427),
  C = n(314897),
  v = n(896797),
  Z = n(701190),
  S = n(626135),
  R = n(630388),
  O = n(63063),
  b = n(782605),
  D = n(954824),
  L = n(588705),
  M = n(781428),
  P = n(423527),
  j = n(981631),
  y = n(188785),
  G = n(701476),
  B = n(436620),
  U = n(689938),
  F = n(224499);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
c.ZP.initialize();
let w = 'Accept Invite Page',
  H = {
REGISTER: 'register',
LOGIN: 'login'
  };
async function V(e) {
  let {
invite: t
  } = await d.Z.resolveInvite(e, w);
  if (null != t)
(0, E.A)(t);
}
class z extends r.PureComponent {
  componentDidMount() {
let {
  isUnderage: e,
  login: t,
  inviteKey: n
} = this.props;
if (S.default.track(j.rMx.INVITE_VIEWED, {
    invite_code: n
  }, {
    flush: !0
  }), (0, A.e)('invite'), !B.KO) {
  let e = this.getInviteKey();
  D.Z.launch('discord://' + j.Z5c.INVITE(e), () => void 0);
}
if (!t && e) {
  let e = this.getInviteKey(),
    {
      baseCode: t
    } = (0, N.fU)(e);
  (0, x.dL)(j.Z5c.INVITE_LOGIN(t));
}
  }
  componentDidUpdate(e) {
let {
  invite: t,
  nativeAppState: n,
  authenticated: s,
  transitionTo: r
} = this.props, i = this.getInviteKey();
if (i !== this.getInviteKey(e))
  V(i);
else if (t.state === j.r2o.APP_NOT_OPENED)
  this.handleContinue();
else if (this.getMode() === H.LOGIN && s !== e.authenticated && s) {
  let e = C.default.getFingerprint();
  if (null != e) {
    let t = (0, o.s)(e);
    this.track(j.rMx.INVITE_LOGIN_SUCCESSFUL, !0, {
      prev_user_id: t
    });
  }
  d.Z.acceptInvite({
    inviteKey: i,
    context: this.getAcceptInviteContext(w),
    skipOnboarding: !0,
    callback: this.handleContinue
  });
}
if (n !== e.nativeAppState && n === j.kEZ.OPEN && this.track(j.rMx.INVITE_APP_INVOKED, !1), this.getMode() === H.REGISTER && s && !e.authenticated) {
  let {
    channel: e
  } = t;
  null != e && ((0, T.c)(G.M5.INVITE_UNCLAIMED), null != t.guild ? r(j.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(t, r));
}
  }
  getInviteKey() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
return e.inviteKey;
  }
  getMode() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
return y.a ? H.REGISTER : e.login ? H.LOGIN : H.REGISTER;
  }
  track(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
  {
    invite: s
  } = this.props,
  r = this.getInviteKey(),
  i = (0, N.jX)(r),
  a = t ? {
    guild_id: null != s.guild ? s.guild.id : null,
    channel_id: null != s.channel ? s.channel.id : null,
    inviter_id: null != s.inviter ? s.inviter.id : null,
    invite_code: i
  } : {
    invite_code: i
  };
S.default.track(e, {
  ...a,
  ...n
});
  }
  renderSpinner(e) {
return (0, s.jsxs)(g.ZP, {
  children: [
    (0, s.jsx)(g.Dx, {
      children: e
    }),
    (0, s.jsx)(g.Hh, {})
  ]
});
  }
  renderInvalidInvite() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
return (0, s.jsxs)(g.ZP, {
  children: [
    (0, s.jsx)(g.Ee, {
      src: n(167969),
      className: F.marginBottom8
    }),
    (0, s.jsx)(g.Dx, {
      className: a()(F.marginTop8, F.marginBottom8),
      children: U.Z.Messages.AUTH_INVALID_INVITE_TITLE
    }),
    (0, s.jsx)(g.DK, {
      children: e ? U.Z.Messages.AUTH_BANNED_INVITE_BODY : U.Z.Messages.AUTH_INVALID_INVITE_BODY
    }),
    this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP),
    (0, s.jsx)(g.zx, {
      onClick: () => window.open(O.Z.getArticleURL(j.BhN.INVALID_INVITES), '_blank'),
      look: g.zx.Looks.LINK,
      color: g.zx.Colors.LINK,
      className: F.marginTop8,
      children: U.Z.Messages.AUTH_INVALID_INVITE_TIP
    })
  ]
});
  }
  renderErrorInvite() {
var e, t;
return (0, s.jsxs)(g.ZP, {
  children: [
    (0, s.jsx)(L.Z, {
      invite: this.props.invite,
      error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
    }),
    (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === j.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(U.Z.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)
  ]
});
  }
  renderExpiredInvite() {
return this.renderInvalidInvite(!1);
  }
  renderBannedInvite() {
return this.renderInvalidInvite(!0);
  }
  renderAppOpened(e) {
let t = null != e ? e : this.handleContinue;
return (0, s.jsxs)(g.ZP, {
  children: [
    (0, s.jsx)(g.Dx, {
      className: F.marginBottom8,
      children: U.Z.Messages.APP_OPENED_TITLE
    }),
    (0, s.jsx)(g.DK, {
      children: U.Z.Messages.APP_OPENED_BODY
    }),
    this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP, () => t())
  ]
});
  }
  renderAuthenticatedHeader() {
let {
  invite: e
} = this.props;
return null != e.stage_instance && null != e.guild ? (0, s.jsx)(I.Z, {
  stageInstance: e.stage_instance,
  guild: e.guild
}) : null != e.guild_scheduled_event ? (0, s.jsx)(p.r, {
  channel: e.channel,
  guildScheduledEvent: e.guild_scheduled_event
}) : (0, s.jsx)(L.Z, {
  invite: e
});
  }
  renderAuthenicatedFooter() {
let {
  invite: e
} = this.props;
return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(g.ZP, {
  className: F.marginTop20,
  children: (0, s.jsx)(I.y, {
    guild: e.guild,
    onlineCount: e.approximate_presence_count
  })
}) : null;
  }
  renderAuthenticatedOrDownload() {
let {
  invite: e
} = this.props, t = null != e.stage_instance ? U.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : U.Z.Messages.INSTANT_INVITE_ACCEPT;
return (0, s.jsxs)('div', {
  children: [
    (0, s.jsxs)(g.ZP, {
      children: [
        this.renderAuthenticatedHeader(),
        this.renderButton(t, this.handleAccept)
      ]
    }),
    this.renderAuthenicatedFooter()
  ]
});
  }
  renderContinue() {
return (0, s.jsxs)(g.ZP, {
  children: [
    (0, s.jsx)(g.Dx, {
      children: U.Z.Messages.APP_NOT_OPENED
    }),
    this.renderButton(U.Z.Messages.CONTINUE_TO_WEBAPP)
  ]
});
  }
  render() {
let {
  invite: e,
  nativeAppState: t,
  authenticated: n,
  transitionTo: r,
  location: i
} = this.props;
if (t === j.kEZ.OPEN)
  return this.renderAppOpened();
switch (e.state) {
  case j.r2o.APP_OPENED:
    return this.renderAppOpened();
  case j.r2o.APP_NOT_OPENED:
    return this.renderContinue();
  case j.r2o.RESOLVING:
    return y.a ? this.renderSpinner(U.Z.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(U.Z.Messages.APP_OPENING);
  case j.r2o.APP_OPENING:
    return this.renderSpinner(U.Z.Messages.APP_OPENING);
  case j.r2o.RESOLVED:
    var a;
    if (n && (0, R.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, l.$.IS_GUEST_INVITE))
      return d.Z.openApp(e.code), u.x.set(f.J, e.code), this.renderAppOpened(() => r(j.Z5c.APP));
    if (n || !B.KO)
      return this.renderAuthenticatedOrDownload();
    else if (this.getMode() === H.LOGIN)
      return (0, s.jsx)(M.Z, {
        invite: e,
        transitionTo: r,
        location: i
      });
    else
      return (0, s.jsx)(P.Z, {
        invite: e,
        onLoginStart: () => this.track(j.rMx.INVITE_LOGIN, !0),
        location: i,
        transitionTo: r
      });
  case j.r2o.ACCEPTING:
    return this.renderSpinner(U.Z.Messages.INSTANT_INVITE_ACCEPTING);
  case j.r2o.EXPIRED:
    return this.renderExpiredInvite();
  case j.r2o.BANNED:
    return this.renderBannedInvite();
  case j.r2o.ERROR:
    return this.renderErrorInvite();
  case j.r2o.ACCEPTED:
  default:
    return null;
}
  }
  constructor(...e) {
var t;
super(...e), t = this, k(this, 'state', {
  error: null
}), k(this, 'getAcceptInviteContext', e => d.Z.getInviteContext(e, this.props.invite)), k(this, 'handleContinue', e => {
  let {
    invite: t,
    transitionTo: n
  } = this.props;
  if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
    var s;
    (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null ? n(j.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(null != e ? e : t, n);
  }
}), k(this, 'handleAccept', () => {
  this.setState({
    error: null
  });
  let e = this.getInviteKey();
  d.Z.acceptInvite({
    inviteKey: e,
    context: this.getAcceptInviteContext(w),
    skipOnboarding: !0,
    callback: t => {
      (0, E.A)(t), null != t.channel && d.Z.openApp(e, t.channel.id);
    }
  }).catch(e => {
    if (e instanceof _.yZ || e instanceof _.Hx) {
      let t = (0, b.O)(e.code);
      this.setState({
        error: {
          code: e.code,
          message: t
        }
      });
    } else
      this.setState({
        error: {
          code: e.code,
          message: U.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
        }
      });
  });
}), k(this, 'handleDefaultTransition', () => {
  let {
    defaultRoute: e,
    transitionTo: t
  } = this.props;
  t(e);
}), k(this, 'renderButton', function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
    {
      invite: r
    } = t.props,
    i = null != r.stage_instance || null != r.guild_scheduled_event;
  return B.KO ? (0, s.jsx)(g.zx, {
    className: i ? F.marginTop20 : F.marginTop40,
    onClick: n,
    color: i ? g.zx.Colors.GREEN : g.zx.Colors.BRAND,
    children: e
  }) : (0, s.jsx)(g.v6, {
    className: F.marginTop40
  });
});
  }
}
t.Z = c.ZP.connectStores([
  Z.Z,
  v.Z,
  C.default,
  m.Z,
  h.Z
], e => {
  var t;
  let {
inviteKey: n
  } = e;
  return {
invite: null !== (t = Z.Z.getInvite(n)) && void 0 !== t ? t : {},
nativeAppState: m.Z.getState(n),
authenticated: C.default.isAuthenticated(),
defaultRoute: v.Z.defaultRoute,
isUnderage: h.Z.isUnderageAnonymous()
  };
})(z);