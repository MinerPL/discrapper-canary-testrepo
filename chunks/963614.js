n.d(t, {
    h: function () {
        return i;
    }
});
var r = n(701488);
function i(e) {
    var t, n;
    if (r.Pc.has(e.id))
        return !0;
    if ('embeddedActivityConfig' in e)
        return (null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    if ('embedded_activity_config' in e)
        return (null === (n = e.embedded_activity_config) || void 0 === n ? void 0 : n.displays_advertisements) === !0;
    else
        return !1;
}
