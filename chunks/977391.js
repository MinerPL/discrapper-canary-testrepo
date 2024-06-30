n.d(t, {
    ZP: function () {
        return d;
    },
    aJ: function () {
        return u;
    }
}), n(411104), n(653041), n(47120);
var i = n(735250), a = n(470079), l = n(392711), s = n.n(l), r = n(38371), o = n(981631), c = n(126564);
function u(e) {
    let {
        compact: t,
        messageGroups: n,
        groupRange: i,
        attachments: a,
        fontSize: l,
        groupSpacing: c
    } = e;
    if (a > n)
        throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(a));
    let u = l / o.yqN.FONT_SIZE_DEFAULT, d = t ? r.iv : r.pk, h = t ? r.Pb : r.XX, p = 0, m = Array(n).fill(null).map(() => {
            let e = s().random(1, i);
            return p += c * u + d * u + (e - 1) * h * u, e;
        }), _ = m.map((e, t) => t), f = [];
    for (; f.length < a;) {
        let e = {
            width: s().random(140, 400),
            height: s().random(100, 320)
        };
        f.push([
            _.splice(s().random(0, _.length - 1), 1)[0],
            e
        ]), p += e.height + r.M9 * u;
    }
    return {
        messages: m,
        attachmentSpecs: f,
        totalHeight: p,
        groupSpacing: c
    };
}
function d(e) {
    let {
        compact: t,
        messages: n,
        attachmentSpecs: l,
        totalHeight: s,
        groupSpacing: o
    } = e;
    return a.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of l)
            e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: s },
            children: n.map((n, a) => (0, i.jsx)(r.ZP, {
                groupSpacing: o,
                compact: t,
                messages: n,
                attachmentSpecs: e[a]
            }, a))
        });
    }, [
        t,
        n,
        l,
        s,
        o
    ]);
}
