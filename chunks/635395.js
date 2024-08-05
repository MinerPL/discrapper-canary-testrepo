n(47120);
var i, a, s = n(470079),
  r = n(442837),
  l = n(846027),
  o = n(230711),
  c = n(888369),
  d = n(131951),
  u = n(292959),
  _ = n(19780),
  h = n(699516),
  E = n(606304),
  I = n(358085),
  m = n(998502),
  g = n(981631);
(a = i || (i = {})).DEFAULT = 'DEFAULT', a.UNREAD = 'UNREAD', a.CONNECTED = 'CONNECTED', a.SPEAKING = 'SPEAKING', a.MUTED = 'MUTED', a.DEAFENED = 'DEAFENED';
let p = (0, I.isMac)() ? null : 'DEFAULT';
class T extends s.PureComponent {
  componentDidMount() {
m.ZP.setSystemTrayIcon(this.getIcon());
  }
  componentDidUpdate() {
m.ZP.setSystemTrayIcon(this.getIcon());
  }
  componentWillUnmount() {
m.ZP.setSystemTrayIcon(p);
  }
  render() {
return null;
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'getIcon', i = () => {
  let {
    deafened: e,
    muted: t,
    speaking: n,
    connected: i,
    unread: a
  } = this.props, s = p;
  return (0, I.isMac)() && !i ? s : (0, I.isLinux)() || !i ? (a && (s = 'UNREAD'), s) : s = e ? 'DEAFENED' : t ? 'MUTED' : n ? 'SPEAKING' : 'CONNECTED';
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
let S = () => null;
I.isPlatformEmbedded && (m.ZP.on('SYSTEM_TRAY_TOGGLE_MUTE', () => l.Z.toggleSelfMute()), m.ZP.on('SYSTEM_TRAY_TOGGLE_DEAFEN', () => l.Z.toggleSelfDeaf()), m.ZP.on('SYSTEM_TRAY_OPEN_VOICE_SETTINGS', () => {
  o.Z.open(g.oAB.VOICE);
}), S = r.ZP.connectStores([
  _.Z,
  d.Z,
  E.Z,
  c.default,
  h.Z,
  u.Z
], () => {
  let e = c.default.getTotalMentionCount(),
t = c.default.hasAnyUnread(),
n = h.Z.getPendingCount(),
i = u.Z.getDisableUnreadBadge();
  return {
connected: _.Z.isConnected(),
speaking: E.Z.isCurrentUserSpeaking(),
muted: d.Z.isSelfMute() || d.Z.isSelfMutedTemporarily(),
deafened: d.Z.isSelfDeaf(),
unread: !i && !!(t || e + n > 0)
  };
})(T)), t.Z = S;