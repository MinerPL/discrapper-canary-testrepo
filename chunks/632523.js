n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250), a = n(470079), s = n(990547), l = n(91192), r = n(481060), o = n(724757), c = n(213609), d = n(441358), u = n(426521), _ = n(374986);
function E(e) {
    let {
            initialized: t,
            items: n,
            loading: E,
            loadMore: m
        } = e, I = a.useRef(null), T = (0, o.Z)('for-you', I);
    (0, c.Z)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
        properties: { empty: 0 === n.length }
    }, { disableTrack: !t }, [t]);
    let h = () => {
        var e;
        let t = null === (e = I.current) || void 0 === e ? void 0 : e.getScrollerState();
        if (null != t)
            t.scrollHeight - t.scrollTop - t.offsetHeight < 1500 && m();
    };
    return t ? 0 === n.length ? (0, i.jsx)(d.v, {}) : (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(l.bG, {
            navigator: T,
            children: (0, i.jsx)(l.SJ, {
                children: e => {
                    let {
                        ref: t,
                        ...a
                    } = e;
                    return (0, i.jsxs)(r.AdvancedScroller, {
                        className: _.container,
                        ref: e => {
                            var n;
                            I.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                        },
                        ...a,
                        onScroll: h,
                        children: [
                            (0, i.jsx)(u.U, { items: n }),
                            E ? (0, i.jsx)(r.Spinner, { className: _.spinner }) : null
                        ]
                    });
                }
            })
        })
    }) : (0, i.jsx)(r.Spinner, { className: _.loadingPlaceholder });
}
