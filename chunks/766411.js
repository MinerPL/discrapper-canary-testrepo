n.d(t, {
    E: function () {
        return d;
    }
});
var l = n(470079),
    r = n(399606),
    a = n(661111),
    o = n(706454),
    s = n(802098),
    i = n(596401);
function c(e, t) {
    let {
        changelog: n,
        loadState: o,
        defaultChangelog: c,
        defaultLoadState: d
    } = (0, r.cj)(
        [s.Z],
        () => {
            let n = null != e ? s.Z.getChangelog(e, t) : null,
                l = null != e ? s.Z.getChangelog(e, 'en-US') : null,
                r = null != e && s.Z.getChangelogLoadStatus(e, 'en-US');
            return {
                changelog: n,
                loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
                defaultChangelog: l,
                defaultLoadState: r
            };
        },
        [e, t]
    );
    return (l.useEffect(() => {
        null != e && null == n && o === i.LU.NOT_LOADED && a.Z.fetchChangelog(e, t);
    }, [e, n, o, t]),
    null == e)
        ? {
              id: e,
              changelog: null,
              loaded: !1
          }
        : null == n && o === i.LU.LOADED_FAILURE
          ? {
                id: e,
                changelog: c,
                loaded: d !== i.LU.NOT_LOADED
            }
          : {
                id: e,
                changelog: n,
                loaded: o !== i.LU.NOT_LOADED
            };
}
function d() {
    let e = (0, r.e7)([o.default], () => o.default.locale),
        t = (0, r.e7)([s.Z], () => s.Z.latestChangelogId()),
        n = (0, r.e7)([s.Z], () => s.Z.getConfig()),
        l = null != n && 0 === Object.keys(n).length,
        a = null != n && Object.keys(n).length > 0 && null == t,
        i = (0, r.e7)([s.Z], () => s.Z.overrideId()),
        { changelog: d, loaded: h } = c(t, e),
        { changelog: u, loaded: g } = c(i, e);
    return null == i || (null == u && g)
        ? {
              id: t,
              changelog: d,
              loaded: !!l || h,
              clientTooOld: a
          }
        : {
              id: i,
              changelog: u,
              loaded: g,
              clientTooOld: !1
          };
}
