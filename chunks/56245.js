"use strict";
n.r(t), n.d(t, {
  unlockOverlay: function() {
    return f
  },
  validateSocketClient: function() {
    return E
  },
  getDeprecatedVoiceSettings: function() {
    return h
  },
  getVoiceSettings: function() {
    return _
  }
});
var a = n("539405"),
  s = n("860957"),
  l = n("50885"),
  i = n("13798"),
  r = n("861309"),
  o = n("578287"),
  u = n("492249"),
  d = n("49111");
let c = ["207646673902501888"];

function f(e) {
  let t = s.default.isReady(e);
  return t ? (a.default.setLocked(!1, e), {
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