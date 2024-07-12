n(47120), n(411104);
var i = n(934951),
  o = n(266067),
  r = n(38618),
  a = n(57132),
  l = n(215355),
  s = n(777639),
  c = n(311163),
  d = n(272423),
  u = n(781157),
  h = n(700615),
  g = n(905423),
  m = n(703656),
  f = n(981631);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, m.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, m.s1)().location;
g.Z.getState().resetPath(e), this.unlistenKeyboardChange = g.Z.subscribe(this.handleKeybindRouteChange), r.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n, i, r;
let {
  pathname: g
} = e, m = (0, s.D)(), b = (0, a.cn)(), {
  mergeTabs: p
} = (0, l.LI)({
  location: 'convertRouteToNavigation'
});
if (null == m || !m.isReady())
  return;
let _ = e.navigationReplace,
  v = null !== (n = e.useScreen) && void 0 !== n && n;
if (b && (0, u.x7)() && g === f.Z5c.ME) {
  (0, d.vp)({
    screen: 'messages',
    resetRoot: _
  });
  return;
}
if (b && g === f.Z5c.NOTIFICATIONS) {
  (0, d.vp)({
    screen: 'notifications',
    resetRoot: _
  });
  return;
}
if (g.startsWith('/channels/')) {
  let e = (0, o.LX)(g, {
      path: f.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
    }),
    t = (0, o.LX)(g, {
      path: ''.concat(f.Z5c.CHANNEL(':guildId', ':channelId?')).concat(f.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
    });
  if (!b) {
    let e = m.getRootState();
    (null == e ? void 0 : null === (r = e.routes) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.name) !== 'panels' && (0, d.H)();
    return;
  }
  if (null != t) {
    let {
      voiceGuildId: e,
      voiceChannelId: n,
      voiceMessageId: i
    } = t.params;
    !(0, h.ur)() && (0, d.k4)({
      channelId: n,
      guildId: e,
      messageId: i,
      replaceChannelAndFixRoot: _,
      useScreen: v
    });
    return;
  }
  if (null != e) {
    let {
      channelId: t,
      guildId: n,
      messageId: i
    } = e.params;
    if (!(0, u.x7)() && !p) {
      (0, d.vp)({
        screen: 'guilds',
        guildId: n,
        resetRoot: _
      });
      return;
    }
    if ((0, u.JH)()) {
      let [e, i] = (0, c.Z)(m.getCurrentRoute());
      if (e === n && i === t)
        return;
    }
    null == t || (0, u.Z0)(n) && !1 !== _ ? n !== f.ME || p ? (0, d.vp)({
      screen: 'guilds',
      guildId: n,
      channelId: (0, u.JH)() ? t : void 0,
      resetRoot: _
    }) : (0, d.vp)({
      screen: 'messages',
      resetRoot: _
    }) : null != n && (0, d.k4)({
      channelId: t,
      guildId: n,
      messageId: i,
      replaceChannelAndFixRoot: _,
      useScreen: v
    });
  }
  return;
}
if (g.startsWith('/member-verification/')) {
  let e = (0, o.LX)(g, {
    path: f.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, d.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (g.startsWith('/login') || g.startsWith('/register')) {
  (0, d.Bj)();
  return;
}
if (g.startsWith('/account-standing')) {
  m.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
b && (0, d.vp)({
  screen: 'messages',
  resetRoot: _
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let o = (0, m.s1)().location.pathname,
      r = n(e, t);
    if (null != r)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: r.path,
          previousPath: o
        }
      }), (0, m.dL)(r.path, r.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, r.Z.removeChangeListener(this.handleConnectionChange);
  }
  addRouteChangeListener(e) {
return null != this.unlistenHistory && e((0, m.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, m.s1)().location, (0, m.s1)().action);
  null != t && (0, m.dL)(t.path, t.state);
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
return (0, m.s1)();
  }
  constructor() {
b(this, 'unlistenHistory', void 0), b(this, 'unlistenKeyboardChange', void 0), b(this, 'rewrites', new Set()), b(this, 'listeners', new Set()), b(this, 'routeChangeCount', 0), b(this, 'timer', -1), b(this, 'connected', !1), b(this, 'handleConnectionChange', () => {
  let e = r.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, m.s1)().location, 'REPLACE'));
}), b(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let n = g.Z.getState();
  for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
    try {
      i(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), b(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), b(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = g.Z.getState();
  null != e.path && (0, m.uL)(e.path);
});
  }
}();