l.d(t, {
    Z: function () {
        return i;
    }
});
var n = l(735250);
l(470079);
var a = l(528011),
    o = l(533244),
    s = l(596482);
function i(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: i, isUnderLockdown: r } = (0, a.mI)(t.id),
        C = !1;
    return (null != i && (C = (0, o.i9)(i) && l), C || r)
        ? (0, n.jsx)(s.Z, {
              guild: t,
              incidentData: i,
              isUnderLockdown: r,
              isRaidDetected: C
          })
        : null;
}
