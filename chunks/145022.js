"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(314897),
  o = n(908442),
  a = n(981631),
  l = n(689938);

function u(e, t, n) {
  if (null == e || null == t) return {
    valid: !1,
    reason: l.Z.Messages.BUILD_OVERRIDE_INVALID
  };
  let {
    releaseChannel: i,
    expiresAt: u,
    validForUserIds: _,
    allowedVersions: d,
    targetBuildOverride: c
  } = e, E = Object.keys(c);
  if (0 === r().intersection(E, t).length) return {
    valid: !1,
    reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
      requestedTargets: E.map(e => {
        var t;
        return null !== (t = o.o0[e]) && void 0 !== t ? t : "unknown"
      }).join(", ")
    })
  };
  if (null != i && i !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
    let e = i === a.R5N.PTB ? i.toUpperCase() : "".concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
    return {
      valid: !1,
      reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
        releaseChannel: e
      })
    }
  }
  if (null != d && (null == n || !d.includes(n))) return {
    valid: !1,
    reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
      releaseChannel: d.join(", ")
    })
  };
  let I = null != u ? new Date(u).getTime() : null;
  return null != I && I < Date.now() ? {
    valid: !1,
    reason: l.Z.Messages.BUILD_OVERRIDE_EXPIRED
  } : _.length > 0 && !_.includes(s.default.getId()) ? {
    valid: !1,
    reason: l.Z.Messages.BUILD_OVERRIDE_INVALID_USER
  } : {
    valid: !0
  }
}