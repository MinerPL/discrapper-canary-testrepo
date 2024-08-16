n.d(t, {
    r: function () {
        return s;
    }
});
var r = n(709054);
let i = 0,
    a = new r.SnowflakeSequence();
function s() {
    let e = Date.now();
    return i !== e && (a.reset(), (i = e)), r.default.fromTimestampWithSequence(e, a);
}
