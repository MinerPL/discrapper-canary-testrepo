n(47120);
var r = n(147913),
  i = n(604375),
  a = n(202511),
  s = n(828354);
class o extends r.Z {
  handlePostConnectionOpen() {
a.d.trigger();
  }
  handleVoiceChannelSelect() {
s.M.trigger();
  }
  handleCallCreate() {
s.M.trigger();
  }
  handleUserSettingsModalOpen() {
i.X.trigger();
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
  VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
  CALL_CREATE: this.handleCallCreate,
  USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new o();