n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(70956), a = n(709054);
let s = 2 * i.Z.Millis.HOUR;
function l(e, t, n) {
    if (null == e)
        return !1;
    let i = null != t.activity ? t.activity.party_id : null, l = null != i && (null == e.party || e.party.id !== i), r = a.default.extractTimestamp(t.id) + s < Date.now(), o = null != e.application_id && e.application_id !== n;
    return !l && !r && !o;
}
