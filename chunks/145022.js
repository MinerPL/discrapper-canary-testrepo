n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(314897),
    s = n(908442),
    o = n(981631),
    l = n(388032);
function u(e, t, n) {
    if (null == e || null == t)
        return {
            valid: !1,
            reason: l.intl.string(l.t.d34xi4)
        };
    let { releaseChannel: r, expiresAt: u, validForUserIds: c, allowedVersions: d, targetBuildOverride: f } = e,
        _ = Object.keys(f);
    if (0 === i().intersection(_, t).length)
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.wySUzs, {
                requestedTargets: _.map((e) => {
                    var t;
                    return null !== (t = s.o0[e]) && void 0 !== t ? t : 'unknown';
                }).join(', ')
            })
        };
    if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
        let e = r === o.R5N.PTB ? r.toUpperCase() : ''.concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
        return {
            valid: !1,
            reason: l.intl.formatToPlainString(l.t.GOEF0N, { releaseChannel: e })
        };
    }
    if (null != d) {
        let e = !1;
        if (null == n) e = !1;
        else if (d.includes(n)) e = !0;
        else {
            let [t] = n.split('.');
            for (let n of d) {
                let [r, i] = n.split('.');
                if ('*' === i && t === r) {
                    e = !0;
                    break;
                }
            }
        }
        if (!e)
            return {
                valid: !1,
                reason: l.intl.formatToPlainString(l.t.GOEF0N, { releaseChannel: d.join(', ') })
            };
    }
    let h = null != u ? new Date(u).getTime() : null;
    return null != h && h < Date.now()
        ? {
              valid: !1,
              reason: l.intl.string(l.t['8eRE6e'])
          }
        : c.length > 0 && !c.includes(a.default.getId())
          ? {
                valid: !1,
                reason: l.intl.string(l.t.qZgV0d)
            }
          : { valid: !0 };
}
