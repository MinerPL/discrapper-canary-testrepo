n(47120), n(411104);
var i = n(934951),
  r = n(266067),
  a = n(38618),
  o = n(57132),
  s = n(215355),
  l = n(777639),
  u = n(311163),
  c = n(272423),
  d = n(781157),
  h = n(700615),
  f = n(905423),
  g = n(703656),
  _ = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, g.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, g.s1)().location;
f.Z.getState().resetPath(e), this.unlistenKeyboardChange = f.Z.subscribe(this.handleKeybindRouteChange), a.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n, i, a;
let {
  pathname: f
} = e, g = (0, l.D)(), I = (0, o.cn)(), {
  mergeTabs: v
} = (0, s.LI)({
  location: 'convertRouteToNavigation'
});
if (null == g || !g.isReady())
  return;
let C = e.navigationReplace,
  R = null !== (n = e.useScreen) && void 0 !== n && n;
if (I && (0, d.x7)() && f === _.Z5c.ME) {
  (0, c.vp)({
    screen: 'messages',
    resetRoot: C
  });
  return;
}
if (I && f === _.Z5c.NOTIFICATIONS) {
  (0, c.vp)({
    screen: 'notifications',
    resetRoot: C
  });
  return;
}
if (f.startsWith('/channels/')) {
  let e = (0, r.LX)(f, {
      path: _.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
    }),
    t = (0, r.LX)(f, {
      path: ''.concat(_.Z5c.CHANNEL(':guildId', ':channelId?')).concat(_.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
    });
  if (!I) {
    let e = g.getRootState();
    (null == e ? void 0 : null === (a = e.routes) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.name) !== 'panels' && (0, c.H)();
    return;
  }
  if (null != t) {
    let {
      voiceGuildId: e,
      voiceChannelId: n,
      voiceMessageId: i
    } = t.params;
    !(0, h.ur)() && (0, c.k4)({
      channelId: n,
      guildId: e,
      messageId: i,
      replaceChannelAndFixRoot: C,
      useScreen: R
    });
    return;
  }
  if (null != e) {
    let {
      channelId: t,
      guildId: n,
      messageId: i
    } = e.params;
    if (!(0, d.x7)() && !v) {
      (0, c.vp)({
        screen: 'guilds',
        guildId: n,
        resetRoot: C
      });
      return;
    }
    if ((0, d.JH)()) {
      let [e, i] = (0, u.Z)(g.getCurrentRoute());
      if (e === n && i === t)
        return;
    }
    null == t || (0, d.Z0)(n) && !1 !== C ? n !== _.ME || v ? (0, c.vp)({
      screen: 'guilds',
      guildId: n,
      channelId: (0, d.JH)() ? t : void 0,
      resetRoot: C
    }) : (0, c.vp)({
      screen: 'messages',
      resetRoot: C
    }) : null != n && (0, c.k4)({
      channelId: t,
      guildId: n,
      messageId: i,
      replaceChannelAndFixRoot: C,
      useScreen: R
    });
  }
  return;
}
if (f.startsWith('/member-verification/')) {
  let e = (0, r.LX)(f, {
    path: _.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, c.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (f.startsWith('/login') || f.startsWith('/register')) {
  (0, c.Bj)();
  return;
}
if (f.startsWith('/account-standing')) {
  g.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
I && (0, c.vp)({
  screen: 'messages',
  resetRoot: C
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let r = (0, g.s1)().location.pathname,
      a = n(e, t);
    if (null != a)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: a.path,
          previousPath: r
        }
      }), (0, g.dL)(a.path, a.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, a.Z.removeChangeListener(this.handleConnectionChange);
  }
  addRouteChangeListener(e) {
return null != this.unlistenHistory && e((0, g.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, g.s1)().location, (0, g.s1)().action);
  null != t && (0, g.dL)(t.path, t.state);
}
return this.rewrites.add(e), () => this.removeRouteRewriter(e);
  }
  removeRouteChangeListener(e) {
this.listeners.delete(e);
  }
  removeRouteRewriter(e) {
this.rewrites.delete(e);
  }
  getHistory() {
return (0, g.s1)();
  }
  constructor() {
I(this, 'unlistenHistory', void 0), I(this, 'unlistenKeyboardChange', void 0), I(this, 'rewrites', new Set()), I(this, 'listeners', new Set()), I(this, 'routeChangeCount', 0), I(this, 'timer', -1), I(this, 'connected', !1), I(this, 'handleConnectionChange', () => {
  let e = a.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, g.s1)().location, 'REPLACE'));
}), I(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let n = f.Z.getState();
  for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
    try {
      i(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), I(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), I(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = f.Z.getState();
  null != e.path && (0, g.uL)(e.path);
});
  }
}();