t.d(n, {
    J: function () {
        return r;
    },
    l: function () {
        return o;
    }
}), t(47120);
var l = t(693824), a = t(169040);
function r(e) {
    let n, {
            canvas: t,
            badges: r,
            startPosition: o,
            maxWidth: i
        } = e;
    for (let {
                iconPath: e,
                text: u
            } of (t.setFont({
            size: 12,
            truncate: l.GX.None
        }), r)) {
        let l = null != n ? n.w + n.x + a.PW : o, r = null != n ? n.w + n.x + a.PW + a.NC : o + a.NC;
        t.drawPath(e, {
            x: l,
            y: a.f0
        }, !0, 0.6), n = t.drawText(u, {
            x: r,
            y: a.m2,
            w: i
        }, !0);
    }
}
function o(e) {
    let {
        canvas: n,
        avatarSrcs: t,
        position: {
            x: a,
            y: r
        },
        avatarImageSize: o
    } = e;
    for (let e = 0; e < t.length; e++)
        e < t.length - 1 && n.clipRoundedRect({
            x: a + (e + 1) * (o - 8) - 2,
            y: r - 1,
            w: o + 2,
            h: o + 2
        }, o / 2, !0), n.drawRoundedImage(t[e], {
            x: a + e * (o - 8),
            y: r
        }, {
            w: o,
            h: o
        }, 50, { fillMode: l.JU.Cover }), n.restoreContext();
}
