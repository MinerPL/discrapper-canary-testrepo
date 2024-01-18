"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("106442"), n("175143");
var a = n("351720"),
  s = n("404118"),
  i = n("990766"),
  l = n("928609"),
  r = n("373469"),
  o = n("42203"),
  u = n("305961"),
  d = n("42887"),
  c = n("957255"),
  f = n("568307"),
  E = n("18494"),
  _ = n("703370"),
  h = n("374014"),
  C = n("223913"),
  I = n("479788"),
  T = n("375202"),
  S = n("180524"),
  m = n("353927"),
  p = n("782340");
async function A() {
  let e = r.default.getStreamerActiveStreamMetadata(),
    t = (0, T.default)(f.default, _.default);
  if (null != t && null == e) return {
    pid: t.pid
  };
  let n = await (0, a.default)(d.default.getMediaEngine(), [m.DesktopSources.WINDOW]),
    s = n.at(0);
  if (void 0 !== s) {
    if (null != t && s.id === "window:".concat(t.windowHandle)) {
      if ((null == e ? void 0 : e.pid) === t.pid || (null == e ? void 0 : e.sourceId) === "window:".concat(t.windowHandle)) return;
      return {
        pid: t.pid
      }
    }
    if (s.id !== (null == e ? void 0 : e.sourceId)) return {
      sourceId: s.id,
      sourceName: s.name
    }
  }
}
async function g() {
  if (!(0, I.default)(d.default)) return !1;
  let e = E.default.getVoiceChannelId(),
    t = o.default.getChannel(e);
  if (null == t) return !1;
  let n = await A();
  if (void 0 === n) {
    let e = r.default.getCurrentUserActiveStream();
    return null != e && (0, i.stopStream)((0, h.encodeStreamKey)(e), !1), !1
  }
  let a = t.getGuildId();
  if (!(0, C.canStreamInChannel)(t, u.default, c.default, !1)) return !1;
  (0, i.startStream)(a, t.id, n);
  let f = await l.default.hasPermission(S.NativePermissionTypes.SCREEN_RECORDING, {
    showAuthorizationError: !1
  });
  return !f && s.default.show({
    title: p.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
    body: p.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
  }), !0
}