n(724458);
var r, i, a, o, s = n(442837),
  l = n(46973),
  u = n(570140),
  c = n(581883),
  d = n(131951),
  _ = n(944486),
  E = n(594174),
  f = n(647177);
let h = !1,
  p = null,
  m = !1,
  I = {};

function T(e) {
  var t;
  let n = E.default.getCurrentUser();
  if (null == n)
return !1;
  let r = null != e ? e : (0, f.Gx)(null === (t = c.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
  return null != _.Z.getVoiceChannelId() && d.Z.isVideoEnabled() && null != r;
}

function g() {
  p !== _.Z.getVoiceChannelId() && (m = !1), T() && (m = !0), p = _.Z.getVoiceChannelId();
}
class S extends(r = s.ZP.Store) {
  initialize() {
this.waitFor(c.Z, _.Z, d.Z), this.syncWith([
  _.Z,
  d.Z
], g);
  }
  get videoFilterAssets() {
return I;
  }
  get hasBeenApplied() {
return h;
  }
  get hasUsedBackgroundInCall() {
return m;
  }
}
o = 'VideoBackgroundStore', (a = 'displayName') in(i = S) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new S(u.Z, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
let {
  assets: t
} = e;
I = t.reduce((e, t) => ({
  ...e,
  [t.id]: t
}), {});
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
let {
  videoFilterAsset: t
} = e;
I = {
  ...I,
  [t.id]: t
};
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
let {
  videoFilterAsset: t
} = e;
I = {
  ...I
}, delete I[t.id];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
let {
  backgroundOption: t
} = e;
T(t) && (m = !0);
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
let {
  settings: t
} = e;
l.TO.CAMERA_BACKGROUND_LIVE in t && (h = !0);
  }
});