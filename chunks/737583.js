n.d(e, {
    J: function () {
        return l;
    },
    l: function () {
        return u;
    }
}),
    n(47120);
var a = n(693824),
    r = n(169040);
function l(t) {
    let e,
        { canvas: n, badges: l, startPosition: u, maxWidth: i } = t;
    for (let { iconPath: t, text: o } of (n.setFont({
        size: 12,
        family: r.I8,
        weight: r.Ue,
        truncate: a.GX.None
    }),
    l)) {
        let a = null != e ? e.w + e.x + r.PW : u,
            l = null != e ? e.w + e.x + r.PW + r.NC : u + r.NC;
        n.drawPath(
            t,
            {
                x: a,
                y: r.f0
            },
            !0,
            0.6
        ),
            (e = n.drawText(
                o,
                {
                    x: l,
                    y: r.m2,
                    w: i
                },
                !0
            ));
    }
}
function u(t) {
    let {
        canvas: e,
        avatarSrcs: n,
        position: { x: r, y: l },
        avatarImageSize: u
    } = t;
    for (let t = 0; t < n.length; t++)
        t < n.length - 1 &&
            e.clipRoundedRect(
                {
                    x: r + (t + 1) * (u - 8) - 2,
                    y: l - 1,
                    w: u + 2,
                    h: u + 2
                },
                u / 2,
                !0
            ),
            e.drawRoundedImage(
                n[t],
                {
                    x: r + t * (u - 8),
                    y: l
                },
                {
                    w: u,
                    h: u
                },
                50,
                { fillMode: a.JU.Cover }
            ),
            e.restoreContext();
}
