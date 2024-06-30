n.d(t, {
    y6: function () {
        return E;
    }
}), n(47120);
var i = n(470079), a = n(442837), s = n(45114), l = n(733427), r = n(455199), o = n(833592), c = n(140155), d = n(774807), u = n(490897);
let _ = e => {
        let {
                isFocused: t,
                navigatedAway: n,
                isDesktop: _,
                withMentions: E = !1,
                initialPageSize: m
            } = e, I = (0, a.e7)([d.Z], () => d.Z.shouldReload()), T = i.useRef(!1), [h, N] = i.useState(!1), {
                initialized: f,
                loading: p,
                items: C,
                hasMore: g,
                cursor: S,
                errored: A
            } = (0, a.cj)([c.Z], () => ({
                initialized: c.Z.initialized,
                loading: c.Z.loading,
                items: c.Z.items,
                hasMore: c.Z.hasMore,
                cursor: c.Z.cursor,
                errored: c.Z.errored
            })), {
                roleFilter: x,
                everyoneFilter: O
            } = (0, a.cj)([r.Z], () => ({
                everyoneFilter: r.Z.everyoneFilter,
                roleFilter: r.Z.roleFilter
            }));
        i.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []), i.useEffect(() => {
            f && t && (0, s.FT)(u.W.NOTIFICATION_CENTER);
        }, [
            t,
            f
        ]);
        let R = (0, l.Z)();
        i.useEffect(() => () => {
            _ ? !R() && (A || C.length > 100) && (0, o.jF)() : n && C.length > 100 && (0, o.jF)();
        }, [
            n,
            C,
            _,
            R,
            A
        ]), i.useEffect(() => {
            let e = I && t;
            (!f || e) && (0, o.jk)({
                limit: null != m ? m : E ? 8 : 20,
                with_mentions: E,
                roles_filter: x,
                everyone_filter: O
            });
        }, [
            f,
            I,
            t,
            E,
            x,
            O,
            m
        ]);
        let M = i.useCallback(async e => {
            !T.current && f && g && null != S && (e || !A) && (T.current = !0, N(!0), await (0, o.jk)({
                after: S,
                with_mentions: E,
                roles_filter: x,
                everyone_filter: O,
                limit: E ? 8 : 20
            }, () => {
                T.current = !1;
            }), N(!1));
        }, [
            f,
            g,
            S,
            A,
            E,
            x,
            O
        ]);
        return {
            initialized: f,
            loading: p,
            items: C,
            hasMore: g,
            loadMore: M,
            loadingMore: h,
            setReadNotifItemToAcked: e => {
                !e.acked && (e.acked = !0);
            },
            errored: A
        };
    }, E = () => {
        let {
            initialized: e,
            loading: t,
            items: n,
            hasMore: i,
            loadMore: a
        } = _({
            isFocused: !0,
            isDesktop: !0
        });
        return {
            initialized: e,
            loading: t,
            items: n.filter(e => 'notification-center-item' === e.kind),
            hasMore: i,
            loadMore: a
        };
    };
