n(47120), n(411104);
var i = n(934951),
  r = n(266067),
  l = n(38618),
  a = n(777639),
  u = n(311163),
  o = n(272423),
  s = n(378788),
  h = n(700615),
  d = n(905423),
  c = n(703656),
  g = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, c.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, c.s1)().location;
d.Z.getState().resetPath(e), this.unlistenKeyboardChange = d.Z.subscribe(this.handleKeybindRouteChange), l.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n;
let {
  pathname: i
} = e, l = (0, a.D)();
if (null == l || !l.isReady())
  return;
let d = e.navigationReplace,
  c = null !== (n = e.useScreen) && void 0 !== n && n;
if (i === g.Z5c.NOTIFICATIONS) {
  (0, o.vp)({
    screen: 'notifications',
    resetRoot: d
  });
  return;
}
if (i.startsWith('/channels/')) {
  let t = (0, r.LX)(i, {
    path: ''.concat(g.Z5c.CHANNEL(':guildId', ':channelId?')).concat(g.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
  });
  if (null != t) {
    let {
      voiceGuildId: e,
      voiceChannelId: n,
      voiceMessageId: i
    } = t.params;
    !(0, h.ur)() && (0, o.k4)({
      channelId: n,
      guildId: e,
      messageId: i,
      replaceChannelAndFixRoot: d,
      useScreen: c
    });
    return;
  }
  let n = (0, r.LX)(i, {
    path: g.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != n) {
    let {
      channelId: t,
      guildId: i,
      messageId: r
    } = n.params, [a, h] = (0, u.Z)(l.getCurrentRoute());
    if (a === i && h === t)
      return;
    if ((0, s.z)()) {
      if (!0 === d && e.openChannel && null != t) {
        (0, o.k4)({
          channelId: t,
          guildId: i,
          messageId: r,
          replaceChannelAndFixRoot: d,
          useScreen: c,
          openChannel: !0
        });
        return;
      }!1 !== d && (0, o.vp)({
        screen: 'guilds',
        guildId: i,
        channelId: t,
        resetRoot: d
      }), null != t && !0 !== d && (0, o.k4)({
        channelId: t,
        guildId: i,
        messageId: r,
        replaceChannelAndFixRoot: void 0,
        useScreen: c
      });
    } else
      null == t || !1 !== d ? (0, o.vp)({
        screen: 'guilds',
        guildId: i,
        channelId: t,
        resetRoot: d
      }) : null != i && (0, o.k4)({
        channelId: t,
        guildId: i,
        messageId: r,
        replaceChannelAndFixRoot: d,
        useScreen: c
      });
  }
  return;
}
if (i.startsWith('/member-verification/')) {
  let e = (0, r.LX)(i, {
    path: g.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, o.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (i.startsWith('/login') || i.startsWith('/register')) {
  (0, o.Bj)();
  return;
}
if (i.startsWith('/account-standing')) {
  l.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
(0, o.vp)({
  screen: 'messages',
  resetRoot: d
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let r = (0, c.s1)().location.pathname,
      l = n(e, t);
    if (null != l)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: l.path,
          previousPath: r
        }
      }), (0, c.dL)(l.path, l.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, l.Z.removeChangeListener(this.handleConnectionChange);
  }
  addRouteChangeListener(e) {
return null != this.unlistenHistory && e((0, c.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, c.s1)().location, (0, c.s1)().action);
  null != t && (0, c.dL)(t.path, t.state);
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
return (0, c.s1)();
  }
  constructor() {
f(this, 'unlistenHistory', void 0), f(this, 'unlistenKeyboardChange', void 0), f(this, 'rewrites', new Set()), f(this, 'listeners', new Set()), f(this, 'routeChangeCount', 0), f(this, 'timer', -1), f(this, 'connected', !1), f(this, 'handleConnectionChange', () => {
  let e = l.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, c.s1)().location, 'REPLACE'));
}), f(this, 'handleRouteChange', (e, t) => {
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
}), f(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), f(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = d.Z.getState();
  null != e.path && (0, c.uL)(e.path);
});
  }
}();