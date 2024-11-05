let r, i;
n(653041), n(47120), n(411104), n(724458);
var a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(772848),
    d = n(442837),
    f = n(433517),
    _ = n(570140),
    h = n(131792),
    p = n(252982),
    m = n(434529),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((o = a || (a = {})).REQUIRED = 'REQUIRED'), (o.OPTIONAL = 'OPTIONAL'), (o.OPTIONAL_DEFAULT = 'OPTIONAL_DEFAULT');
let v = 'migrated',
    I = {
        [g.Odu.GUILDS]: {
            minSize: {
                width: 312,
                height: 300
            },
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.175,
                    top: 0.15,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 0.65
                },
                pinned: !1
            }
        },
        [g.Odu.TEXT]: {
            minSize: {
                width: 430,
                height: 300
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.26,
                    top: 0.15,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 0.565,
                    height: 0.65
                },
                pinned: !0
            }
        },
        [g.Odu.VOICE]: {
            minSize: {
                width: 272,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.011,
                    top: 0.011,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !0
            }
        },
        [g.Odu.VOICE_V3]: {
            minSize: {
                width: 272,
                height: 24
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.01,
                    top: 0.35,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !0
            },
            version: 1
        },
        [g.Odu.VIDEO]: {
            minSize: {
                width: 128,
                height: 128
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: 0.35,
                    top: 0,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    fixed: !0,
                    width: 408,
                    height: 128
                },
                pinned: !0
            },
            version: 1
        },
        [g.Odu.GUILDS_TEXT]: {
            minSize: {
                height: 300,
                width: 610
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: 0.15,
                    top: 0.15,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    width: 0.7,
                    height: 0.65
                },
                pinned: !1
            }
        },
        [g.Odu.GO_LIVE]: {
            minSize: {
                width: 276,
                height: 164
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !0,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: void 0,
                    bottom: 0.04,
                    right: 0.02
                },
                size: {
                    fixed: !0,
                    width: 256,
                    height: 144
                },
                pinned: !1
            },
            version: 1
        },
        [g.Odu.QUICK_ACTIONS]: {
            minSize: {
                width: 500,
                height: 106
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.3,
                    top: void 0,
                    bottom: 0.04,
                    right: void 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !1
            },
            version: 1
        },
        [g.Odu.NOTIFICATIONS]: {
            minSize: {
                width: 320,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0,
                    top: 0,
                    bottom: void 0,
                    right: void 0
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !0
            },
            version: 1
        },
        [g.Odu.ACTIVITY]: {
            minSize: {
                width: 320,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: void 0,
                    top: 0.35,
                    bottom: void 0,
                    right: 0.01
                },
                size: {
                    height: 'auto',
                    width: 'auto'
                },
                pinned: !1
            },
            version: 1
        }
    };
function S(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let a = r[n.layoutId];
    return null != a && t(n, a);
}
function T(e) {
    var t;
    return null === (t = I[e]) || void 0 === t ? void 0 : t.defaultSettings;
}
class b extends (s = d.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets
            ? ((r = (function (e) {
                  let t = {};
                  return (
                      u().forEach(e, (e, n) => {
                          t[n] = new h.Z(e);
                      }),
                      t
                  );
              })(e.layouts)),
              (i = (function (e) {
                  let t = {};
                  return (
                      u().forEach(e, (e, n) => {
                          t[n] = new p.Z(e);
                      }),
                      t
                  );
              })(e.widgets)))
            : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        u().forEach(I, (e, t) => {
            'REQUIRED' === e.layoutPolicy && n.push(t);
        }),
            u().forEach(r, (e, a) => {
                let s = this.getWidgetsForLayout(a),
                    o = !1;
                for (let r of n) {
                    let n = s.find((e) => e.type === r);
                    if (null != n || I[r].version !== e.version) continue;
                    o = t = !0;
                    let l = (0, c.Z)();
                    (n = new p.Z({
                        ...this.getWidgetDefaultSettings(r),
                        type: r,
                        id: l,
                        layoutId: a,
                        zIndex: s.length
                    })),
                        s.push(n),
                        (i = {
                            ...i,
                            [l]: n
                        });
                }
                o &&
                    ((e = e.set(
                        'widgets',
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        })
                    )),
                    (r = {
                        ...r,
                        [a]: e
                    }));
            }),
            u().forEach(i, (e, n) => {
                let a = r[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((i = { ...i }), delete i[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: r,
            widgets: i
        };
    }
    getLayouts() {
        return r;
    }
    getLayout(e) {
        return r[e];
    }
    getAllWidgets() {
        return i;
    }
    getWidget(e) {
        return i[e];
    }
    getWidgetsForLayout(e) {
        let t = this.getLayout(e);
        return null == t
            ? []
            : t.widgets.reduce((e, t) => {
                  let n = this.getWidget(t);
                  return null != n && e.push(n), e;
              }, []);
    }
    getWidgetConfig(e) {
        return I[e];
    }
    getWidgetDefaultSettings(e) {
        return T(e);
    }
    getWidgetType(e) {
        let t = i[e];
        return null != t ? t.type : '';
    }
    getRegisteredWidgets() {
        return I;
    }
    getDefaultLayout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = [];
        return (
            u().forEach(this.getRegisteredWidgets(), (r, i) => {
                switch (r.layoutPolicy) {
                    case 'REQUIRED':
                    case 'OPTIONAL_DEFAULT':
                        var a;
                        (null !== (a = r.version) && void 0 !== a ? a : 0) === t &&
                            n.push({
                                ...r.defaultSettings,
                                type: i,
                                id: (0, c.Z)(),
                                layoutId: e
                            });
                }
            }),
            n
        );
    }
}
E(b, 'displayName', 'LayoutStore'),
    E(b, 'persistKey', 'LayoutStore'),
    E(b, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = { ...f.K.get('OverlayStore') };
            if (5 === r && e) {
                let r = [],
                    i = e.map((e) => {
                        let i = null != t ? t[e] : null,
                            a = null != n ? n[e] : null,
                            s = {
                                id: e,
                                layoutId: v,
                                type: e,
                                anchor: i || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null
                                },
                                size: a || {
                                    width: -1,
                                    height: -1
                                },
                                pinned: !0,
                                zIndex: 0
                            };
                        return r.push([s.id, s]), s.id;
                    });
                return {
                    layouts: [
                        [
                            v,
                            {
                                id: v,
                                widgets: i
                            }
                        ]
                    ],
                    widgets: r
                };
            }
            return {
                layouts: [],
                widgets: []
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = new Set(Object.keys(g.Odu)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== v;
                });
            return (
                a.forEach((e) => {
                    let [t, n] = e,
                        r = null,
                        a = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = i.find((n) => {
                                let [r, i] = n;
                                return r === e && i.layoutId === t;
                            });
                            return null != n && (null == a && n[1].type === g.Odu.VOICE && (a = n[0]), null == r && n[1].type === g.Odu.TEXT && (r = n[1].pinned), (null != r && null != a) || void 0);
                        }),
                        r || null == a)
                    )
                        return;
                    let s = (0, c.Z)();
                    (n.widgets = [a, s]),
                        i.push([
                            s,
                            {
                                ...T(g.Odu.GUILDS_TEXT),
                                type: g.Odu.GUILDS_TEXT,
                                id: s,
                                layoutId: t,
                                zIndex: 2
                            }
                        ]);
                }),
                {
                    widgets: i,
                    layouts: a
                }
            );
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = t.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {});
            return {
                layouts: r,
                widgets: n.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {})
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = {};
            for (let e in t) {
                let n = t[e];
                r[e] = {
                    ...n,
                    version: 0
                };
            }
            return {
                layouts: r,
                widgets: n
            };
        }
    ]),
    (t.Z = new b(_.Z, {
        LAYOUT_CREATE: function (e) {
            let { layoutId: t, widgets: n, version: a, defaultResolution: s } = e;
            if (null != r[t]) return !1;
            let o = [];
            n.forEach((e, t) => {
                let n = (function (e) {
                        let t = r[v];
                        if (null != t)
                            for (let n of t.widgets) {
                                let t = i[n];
                                if (null != t && t.type === e) return t;
                            }
                        return null;
                    })(e.type),
                    a = {
                        ...e,
                        zIndex: t
                    };
                '' === a.id && (a.id = (0, c.Z)()),
                    null != n && ((a.pinned = n.pinned), -1 !== n.anchor.left && (a.anchor = (0, m.jL)(n.anchor, s)), -1 !== n.size.width && (a.size = (0, m.Ox)(n.size, s))),
                    (i = {
                        ...i,
                        [a.id]: new p.Z(a)
                    }),
                    o.push(a.id);
            }),
                (r = {
                    ...r,
                    [t]: new h.Z({
                        id: t,
                        widgets: o,
                        version: a
                    })
                });
        },
        LAYOUT_SET_PINNED: function (e) {
            let { widgetId: t } = e;
            return S(t, (e, t) => {
                (function (e) {
                    i = {
                        ...i,
                        [e.id]: e.set('pinned', !e.pinned)
                    };
                })(e);
            });
        },
        LAYOUT_UPDATE_WIDGET: function (e) {
            let { widgetId: t, anchor: n, size: r, opacity: a } = e;
            return S(t, (e, t) =>
                (function (e, t, n, r) {
                    i = {
                        ...i,
                        [e.id]: e.merge({
                            anchor: null != t ? t : e.anchor,
                            size: null != n ? n : e.size,
                            opacity: null != r ? r : e.opacity
                        })
                    };
                })(e, n, r, a)
            );
        },
        LAYOUT_SET_TOP_WIDGET: function (e) {
            let { widgetId: t } = e;
            return S(t, (e, t) =>
                (function (e, t) {
                    let n = (function (e) {
                        let t = [];
                        return (
                            e.widgets.forEach((e) => {
                                let n = i[e];
                                null != n && t.push(n);
                            }),
                            t
                        );
                    })(e);
                    n.sort((e, t) => e.zIndex - t.zIndex);
                    let r = n.findIndex((e) => e.id === t);
                    if (r === n.length - 1) return !1;
                    n.push(n.splice(r, 1)[0]);
                    for (let e = 0; e < n.length; e++)
                        (function (e, t) {
                            i = {
                                ...i,
                                [e.id]: e.set('zIndex', t)
                            };
                        })(n[e], e);
                    return !0;
                })(t, e.id)
            );
        },
        LAYOUT_DELETE_WIDGET: function (e) {
            let { widgetId: t } = e;
            (i = { ...i }),
                delete i[t],
                u().forEach(r, (e, n) => {
                    if (n === v) return;
                    let i = e.widgets.indexOf(t);
                    if (i >= 0) {
                        let t = [...e.widgets];
                        t.splice(i, 1),
                            (r = {
                                ...r,
                                [n]: e.set('widgets', t)
                            });
                    }
                });
        },
        LAYOUT_DELETE_ALL_WIDGETS: function (e) {
            let { layoutId: t } = e,
                n = r[t];
            if (null == n) return !1;
            n.widgets.forEach((e) => {
                (i = { ...i }), delete i[e];
            }),
                (r = {
                    ...r,
                    [n.id]: n.set('widgets', [])
                });
        },
        LAYOUT_CREATE_WIDGETS: function (e) {
            let { widgetConfigs: t } = e;
            t.forEach((e) => {
                let t = new p.Z(e),
                    n = r[t.layoutId];
                if (null == n) throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
                (t = t.set('zIndex', n.widgets.length)),
                    (i = {
                        ...i,
                        [t.id]: t
                    });
                let a = [...n.widgets, t.id];
                r = {
                    ...r,
                    [n.id]: n.set('widgets', a)
                };
            });
        },
        LAYOUT_SET_WIDGET_META: function (e) {
            let { widgetId: t, meta: n } = e;
            return S(t, (e, t) => {
                (function (e, t) {
                    i = {
                        ...i,
                        [e.id]: e.merge({ meta: t })
                    };
                })(e, n);
            });
        }
    }));
