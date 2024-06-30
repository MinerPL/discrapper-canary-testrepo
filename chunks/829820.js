n.d(t, {
    Fe: function () {
        return S;
    },
    Ih: function () {
        return g;
    },
    Lz: function () {
        return A;
    }
}), n(47120);
var r = n(470079), i = n(442837), a = n(846519), o = n(110924), s = n(314897), l = n(70956), u = n(51144), c = n(768419), d = n(300020), _ = n(456190), E = n(239470), f = n(894344), h = n(203777), p = n(616922);
let m = 30 * l.Z.Millis.SECOND;
function I(e) {
    let {
            currentUserTrackId: t,
            syncingWithUser: n,
            syncingWithParty: i
        } = e, [s, l] = r.useState(!1), [u] = r.useState(() => new a.V7()), c = (0, o.Z)(t);
    r.useEffect(() => {
        s && (t !== c || n || i) && (l(!1), u.stop());
    }, [
        t,
        c,
        n,
        i,
        s,
        u
    ]);
    let d = r.useCallback(() => {
            l(!0), u.start(m, () => l(!1));
        }, [u]), _ = r.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return r.useEffect(() => () => u.stop(), [u]), {
        loading: s,
        startLoading: d,
        clearLoading: _
    };
}
function T(e, t) {
    return (0, i.cj)([
        c.Z,
        s.default
    ], () => (0, E.Z)(c.Z, s.default, t, e), [
        e,
        t
    ]);
}
function g(e, t, n) {
    let i = T(e, t), {
            notPlayable: a,
            isCurrentUser: o,
            playingSameTrack: s
        } = i, {
            loading: l,
            startLoading: u,
            clearLoading: c
        } = I(i), E = r.useCallback(() => {
            u(), (0, h.Z)(i, p.kG.USER_ACTIVITY_PLAY, n).catch(c);
        }, [
            i,
            n,
            u,
            c
        ]);
    return {
        label: (0, d.Z)(i, p.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, _.Z)(i, p.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (o || a || s),
        loading: l,
        onClick: E,
        spotifyData: i
    };
}
function S(e, t, n, i) {
    let a = null != i ? i : u.ZP.getName(t), o = T(e, t), {
            syncingWithUser: s,
            syncingWithParty: l,
            isCurrentUser: c
        } = o, {
            loading: E,
            startLoading: h,
            clearLoading: m
        } = I(o), g = r.useCallback(() => {
            h(), (0, f.Z)(o, p.kG.USER_ACTIVITY_SYNC, n).catch(m);
        }, [
            o,
            n,
            h,
            m
        ]);
    return {
        label: (0, d.Z)(o, p.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, _.Z)(o, p.kG.USER_ACTIVITY_SYNC, a),
        disabled: !E && (c || s || l),
        loading: E,
        onClick: g,
        spotifyData: o
    };
}
function A(e, t, n) {
    let i = T(e, t), {
            notPlayable: a,
            syncingWithUser: o,
            syncingWithParty: s,
            isCurrentUser: l
        } = i, {
            loading: u,
            startLoading: c,
            clearLoading: E
        } = I(i), h = r.useCallback(() => {
            c(), (0, f.Z)(i, p.kG.EMBED_SYNC, n).catch(E);
        }, [
            i,
            n,
            c,
            E
        ]);
    return {
        label: (0, d.Z)(i, p.kG.EMBED_SYNC),
        tooltip: (0, _.Z)(i, p.kG.EMBED_SYNC),
        disabled: !u && (l || o || s || a),
        loading: u,
        onClick: h,
        spotifyData: i
    };
}
