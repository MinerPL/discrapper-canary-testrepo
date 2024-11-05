var i = n(200651),
    o = n(239091),
    r = n(603618),
    l = n(353038),
    s = n(761374),
    a = n(2923),
    u = n(586742),
    c = n(243487),
    d = n(430561),
    h = n(134849),
    f = n(501787),
    p = n(981631),
    m = n(388032);
let v = {
    [p.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: o, padding: r, borderWidth: l } = e;
            return (0, i.jsx)(u.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === o.height ? 0 : o.height - 2 * r - 2 * l,
                width: 'auto' === o.width ? 0 : o.width - 2 * r - 2 * l
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
                        onClick: (r) => {
                            var l, s, a;
                            return (
                                (l = r),
                                (s = e),
                                (a = t),
                                void (0, o.jW)(l, async () => {
                                    let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                    return (
                                        a(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: s,
                                                onClose: () => a(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: o } = e;
            return 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                      width: Math.max(n.width, f.vZ),
                      height: Math.min(n.height, 2 * f.mo + 2 * i + 2 * o)
                  }
                : {
                      height: Math.max(n.height, f.vZ),
                      width: Math.min(n.width, 2 * f.mo + 2 * i + 2 * o)
                  };
        }
    },
    [p.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: o } = e;
            return (0, i.jsx)(c.Z, {
                anchorLeft: n,
                id: t.id,
                locked: o,
                pinned: t.pinned,
                widget: p.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
                        onClick: (e) => {
                            var r, l;
                            return (
                                (r = e),
                                (l = t),
                                void (0, o.jW)(r, async () => {
                                    let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                    return (
                                        l(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => l(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [p.Odu.GO_LIVE]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: o, dragStart: r } = e;
            return (0, i.jsx)(s.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: o,
                widget: p.Odu.GO_LIVE,
                isPreviewingInGame: !1,
                dragStart: r,
                horizontal: 'boolean' == typeof t.meta.horizontal && t.meta.horizontal,
                padding: 8,
                borderWidth: 2
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t['386XRk']) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
                        onClick: (r) => {
                            var l, s, a;
                            return (
                                (l = r),
                                (s = e),
                                (a = t),
                                void (0, o.jW)(l, async () => {
                                    let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                    return (
                                        a(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: s,
                                                onClose: () => a(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: o, padding: r, containerSpecs: s } = e,
                a = 2 * o + 2 * r,
                u = i.width - a,
                c = i.height - a,
                d = u / c,
                h = c / u,
                f = (() => {
                    switch (t) {
                        case l.B.RESIZE_NORTH:
                        case l.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * d + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * h + a)
                            };
                    }
                })();
            return f.width > s.maxX && ((f.width = s.maxX), (f.height = (s.maxX - a) * h + a)), f.height > s.maxY && ((f.height = s.maxY), (f.width = (s.maxY - a) * d + a)), f;
        }
    },
    [p.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.Z, { locked: t });
        }
    },
    [p.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(h.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
                        onClick: (e) => {
                            var r, l;
                            return (
                                (r = e),
                                (l = t),
                                void (0, o.jW)(r, async () => {
                                    let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                    return (
                                        l(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => l(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [p.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(r.Z, {}),
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t['6gwSFR']) }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(d.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    }
};
t.Z = v;
