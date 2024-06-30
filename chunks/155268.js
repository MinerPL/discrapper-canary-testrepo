n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(695103), i = n(115130);
function a(e) {
    let t = i.Z.getState();
    return t.useActivityUrlOverride && null != t.activityUrlOverride && '' !== t.activityUrlOverride ? t.activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : function (e) {
        let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
        return null == t ? null : 'https://'.concat(e, '.').concat(t);
    }(e);
}
