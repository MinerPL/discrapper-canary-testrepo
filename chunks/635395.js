"use strict";
n.r(t), n("47120");
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("846027"),
  o = n("230711"),
  u = n("888369"),
  d = n("131951"),
  c = n("292959"),
  f = n("19780"),
  E = n("699516"),
  h = n("606304"),
  _ = n("358085"),
  C = n("998502"),
  m = n("981631");
(s = a || (a = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
let S = (0, _.isMac)() ? null : "DEFAULT";
class I extends l.PureComponent {
  componentDidMount() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    C.default.setSystemTrayIcon(S)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "getIcon", a = () => {
      let {
        deafened: e,
        muted: t,
        speaking: n,
        connected: a,
        unread: s
      } = this.props, l = S;
      return (0, _.isMac)() && !a ? l : (0, _.isLinux)() || !a ? (s && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
let p = () => null;
_.isPlatformEmbedded && (C.default.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.default.toggleSelfMute()), C.default.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.default.toggleSelfDeaf()), C.default.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.default.open(m.UserSettingsSections.VOICE)
}), p = i.default.connectStores([f.default, d.default, h.default, u.default, E.default, c.default], () => {
  let e = u.default.getTotalMentionCount(),
    t = u.default.hasAnyUnread(),
    n = E.default.getPendingCount(),
    a = c.default.getDisableUnreadBadge();
  return {
    connected: f.default.isConnected(),
    speaking: h.default.isCurrentUserSpeaking(),
    muted: d.default.isSelfMute() || d.default.isSelfMutedTemporarily(),
    deafened: d.default.isSelfDeaf(),
    unread: !a && !!(t || e + n > 0)
  }
})(I)), t.default = p