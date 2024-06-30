n.d(t, {
    VK: function () {
        return a;
    },
    qu: function () {
        return o;
    }
}), n(47120), n(524437);
var r = n(44315);
n(469115);
var i = n(231338);
function a(e) {
    let {
        angle: t,
        colors: n
    } = e;
    return 'linear-gradient('.concat(t, 'deg, ').concat(n.map(e => {
        let {
            token: t,
            stop: n
        } = e;
        return ''.concat((0, r.Lq)(t), ' ').concat(n, '%');
    }).join(', '), ')');
}
function o(e, t) {
    return e === t || e === i.BR.DARK && t === i.BR.DARKER || e === i.BR.DARKER && t === i.BR.DARK || !1;
}
