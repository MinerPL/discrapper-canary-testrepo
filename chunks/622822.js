n.d(t, {
    b: function () {
        return r;
    }
});
var i = n(594174), s = n(709054);
let a = new Date('06/16/2020');
function r() {
    let e = i.default.getCurrentUser();
    return null != e && s.default.extractTimestamp(e.id) > a.getTime() && !e.isClaimed() && null == e.nsfwAllowed;
}
