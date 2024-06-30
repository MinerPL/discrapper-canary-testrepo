r.d(t, {
    Z: function () {
        return _;
    }
}), r(47120);
var a = r(735250);
r(470079);
var n = r(120356), i = r.n(n), o = r(392711), l = r.n(o), c = r(876215), s = r(442837), d = r(481060), u = r(570140), h = r(681619), m = r(71585), g = r(146282), p = r(650613), b = r(789086), f = r(206583), y = r(659247), x = r(719556);
let k = [
    {
        key: 'type',
        cellClassName: i()(y.cell, y.cellType),
        render(e) {
            let {type: t} = e;
            return (0, a.jsx)(d.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(y.cell, y.cellCount),
        render(e) {
            let {entries: t} = e;
            return (0, a.jsx)('div', {
                children: (0, a.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: y.cell,
        render(e) {
            let {type: t} = e;
            return (0, a.jsx)(v, { type: t });
        }
    }
];
function v(e) {
    var t, r;
    let {type: n} = e, i = (0, s.e7)([g.Z], () => g.Z.getFilters()), o = null !== (r = null == i ? void 0 : null === (t = i.types) || void 0 === t ? void 0 : t.has(n)) && void 0 !== r && r;
    return (0, a.jsx)(d.Checkbox, {
        value: o,
        onClick: function () {
            o ? u.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FILTERS',
                filters: void 0
            }) : u.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FILTERS',
                filters: { types: new Set([n]) }
            });
        }
    });
}
function _() {
    var e;
    let t = (0, s.e7)([g.Z], () => g.Z.getFeed(f.YN.GLOBAL_FEED)), r = (0, s.e7)([g.Z], () => g.Z.getDebugImpressionCappingDisabled()), n = (0, s.e7)([m.Z], () => m.Z.getDebugFastImpressionCappingEnabled()), o = function (e) {
            let t = l().groupBy(e, e => e.content_type);
            return Object.keys(t).map(e => {
                let r = t[e];
                return {
                    key: ''.concat(e),
                    type: r[0].content_type,
                    entries: r
                };
            });
        }(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)), c = (0, s.e7)([g.Z], () => {
            var e;
            return (null === (e = g.Z.getFeedState(f.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        });
    return (0, a.jsx)('div', {
        className: i()(x.panel),
        children: (0, a.jsxs)(d.ScrollerThin, {
            className: y.content,
            children: [
                (0, a.jsxs)(d.FormSection, {
                    children: [
                        (0, a.jsx)(d.FormTitle, { children: 'Inventory' }),
                        o.length > 0 && (0, a.jsx)(h.Z, {
                            columns: k,
                            data: o
                        }),
                        (0, a.jsx)(d.Spacer, { size: 8 }),
                        (0, a.jsx)(b.Z, {}),
                        (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                u.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: f.YN.GLOBAL_FEED
                                });
                            },
                            submitting: c,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(d.FormSection, {
                    children: [
                        (0, a.jsx)(d.FormTitle, { children: 'Impression Capping' }),
                        (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                u.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(d.Spacer, { size: 8 }),
                        (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                u.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(d.Spacer, { size: 8 }),
                        (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                u.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: r ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(d.Spacer, { size: 8 }),
                        (0, a.jsx)(d.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                u.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: n ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, a.jsx)(p.Z, {})
            ]
        })
    });
}
