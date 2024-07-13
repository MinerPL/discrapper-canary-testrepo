n(47120), n(411104);
var i = n(934951),
  r = n(266067),
  a = n(38618),
  o = n(777639),
  s = n(311163),
  u = n(272423),
  l = n(378788),
  c = n(700615),
  d = n(905423),
  h = n(703656),
  f = n(981631);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, h.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, h.s1)().location;
d.Z.getState().resetPath(e), this.unlistenKeyboardChange = d.Z.subscribe(this.handleKeybindRouteChange), a.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n;
let {
  pathname: i
} = e, a = (0, o.D)();
if (null == a || !a.isReady())
  return;
let d = e.navigationReplace,
  h = null !== (n = e.useScreen) && void 0 !== n && n;
if (i === f.Z5c.NOTIFICATIONS) {
  (0, u.vp)({
    screen: 'notifications',
    resetRoot: d
  });
  return;
}
if (i.startsWith('/channels/')) {
  let e = (0, r.LX)(i, {
    path: ''.concat(f.Z5c.CHANNEL(':guildId', ':channelId?')).concat(f.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
  });
  if (null != e) {
    let {
      voiceGuildId: t,
      voiceChannelId: n,
      voiceMessageId: i
    } = e.params;
    !(0, c.ur)() && (0, u.k4)({
      channelId: n,
      guildId: t,
      messageId: i,
      replaceChannelAndFixRoot: d,
      useScreen: h
    });
    return;
  }
  let t = (0, r.LX)(i, {
    path: f.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != t) {
    let {
      channelId: e,
      guildId: n,
      messageId: i
    } = t.params, [r, o] = (0, s.Z)(a.getCurrentRoute());
    if (r === n && o === e)
      return;
    (0, l.z)() ? (!1 !== d && (0, u.vp)({
      screen: 'guilds',
      guildId: n,
      channelId: e,
      resetRoot: d
    }), null != e && (0, u.k4)({
      channelId: e,
      guildId: n,
      messageId: i,
      replaceChannelAndFixRoot: d,
      useScreen: h
    })) : null == e || !1 !== d ? (0, u.vp)({
      screen: 'guilds',
      guildId: n,
      channelId: e,
      resetRoot: d
    }) : null != n && (0, u.k4)({
      channelId: e,
      guildId: n,
      messageId: i,
      replaceChannelAndFixRoot: d,
      useScreen: h
    });
  }
  return;
}
if (i.startsWith('/member-verification/')) {
  let e = (0, r.LX)(i, {
    path: f.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, u.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (i.startsWith('/login') || i.startsWith('/register')) {
  (0, u.Bj)();
  return;
}
if (i.startsWith('/account-standing')) {
  a.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
(0, u.vp)({
  screen: 'messages',
  resetRoot: d
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let r = (0, h.s1)().location.pathname,
      a = n(e, t);
    if (null != a)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: a.path,
          previousPath: r
        }
      }), (0, h.dL)(a.path, a.state), !0;
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
return null != this.unlistenHistory && e((0, h.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, h.s1)().location, (0, h.s1)().action);
  null != t && (0, h.dL)(t.path, t.state);
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
return (0, h.s1)();
  }
  constructor() {
g(this, 'unlistenHistory', void 0), g(this, 'unlistenKeyboardChange', void 0), g(this, 'rewrites', new Set()), g(this, 'listeners', new Set()), g(this, 'routeChangeCount', 0), g(this, 'timer', -1), g(this, 'connected', !1), g(this, 'handleConnectionChange', () => {
  let e = a.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.s1)().location, 'REPLACE'));
}), g(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let n = d.Z.getState();
  for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
    try {
      i(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), g(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), g(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = d.Z.getState();
  null != e.path && (0, h.uL)(e.path);
});
  }
}();