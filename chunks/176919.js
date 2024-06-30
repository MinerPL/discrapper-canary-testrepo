n.d(t, {
    D6: function () {
        return A;
    },
    bp: function () {
        return s;
    },
    wr: function () {
        return i;
    }
});
var r, i, u = n(470079), l = n(442837), o = n(846519), E = n(355467), a = n(38618), _ = n(409813), S = n(505649);
function s(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = arguments.length > 4 ? arguments[4] : void 0;
    u.useEffect(() => {
        if (null != e)
            1 === t && e !== _.h8.AWAITING_AUTHENTICATION ? n(_.h8.AWAITING_AUTHENTICATION) : e === _.h8.AWAITING_AUTHENTICATION && (2 === t ? n(_.h8.REVIEW) : 3 === t && (r ? null != i ? i() : n(_.h8.REVIEW) : n(_.h8.CONFIRM)));
    }, [
        e,
        t,
        n,
        r,
        i
    ]);
}
(r = i || (i = {}))[r.PENDING = 1] = 'PENDING', r[r.ERROR = 2] = 'ERROR', r[r.NONE = 3] = 'NONE';
function A(e) {
    let t = (0, l.e7)([S.Z], () => S.Z.awaitingPaymentId), n = (0, l.e7)([a.Z], () => a.Z.isConnected()), r = u.useRef(new o.Xp());
    u.useEffect(() => {
        n || null == t || 1 !== e ? r.current.stop() : r.current.start(5000, () => (0, E.O1)(t));
    }, [
        t,
        e,
        n
    ]);
}
