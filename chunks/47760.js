n.d(t, {
    VK: function () {
        return s;
    },
    qu: function () {
        return o;
    }
}),
    n(47120);
var r = n(44315),
    i = n(469115),
    a = n(231338);
function s(e) {
    let { angle: t, colors: n } = e;
    return 'linear-gradient('.concat(t, 'deg, ').concat(
        n
            .map((e) => {
                let { token: t, stop: n } = e;
                return ''.concat((0, r.Lq)(t), ' ').concat(n, '%');
            })
            .join(', '),
        ')'
    );
}
function o(e, t) {
    return e === t || (e === a.BR.DARK && t === a.BR.DARKER) || (e === a.BR.DARKER && t === a.BR.DARK) || !1;
}
[...i.bV, ...i.Qf];
