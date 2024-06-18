"use strict";
n(724458);
var i, r, s, o, a = n(442837),
  l = n(46973),
  u = n(570140),
  _ = n(581883),
  d = n(131951),
  c = n(944486),
  E = n(594174),
  I = n(647177);
let T = !1,
  h = null,
  S = !1,
  f = {};

function N(e) {
  var t;
  let n = E.default.getCurrentUser();
  if (null == n) return !1;
  let i = null != e ? e : (0, I.Gx)(null === (t = _.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
  return null != c.Z.getVoiceChannelId() && d.Z.isVideoEnabled() && null != i
}

function A() {
  h !== c.Z.getVoiceChannelId() && (S = !1), N() && (S = !0), h = c.Z.getVoiceChannelId()
}
class m extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, c.Z, d.Z), this.syncWith([c.Z, d.Z], A)
  }
  get videoFilterAssets() {
    return f
  }
  get hasBeenApplied() {
    return T
  }
  get hasUsedBackgroundInCall() {
    return S
  }
}
o = "VideoBackgroundStore", (s = "displayName") in(r = m) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new m(u.Z, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
    let {
      assets: t
    } = e;
    f = t.reduce((e, t) => ({
      ...e,
      [t.id]: t
    }), {})
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
    let {
      videoFilterAsset: t
    } = e;
    f = {
      ...f,
      [t.id]: t
    }
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
    let {
      videoFilterAsset: t
    } = e;
    f = {
      ...f
    }, delete f[t.id]
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
    let {
      backgroundOption: t
    } = e;
    N(t) && (S = !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    l.TO.CAMERA_BACKGROUND_LIVE in t && (T = !0)
  }
})