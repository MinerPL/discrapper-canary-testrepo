t.d(e, {
    M: function () {
        return r;
    }
}),
    t(47120);
var i = t(442837),
    l = t(580130);
function r(n) {
    return (0, i.e7)(
        [l.Z],
        () => {
            let e = l.Z.getForSku(n);
            if (null == e) return !1;
            let t = 0;
            for (let n of e) {
                var i, r;
                let e = null !== (r = null === (i = n.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : 1 / 0;
                e >= t && (t = e);
            }
            return t > new Date().getTime();
        },
        [n]
    );
}
