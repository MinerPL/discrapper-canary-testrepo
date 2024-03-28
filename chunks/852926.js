"use strict";
n.r(t), n.d(t, {
  getDeprecatedVoiceSettings: function() {
    return h
  },
  getVoiceSettings: function() {
    return _
  },
  unlockOverlay: function() {
    return f
  },
  validateSocketClient: function() {
    return E
  }
});
var a = n("13245"),
  s = n("808506"),
  l = n("998502"),
  i = n("13140"),
  r = n("996106"),
  o = n("914946"),
  u = n("186901"),
  d = n("981631");
let c = ["207646673902501888"];

function f(e) {
  return s.default.isReady(e) ? (a.default.setLocked(!1, e), {
    lock() {
      a.default.setLocked(!0, e)
    },
    context: d.AppContext.OVERLAY
  }) : (l.default.focus(null, !0), {
    lock() {
      l.default.setForegroundProcess(e)
    },
    context: d.AppContext.APP
  })
}
let E = async (e, t, n) => {
  if ((0, o.validateOriginAndUpdateSocket)(e, t), (null == n || "" === n) && (0, o.isMatchingOrigin)(t)) return e.authorization.scopes = [u.RPC_PRIVATE_SCOPE, u.RPC_PRIVATE_LIMITED_SCOPE], Promise.resolve();
  if (null == n || "" === n) return Promise.reject(new r.default({
    closeCode: d.RPCCloseCodes.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let a = l.default.releaseChannel !== d.PublicReleaseChannels.CANARY && !c.includes(n) && e.transport !== u.TransportTypes.POST_MESSAGE;
  return await (0, o.processSocketThrottlers)(n, a), (0, o.fetchApplicationsRPC)(e, n, t)
}, h = () => (0, o.getDeprecatedVoiceSettingsWithShortcut)(e => {
  let t = [];
  if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut)) t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null !== (t = (0, i.codeToKey)(e)) && void 0 !== t ? t : "unknown"
    }
  });
  return t
}), _ = e => (0, o.getVoiceSettingsWithShortcut)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, i.toString)(e.modeOptions.shortcut)), t
})