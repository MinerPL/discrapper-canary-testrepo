t.d(n, {
    M: function () {
        return r;
    }
}), t(47120);
var i = t(442837), l = t(580130);
function r(e) {
    return (0, i.e7)([l.Z], () => {
        let n = l.Z.getForSku(e);
        if (null == n)
            return !1;
        let t = 0;
        for (let e of n) {
            var i, r;
            let n = null !== (r = null === (i = e.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : 1 / 0;
            n >= t && (t = n);
        }
        return t > new Date().getTime();
    }, [e]);
}
