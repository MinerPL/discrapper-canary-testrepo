n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(314897),
    s = n(908442),
    o = n(981631),
    l = n(689938);
function u(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.Z.Messages.BUILD_OVERRIDE_INVALID
        };
    let { releaseChannel: r, expiresAt: u, validForUserIds: c, allowedVersions: d, targetBuildOverride: _ } = e,
        E = Object.keys(_);
    if (0 === i().intersection(E, t).length)
        return {
            valid: !1,
            reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                requestedTargets: E.map((e) => {
                    var t;
                    return null !== (t = s.o0[e]) && void 0 !== t ? t : 'unknown';
                }).join(', ')
            })
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === o.R5N.PTB ? r.toUpperCase() : ''.concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
        return {
            valid: !1,
            reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({ releaseChannel: e })
        };
    }
    if (null != d && (null == n || !d.includes(n)))
        return {
            valid: !1,
            reason: l.Z.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({ releaseChannel: d.join(', ') })
        };
    let f = null != u ? new Date(u).getTime() : null;
    return null != f && f < Date.now()
        ? {
              valid: !1,
              reason: l.Z.Messages.BUILD_OVERRIDE_EXPIRED
          }
        : c.length > 0 && !c.includes(a.default.getId())
          ? {
                valid: !1,
                reason: l.Z.Messages.BUILD_OVERRIDE_INVALID_USER
            }
          : { valid: !0 };
}
