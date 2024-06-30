n(411104), n(47120), n(724458), n(653041);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(392711), o = n.n(l), c = n(442837), d = n(692547), u = n(780384), _ = n(481060), E = n(570140), h = n(239091), I = n(51025), m = n(785547), p = n(730749), g = n(112724), T = n(812206), S = n(44315), C = n(210887), N = n(283595), f = n(417363), A = n(941128), Z = n(451478), L = n(285952), v = n(366695), O = n(366966), R = n(151011), x = n(424218), P = n(780570), b = n(353042), M = n(86826), D = n(981631), y = n(689938), j = n(32785);
function U(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let G = e => {
        let {
            className: t,
            children: n,
            onContextMenu: s,
            item: a
        } = e;
        return (0, i.jsx)('div', {
            className: t,
            onContextMenu: e => s(e, a),
            children: n
        });
    }, w = [
        d.Z.unsafe_rawColors.BLUE_345.css,
        d.Z.colors.INTERACTIVE_NORMAL.css
    ], k = e => {
        let {
            tooltip: t,
            onClick: n,
            icon: s
        } = e;
        return (0, i.jsx)(_.Tooltip, {
            text: t,
            children: e => {
                let {
                    onMouseEnter: a,
                    onMouseLeave: r
                } = e;
                return (0, i.jsx)(_.Button, {
                    'aria-label': t,
                    className: j.actionButton,
                    innerClassName: j.actionButtonContents,
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: a,
                    onMouseLeave: r,
                    children: (0, i.jsx)(s, { className: j.actionIcon })
                });
            }
        });
    };
function B(e, t) {
    switch (t) {
    case D.f07.POST_INSTALL_SCRIPTS:
    case D.f07.PLANNING:
    case D.f07.FINALIZING:
    case D.f07.ALLOCATING_DISK:
        return ''.concat(e);
    default:
        return (0, x.BU)(e, { useKibibytes: !0 });
    }
}
let H = {
    [D.vxO.INSTALLING]: {
        [O.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
            percent: e,
            progress: t,
            total: n
        }),
        [O.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        })
    },
    [D.vxO.UPDATING]: {
        [O.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING.format({
            percent: e,
            progress: t,
            total: n
        }),
        [O.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_SECONDS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_MINUTES.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_UPDATING_UPDATING_HOURS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        })
    },
    [D.vxO.REPAIRING]: {
        [O.J6.NONE]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING.format({
            percent: e,
            progress: t,
            total: n
        }),
        [O.J6.SECONDS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_SECONDS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.MINUTES]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_MINUTES.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        }),
        [O.J6.HOURS]: (e, t, n, i) => y.Z.Messages.GAME_LIBRARY_UPDATES_INSTALLING_HOURS.format({
            percent: e,
            progress: t,
            total: n,
            timeRemaining: i
        })
    }
};
function V(e, t, n, i, s) {
    let a = H[t], r = null != a ? Object.keys(a) : [], {
            unit: l,
            time: o
        } = (0, O.CI)(null != e ? e / 60 : null, r);
    if (null != a && null != l) {
        let e = a[l];
        return null != e ? e(n, i, s, o) : null;
    }
    return null;
}
function F(e) {
    let {
            type: t,
            stage: n,
            percent: i,
            progress: s,
            total: a,
            secondsRemaining: r
        } = e, l = B(a, n), o = B(s, n);
    switch (n) {
    case D.f07.QUEUED:
        if (0 === s)
            return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER_NO_TRANSITION;
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_WAITING_FOR_ANOTHER.format({
            percent: i,
            progress: o,
            total: l
        });
    case D.f07.PLANNING:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PLANNING.format({ percent: i });
    case D.f07.ALLOCATING_DISK:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_ALLOCATING_DISK.format({ percent: i });
    case D.f07.PATCHING:
        return V(r, t, i, o, l);
    case D.f07.FINALIZING:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINALIZING.format({ percent: i });
    case D.f07.PAUSING:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
            percent: i,
            progress: o,
            total: l
        });
    case D.f07.VERIFYING:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_VERIFYING.format({
            percent: i,
            progress: o,
            total: l
        });
    case D.f07.POST_INSTALL_SCRIPTS:
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_POST_INSTALL_SCRIPTS.format({
            percent: i,
            progress: o,
            total: l
        });
    case D.f07.REPAIRING:
        if (t === D.vxO.REPAIRING)
            return V(r, t, i, o, l);
        return y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_REPAIRING.format({
            percent: i,
            progress: o,
            total: l
        });
    }
    throw Error('Invalid Dispatch stage');
}
let Y = 'name', W = 'progress', z = 'actions';
class K extends s.PureComponent {
    get isFocused() {
        let {cellProps: e} = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let {
            percent: t,
            foregroundColor: n,
            foregroundGradientColor: s,
            message: a
        } = e;
        return (0, i.jsxs)(L.Z, {
            direction: L.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.Progress, {
                    percent: t,
                    size: _.Progress.Sizes.SMALL,
                    foregroundColor: (0, S.Lq)(n),
                    foregroundGradientColor: null != s ? [
                        (0, S.Lq)(s[0]),
                        (0, S.Lq)(s[1])
                    ] : void 0,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: j.progressCellText,
                    children: null != a ? a : ''
                })
            ]
        });
    }
    renderStackedProgress(e) {
        let {
            percents: t,
            message: n
        } = e;
        return (0, i.jsxs)(L.Z, {
            direction: L.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.StackedProgress, {
                    percents: t,
                    size: _.Progress.Sizes.SMALL,
                    foregroundColors: w,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: j.progressCellText,
                    children: null != n ? n : ''
                })
            ]
        });
    }
    renderFinished() {
        let {item: e} = this.props;
        return this.renderBody({
            message: y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_FINISHED.format({ remove: () => I.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, u.ap)(e.theme) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
            percent: 100
        });
    }
    renderQueued() {
        let e, t;
        let {
            item: {
                state: n,
                theme: i
            }
        } = this.props;
        if (null != n) {
            let {
                progress: i,
                total: s,
                stage: a
            } = n;
            if (null != i && null != s) {
                let n = B(s, a), r = B(i, a), l = Math.floor(t = P.xI(i, s));
                e = a === D.f07.PAUSING ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSING.format({
                    percent: l,
                    progress: r,
                    total: n
                }) : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED.format({
                    percent: l,
                    progress: r,
                    total: n
                });
            }
        }
        return (null == t || null == e) && (t = 0, e = y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_QUEUED_NO_TRANSITION), this.renderBody({
            percent: t,
            foregroundColor: (0, u.ap)(i) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
            message: e
        });
    }
    renderPaused() {
        let {
            item: {
                state: e,
                theme: t
            }
        } = this.props;
        if (null == e)
            return null;
        let {
            progress: n,
            total: i
        } = e;
        if (null == n || null == i)
            return null;
        let s = P.xI(n, i), a = Math.floor(s), r = 0 === n && 1 === i ? y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED_NO_TRANSITION : y.Z.Messages.GAME_LIBRARY_UPDATES_PROGRESS_PAUSED.format({
                percent: a,
                progress: (0, x.BU)(n),
                total: (0, x.BU)(i)
            });
        return this.renderBody({
            message: r,
            foregroundColor: (0, u.ap)(t) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
            percent: s
        });
    }
    renderProgressPatching() {
        return (0, i.jsx)(b.Z, {
            getHistoricalTotalBytes: f.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody
        });
    }
    renderProgressDefault() {
        let {state: e} = this.props.item;
        if (null == e)
            return null;
        let {
            total: t,
            progress: n,
            stage: i,
            type: s
        } = e;
        if (null == t || null == n || null == i)
            return null;
        let a = P.xI(n, t), r = Math.floor(a);
        return this.renderBody({
            percent: a,
            message: F({
                type: s,
                stage: i,
                percent: r,
                progress: n,
                total: t
            }),
            foregroundColor: D.Ilk.BLUE_345
        });
    }
    renderProgress() {
        let {state: e} = this.props.item;
        switch (null != e ? e.stage : null) {
        case D.f07.PATCHING:
        case D.f07.REPAIRING:
            return this.renderProgressPatching();
        default:
            return this.renderProgressDefault();
        }
    }
    render() {
        let {
            item: e,
            cellProps: t
        } = this.props;
        if (e.finished)
            return this.renderFinished();
        if (e.index > 0)
            return this.renderQueued();
        if (null != e.state && (e.state.type === D.vxO.UPDATING || e.state.type === D.vxO.REPAIRING || e.state.type === D.vxO.INSTALLING))
            return null != t && t.paused ? this.renderPaused() : this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e), U(this, 'renderProgressPatchingBody', (e, t) => {
            let {
                item: {state: n}
            } = this.props;
            if (null == n)
                return null;
            let {
                stage: i,
                progress: s,
                total: a,
                type: r,
                readerProgress: l
            } = n;
            if (null == s || null == a || null == i)
                return null;
            let o = P.xI(s, a), c = P.xI(null != l ? l : 0, a), d = e[e.length - 1] / t * 1000, u = a - s, _ = F({
                    type: r,
                    stage: i,
                    percent: Math.floor(o),
                    progress: s,
                    total: a,
                    secondsRemaining: 0 !== d ? Math.max(1, u / d) : null
                });
            return this.renderStackedProgress({
                percents: [
                    o,
                    c
                ],
                message: _
            });
        });
    }
}
let q = () => (0, i.jsx)(k, {
        icon: _.PlayIcon,
        tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_RESUME,
        onClick: () => I.v4()
    }), Q = () => (0, i.jsx)(k, {
        icon: _.PauseIcon,
        tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_PAUSE,
        onClick: () => I.wO()
    }), X = e => {
        let {item: t} = e;
        return (0, i.jsx)(k, {
            icon: _.ArrowSmallUpIcon,
            tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_MOVE_UP,
            onClick: () => I.A1(t.applicationId, t.branchId)
        });
    }, J = e => {
        let {item: t} = e;
        return (0, i.jsx)(k, {
            icon: _.CloseSmallIcon,
            tooltip: y.Z.Messages.GAME_LIBRARY_UPDATES_ACTION_REMOVE,
            onClick: () => I.al(t.applicationId, t.branchId)
        });
    }, $ = [
        {
            key: Y,
            cellClassName: j.nameCell,
            render: e => (0, i.jsxs)(L.Z, {
                align: L.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(v.Z, {
                        game: e.application,
                        className: j.__invalid_gameIcon,
                        size: v.Z.Sizes.SMALL
                    }),
                    (0, i.jsx)('div', {
                        className: j.nameCellText,
                        children: e.application.name
                    })
                ]
            })
        },
        {
            key: W,
            cellClassName: j.progressCell,
            headerCellClassName: j.progressCellHeader,
            bodyCellClassName: j.progressCellBody,
            render: (e, t) => (0, i.jsx)(K, {
                item: e,
                cellProps: t
            })
        },
        {
            key: z,
            cellClassName: j.actionsCell,
            render(e, t) {
                let n, s;
                return e.finished ? n = null != e.libraryApplication ? (0, i.jsx)(m.Z, {
                    libraryApplication: e.libraryApplication,
                    size: _.Button.Sizes.SMALL,
                    className: j.gameActionButton,
                    source: D.Sbl.APPLICATION_LIBRARY_UPDATES
                }) : null : null != e.state ? e.state.type !== D.vxO.UP_TO_DATE && (n = e.index > 0 ? (0, i.jsx)(X, { item: e }) : null != t && t.paused ? (0, i.jsx)(q, {}) : (0, i.jsx)(Q, { item: e }), s = (0, i.jsx)(J, { item: e })) : s = (0, i.jsx)(J, { item: e }), (0, i.jsxs)(L.Z, {
                    justify: L.Z.Justify.END,
                    children: [
                        n,
                        s
                    ]
                });
            }
        }
    ];
class ee extends s.PureComponent {
    componentDidMount() {
        window.addEventListener('resize', this.throttledUpdateHeight);
    }
    componentDidUpdate(e) {
        this.props.height !== e.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let {applications: e} = this.props;
        e.forEach(e => {
            e.finished && E.Z.wait(() => {
                I.wi(e.applicationId, e.branchId);
            });
        }), window.removeEventListener('resize', this.throttledUpdateHeight), this.isUnmounted = !0;
    }
    render() {
        let {
            applications: e,
            paused: t,
            isFocused: s,
            theme: a,
            analyticsContext: l
        } = this.props;
        return 0 === e.length ? null : (0, i.jsxs)('div', {
            className: j.gameUpdates,
            children: [
                (0, i.jsxs)('div', {
                    className: j.headerRow,
                    children: [
                        (0, i.jsx)(M.Z, {
                            className: r()(j.headerCell, j.networkProgress),
                            title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_NETWORK,
                            getHistoricalTotalBytes: f.Z.getHistoricalTotalBytesDownloaded,
                            color: D.Ilk.GREEN_360,
                            animate: s
                        }),
                        (0, i.jsx)(M.Z, {
                            className: r()(j.headerCell, j.diskProgress),
                            title: y.Z.Messages.GAME_LIBRARY_UPDATES_HEADER_DISK,
                            getHistoricalTotalBytes: f.Z.getHistoricalTotalBytesWritten,
                            color: D.Ilk.BLUE_345,
                            animate: s
                        })
                    ]
                }),
                (0, i.jsx)(R.Z, {
                    hasHeader: !1,
                    columns: $,
                    data: e,
                    className: j.table,
                    rowClassName: j.row,
                    rowComponent: G,
                    cellProps: {
                        paused: t,
                        isFocused: s,
                        theme: a
                    },
                    rowProps: {
                        onContextMenu: (e, t) => {
                            var s, a, r;
                            return s = e, a = t, r = l, void h.jW(s, async () => {
                                let {default: e} = await n.e('98335').then(n.bind(n, 485292));
                                return t => (0, i.jsx)(e, {
                                    ...t,
                                    applicationId: a.applicationId,
                                    branchId: a.branchId,
                                    analyticsContext: r
                                });
                            });
                        }
                    },
                    bodyCellClassName: j.cell
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), U(this, 'isUnmounted', !1), U(this, 'isTallerThanHalfViewport', !1), U(this, 'throttledUpdateHeight', o().throttle(() => {
            if (this.isUnmounted)
                return;
            let {
                    height: e,
                    onHeightTallerThanHalfViewportChange: t
                } = this.props, n = e > window.innerHeight / 2;
            this.isTallerThanHalfViewport !== n && (this.isTallerThanHalfViewport = n, t(n));
        }, 1000));
    }
}
function et(e, t, n, i) {
    return e.reduce((e, s, a) => {
        let {
                applicationId: r,
                branchId: l
            } = s, o = n.getApplication(r), c = i.getState(r, l);
        return null != o && e.push({
            key: ''.concat(r, ':').concat(l),
            applicationId: r,
            branchId: l,
            state: c,
            application: o,
            libraryApplication: N.Z.getLibraryApplication(r, l),
            finished: t,
            index: a
        }), e;
    }, []);
}
t.Z = (0, g.Z)(c.ZP.connectStores([
    T.Z,
    f.Z,
    A.Z,
    C.Z,
    Z.Z
], () => {
    let e = et(A.Z.activeItems, !1, T.Z, f.Z);
    return {
        applications: [
            ...e,
            ...et(A.Z.finishedItems, !0, T.Z, f.Z)
        ],
        paused: A.Z.paused,
        isFocused: Z.Z.isFocused(),
        theme: C.Z.theme
    };
})((0, p.Z)(ee)));
