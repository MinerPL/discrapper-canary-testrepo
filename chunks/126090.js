"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a, s, l = n("884691"),
  i = n("446674"),
  r = n("629109"),
  o = n("79112"),
  u = n("952451"),
  d = n("42887"),
  c = n("385649"),
  f = n("945956"),
  E = n("27618"),
  h = n("280168"),
  _ = n("773336"),
  C = n("50885"),
  S = n("49111");
(s = a || (a = {})).DEFAULT = "DEFAULT", s.UNREAD = "UNREAD", s.CONNECTED = "CONNECTED", s.SPEAKING = "SPEAKING", s.MUTED = "MUTED", s.DEAFENED = "DEAFENED";
let I = (0, _.isMac)() ? null : "DEFAULT";
class m extends l.PureComponent {
  componentDidMount() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    C.default.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    C.default.setSystemTrayIcon(I)
  }
  render() {
    return null
  }
  constructor(...e) {
    super(...e), this.getIcon = () => {
      let {
        deafened: e,
        muted: t,
        speaking: n,
        connected: a,
        unread: s
      } = this.props, l = I;
      return (0, _.isMac)() && !a ? l : (0, _.isLinux)() || !a ? (s && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    }
  }
}
let p = () => null;
_.isPlatformEmbedded && (C.default.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.default.toggleSelfMute()), C.default.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.default.toggleSelfDeaf()), C.default.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  o.default.open(S.UserSettingsSections.VOICE)
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
})(m));
var T = p