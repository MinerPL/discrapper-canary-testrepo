n.d(t, {
    I: function () {
        return a;
    },
    T: function () {
        return l;
    }
});
var i = n(673125);
function a(e, t, n, i, a) {
    e.save(), e.beginPath(), e.fillStyle = i, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + a, 0, 2 * Math.PI), e.fill(), e.restore();
}
function l(e, t, n, a) {
    e.save();
    let l = i.Z.getAvatarImage(a);
    if (null == l)
        return;
    let s = 20 * window.devicePixelRatio;
    e.beginPath(), e.arc(t, n, s / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(l, t - s / 2, n - s / 2, s, s), e.restore();
}
