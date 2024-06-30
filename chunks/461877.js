function n(e) {
    return ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
}
function a(e) {
    let [t, s] = e.split('@');
    return ''.concat('*'.repeat(t.length), '@').concat(s);
}
s.d(t, {
    E: function () {
        return a;
    },
    n: function () {
        return n;
    }
}), s(47120);
