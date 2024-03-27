"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("139321"),
  r = n("269596"),
  o = n("42203"),
  u = n("42887"),
  d = n("18494"),
  c = n("227602"),
  f = n("447973"),
  E = n("305122"),
  h = n("235004"),
  _ = n("245463"),
  C = n("520497"),
  S = n("812809"),
  I = n("435895"),
  m = n("49111"),
  p = n("353927");
class T extends f.default {
  _initialize() {
    super._initialize(), !__OVERLAY__ && l.default.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), !__OVERLAY__ && l.default.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.playingSoundsWeb = new Map, this._stopAndClearSounds = () => {
      u.default.supports(p.Features.SAMPLE_PLAYBACK) && u.default.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }, this._playSound = async function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = null != s && d.default.getVoiceChannelId() === s;
      if ((null == s || l) && !u.default.isDeaf() && !h.default.isLocalSoundboardMuted(a)) try {
        let s = {
          soundKey: "".concat(a, "-").concat(e),
          soundURL: (0, C.default)(e),
          soundVolume: (0, S.default)(n),
          reportSoundStartedPlaying: () => (0, E.reportSoundStartedPlaying)(e, a)
        };
        u.default.supports(p.Features.SAMPLE_PLAYBACK) ? await (0, I.playDesktopSound)(s) : await (0, I.playWebSound)(s, t.playingSoundsWeb)
      } finally {
        (0, E.reportSoundFinishedPlaying)(e, a)
      }
    }, this._handleOverlaySoundboardSoundsFetchRequest = () => {
      (0, E.maybeFetchSoundboardSounds)()
    }, this._handleOpenEducationModal = (e, t) => {
      if (null == e) return;
      let l = o.default.getChannel(t),
        u = c.default.getKeybindForAction(m.GlobalKeybindActions.SOUNDBOARD_HOLD);
      null != l && (0, _.default)(l) && null != u && r.default.hasHotspot(i.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("170441").then(n.bind(n, "170441"));
        return n => (0, a.jsx)(t, {
          ...n,
          guildId: e,
          keybind: u,
          channel: l
        })
      })
    }
  }
}
var g = new T