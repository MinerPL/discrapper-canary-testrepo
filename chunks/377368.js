n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140),
  r = n(536442),
  l = n(810788),
  o = n(592125),
  c = n(131951),
  d = n(944486),
  u = n(556296),
  _ = n(131468),
  h = n(208049),
  E = n(763296),
  I = n(641015),
  m = n(22382),
  g = n(747071),
  p = n(49230),
  T = n(981631),
  S = n(65154);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class f extends _.Z {
  _initialize() {
super._initialize(), !__OVERLAY__ && a.Z.subscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
  }
  _terminate() {
super._terminate(), !__OVERLAY__ && a.Z.unsubscribe('OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', this._handleOverlaySoundboardSoundsFetchRequest);
  }
  constructor(...e) {
var t;
super(...e), t = this, C(this, 'playingSoundsWeb', new Map()), C(this, '_stopAndClearSounds', () => {
  c.Z.supports(S.AN.SAMPLE_PLAYBACK) && c.Z.getMediaEngine().eachConnection(e => {
    e.stopAllSamplesLocalPlayback();
  }), this.playingSoundsWeb.forEach(e => {
    e.pause(), e.src = '';
  }), this.playingSoundsWeb = new Map();
}), C(this, '_playSound', async function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    i = arguments.length > 2 ? arguments[2] : void 0,
    s = arguments.length > 3 ? arguments[3] : void 0,
    a = null != s && d.Z.getVoiceChannelId() === s;
  if ((null == s || a) && !c.Z.isDeaf() && !E.Z.isLocalSoundboardMuted(i))
    try {
      let s = {
        soundKey: ''.concat(i, '-').concat(e),
        soundURL: (0, m.Z)(e),
        soundVolume: (0, g.Z)(n),
        reportSoundStartedPlaying: () => (0, h.xR)(e, i)
      };
      c.Z.supports(S.AN.SAMPLE_PLAYBACK) ? await (0, p.$)(s) : await (0, p.h)(s, t.playingSoundsWeb);
    } finally {
      (0, h.R)(e, i);
    }
}), C(this, '_handleOverlaySoundboardSoundsFetchRequest', () => {
  (0, h.w)();
}), C(this, '_handleOpenEducationModal', (e, t) => {
  if (null == e)
    return;
  let a = o.Z.getChannel(t),
    c = u.Z.getKeybindForAction(T.kg4.SOUNDBOARD_HOLD);
  null != a && (0, I.Z)(a) && null != c && l.Z.hasHotspot(r.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e('69208').then(n.bind(n, 490166));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: e,
      keybind: c,
      channel: a
    });
  });
});
  }
}
t.Z = new f();