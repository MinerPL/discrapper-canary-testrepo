n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140),
  r = n(317770),
  l = n(314897),
  o = n(592125),
  c = n(797258),
  d = n(590415),
  u = n(981631);
let _ = 'STAGE_INVITED_TO_SPEAK_MODAL';
class h extends r.Z {
  _initialize() {
a.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
  }
  _terminate() {
a.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
  }
  constructor(...e) {
var t, a, r;
super(...e), t = this, a = 'handleVoiceStateUpdates', r = e => {
  var t;
  let {
    voiceStates: a
  } = e, r = l.default.getId(), h = null === (t = c.Z.getSession()) || void 0 === t ? void 0 : t.sessionId, E = a.find(e => e.userId === r && e.sessionId === h);
  if (null == E)
    return;
  let I = E.channelId;
  if (null == I) {
    (0, s.hasModalOpen)(_) && (0, s.closeModal)(_);
    return;
  }
  let m = o.Z.getChannel(I);
  if (!(null == m ? void 0 : m.isGuildStageVoice()))
    return;
  let g = (0, d.gf)(E) === d.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  if (null != m && g) {
    if ((0, s.hasModalOpen)(_))
      return;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('13878').then(n.bind(n, 113140));
      return t => (0, i.jsx)(e, {
        ...t,
        channel: m
      });
    }, {
      modalKey: _,
      onCloseRequest: u.VqG
    });
  }
}, a in t ? Object.defineProperty(t, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[a] = r;
  }
}
t.Z = new h();