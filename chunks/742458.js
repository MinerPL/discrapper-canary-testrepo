var n, r;
s.d(t, {
    Nz: function () {
        return n;
    },
    o9: function () {
        return o;
    }
}),
    ((r = n || (n = {})).PHONE = 'phone'),
    (r.EMAIL = 'email');
let i = /^[-() \d]+$/,
    a = (e) => e.startsWith('+');
function o(e, t) {
    return 'phone' === e ? !a(t) : 'email' !== e && !(t.length < 3) && i.test(t);
}
