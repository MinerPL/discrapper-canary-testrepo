n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(812206);
function i(e) {
    var t;
    let { applicationId: n, activityConfigs: i, applications: a } = e,
        s = null !== (t = null == a ? void 0 : a.find((e) => e.id === n)) && void 0 !== t ? t : r.Z.getApplication(n),
        o = i.find((e) => e.application_id === n);
    return null == o || null == s
        ? null
        : {
              activity: o,
              application: s
          };
}
