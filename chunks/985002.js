n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var s = n(470079),
    a = n(881052),
    r = n(280570),
    i = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = s.useState(!1),
        [d, _] = s.useState(!1),
        [u, E] = s.useState(!1),
        [T, I] = s.useState(!1),
        [R, C] = s.useState(!1),
        [g, p] = s.useState(!1),
        [N, A] = s.useState(!1),
        [m, f] = s.useState(!1),
        S = o || d || u || T || g || m,
        h = s.useCallback(
            async (e) => {
                if (!S) {
                    c(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [S, t, n]
        ),
        M = s.useCallback(
            async (e) => {
                if (!S) {
                    _(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [S, t, n]
        ),
        x = s.useCallback(
            async (e) => {
                if (!S) {
                    E(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [S, t, n]
        ),
        O = s.useCallback(
            async (e) => {
                if (!S) {
                    I(!0);
                    try {
                        await (0, r.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [S, t, n]
        ),
        b = s.useCallback(async () => {
            if (!R) {
                C(!0);
                try {
                    await (0, r.qd)(), null == n || n();
                } catch (n) {
                    let e = new a.Hx(n);
                    null == t || t(e);
                } finally {
                    C(!1);
                }
            }
        }, [R, t, n]),
        P = s.useCallback(
            async (e) => {
                if (!N) {
                    A(!0);
                    try {
                        await r.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        A(!1);
                    }
                }
            },
            [N, t, n]
        ),
        v = s.useCallback(
            async (e, s) => {
                if (!g) {
                    p(!0);
                    try {
                        await r.ZP.requestLink(e, s), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [g, t, n]
        );
    return {
        acceptLinkRequest: h,
        declineLinkRequest: M,
        disconnectLinkRequest: x,
        cancelLinkRequest: O,
        selectTeenUser: P,
        getLinkCode: b,
        requestLink: v,
        loadMore: s.useCallback(
            async (e) => {
                let n = i.Z.getActionsForDisplayType(e),
                    s = n[n.length - 1],
                    l = i.Z.getStartId(),
                    o = i.Z.getSelectedTeenId();
                if (!m && null != l && null != o) {
                    f(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(o, e, l, s.event_id);
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        f(!1);
                    }
                }
            },
            [m, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: u,
        isCancelLoading: T,
        isGetLinkCodeLoading: R,
        isSelectTeenUserLoading: N,
        isRequestingLink: g,
        isMoreLoading: m
    };
}
