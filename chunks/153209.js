n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(524437), r = n(481060), o = n(140155), c = n(497089), d = n(178480), u = n(11799), _ = n(632523), E = n(695346), m = n(626135), I = n(709054), T = n(791914), h = n(981631), N = n(689938), f = n(297783);
function p(e) {
    let {onClick: t} = e;
    return (0, i.jsx)(r.CircleIconButton, {
        tooltip: N.Z.Messages.MARK_ALL_AS_READ,
        color: r.CircleIconButtonColors.SECONDARY,
        icon: (0, i.jsx)(r.DoubleCheckmarkLargeIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        onClick: t
    });
}
function C(e) {
    let {
            setTab: t,
            badgeState: n,
            closePopout: r
        } = e, {
            initialized: N,
            items: C,
            loading: g,
            loadMore: S
        } = (0, u.y6)(), A = (0, s.e7)([o.Z], () => o.Z.localItems), x = a.useMemo(() => [...[
                ...C,
                ...A
            ].sort((e, t) => -1 * I.default.compare(e.id, t.id))], [
            C,
            A
        ]), O = C.length > 0 ? C[0] : null, R = E.d$.useSetting(), M = a.useMemo(() => {
            if (null != O && 0 >= I.default.compare(O.id, R))
                return !1;
            for (let e of x) {
                if (0 >= I.default.compare(e.id, R))
                    break;
                if (!(0, d.r)(e, R))
                    return !0;
            }
            return !1;
        }, [
            O,
            R,
            x
        ]);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(T.Z, {
                tab: l.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: r,
                children: M ? (0, i.jsx)(p, {
                    onClick: () => {
                        null != O && (E.d$.updateSetting(O.id), m.default.track(h.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                    }
                }) : null
            }),
            (0, i.jsx)(_.Z, {
                initialized: N,
                items: x,
                loading: g,
                loadMore: S
            })
        ]
    });
}
