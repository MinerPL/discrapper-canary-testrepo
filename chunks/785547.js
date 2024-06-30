n.d(t, {
    Z: function () {
        return P;
    }
}), n(411104), n(47120);
var i, a, s, l = n(735250), r = n(470079), o = n(442837), c = n(692547), d = n(481060), u = n(58642), _ = n(2052), E = n(710845), m = n(703656), I = n(173747), T = n(7956), h = n(293245), N = n(417363), f = n(941128), p = n(780570), C = n(358085), g = n(814225), S = n(346329), A = n(701560), x = n(981631), O = n(689938), R = n(329279);
function M(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(s = i || (i = {})).PLAY = 'play', s.NOW_PLAYING = 'now_playing', s.INSTALL = 'install', s.UPDATE = 'update', s.PAUSED = 'paused', s.LOCATE = 'locate', s.UNINSTALLING = 'uninstalling', s.QUEUED = 'queued', s.DOWNLOADING = 'downloading', s.UNSUPPORTED_OS = 'unsupported_os', s.ADD_TO_LIBRARY = 'add_to_library', s.PREORDER_WAIT = 'preorder_wait';
let v = Object.freeze({
        [x.apO.PLAY]: 'play',
        [x.apO.INSTALL]: 'install',
        [x.apO.UPDATE]: 'update',
        [x.apO.PAUSE]: 'downloading',
        [x.apO.MOVE_UP]: 'queued',
        [x.apO.RESUME]: 'paused'
    }), L = () => [
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_1,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_2,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_3,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_4,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_5,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_6,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_7,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_8,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_9,
        O.Z.Messages.GAME_ACTION_BUTTON_UNINSTALLING_10
    ];
class Z extends (a = r.Component) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: x.qAy.BUTTON_CTA
        };
    }
    getText(e) {
        switch ('uninstalling' !== e && (this._uninstallStringIndex = null), e) {
        case 'install':
        case 'unsupported_os':
            return O.Z.Messages.GAME_ACTION_BUTTON_INSTALL;
        case 'update':
            return O.Z.Messages.GAME_ACTION_BUTTON_UPDATE;
        case 'paused':
            return O.Z.Messages.GAME_ACTION_BUTTON_PAUSED;
        case 'locate':
            return O.Z.Messages.GAME_ACTION_BUTTON_LOCATE;
        case 'uninstalling':
            let t = L();
            return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
        case 'queued':
            return O.Z.Messages.GAME_ACTION_BUTTON_QUEUED;
        case 'downloading':
            return O.Z.Messages.GAME_ACTION_BUTTON_DOWNLOADING;
        case 'preorder_wait':
            return O.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT;
        case 'add_to_library':
            return O.Z.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY;
        default:
            throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let {
            libraryApplication: e,
            dispatchState: t,
            actionState: n
        } = this.props;
        if (e.isHidden())
            return 'add_to_library';
        if (e.isPreorder())
            return 'preorder_wait';
        let i = null != n ? v[n] : null;
        return null != i ? i : null != t && t.type === x.vxO.UNINSTALLING ? 'uninstalling' : (0, C.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let {
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: a,
            isPlayShiny: s,
            onDropdownOpen: r,
            onDropdownClose: o,
            analyticsListSort: c,
            analyticsListIndex: d
        } = this.props;
        return (0, l.jsx)(A.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: a,
            isShiny: s,
            onDropdownOpen: r,
            onDropdownClose: o,
            analyticsListSort: c,
            analyticsListIndex: d
        });
    }
    renderDisabledButton(e, t) {
        let {
            className: n,
            fullWidth: i,
            size: a,
            customDisabledColor: s,
            tooltipPosition: r
        } = this.props;
        return (0, l.jsxs)('div', {
            className: R.disabledButtonWrapper,
            children: [
                (0, l.jsxs)(d.Button, {
                    className: n,
                    fullWidth: i,
                    size: a,
                    color: null != s ? s : R.disabledButtonColor,
                    disabled: !0,
                    children: [
                        this.getText(e),
                        this.renderProgressBar()
                    ]
                }),
                (0, l.jsx)(d.Tooltip, {
                    text: t,
                    position: r,
                    children: e => (0, l.jsx)('div', {
                        className: R.disabledButtonOverlay,
                        ...e
                    })
                })
            ]
        });
    }
    renderProgressBar() {
        let {
            hideProgress: e,
            dispatchState: t
        } = this.props;
        if (e)
            return null;
        let n = p.KJ(t);
        if (null == n)
            return null;
        let i = n.type === x.vxO.UNINSTALLING ? d.Progress.INDETERMINATE : p.xI(Number(n.progress), Number(n.total));
        return (0, l.jsx)(d.Progress, {
            percent: i,
            size: d.Progress.Sizes.XSMALL,
            foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
            className: R.progress
        });
    }
    renderActionButton(e, t) {
        let {
            className: n,
            fullWidth: i,
            size: a,
            color: s,
            isCloudSyncing: r
        } = this.props;
        return (0, l.jsxs)(d.Button, {
            className: n,
            fullWidth: i,
            size: a,
            color: null != s ? s : d.Button.Colors.GREEN,
            submitting: 'uninstalling' === e || r,
            onClick: e => this.handleClick(e, t),
            children: [
                this.getText(e),
                this.renderProgressBar()
            ]
        });
    }
    render() {
        let {
                hasNoBuild: e,
                libraryApplication: t
            } = this.props, n = this.getButtonState();
        if ('play' === n)
            return this.renderPlayButton();
        if ('preorder_wait' === n)
            return this.renderDisabledButton(n, function (e) {
                let t = g.en(e.sku);
                return null != t ? O.Z.Messages.GAME_ACTION_BUTTON_PREORDER_WAIT_TOOLTIP.format({ date: t }) : null;
            }(t));
        if ('unsupported_os' === n)
            return this.renderDisabledButton(n, O.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE_TOOLTIP.format({ operatingSystem: O.Z.Messages.WINDOWS }));
        if ('install' === n && e)
            return this.renderDisabledButton(n, O.Z.Messages.GAME_ACTION_BUTTON_CANNOT_INSTALL);
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
    constructor(...e) {
        super(...e), M(this, '_uninstallStringIndex', null), M(this, 'handleAddToLibrary', async () => {
            try {
                let {libraryApplication: e} = this.props;
                await u.h(e.id, e.branchId, e.getFlags() & ~x.eHb.HIDDEN), (0, m.uL)(x.Z5c.APPLICATION_LIBRARY);
            } catch (e) {
                new E.Z('LibraryApplicationButton').error(e);
            }
        }), M(this, 'handleInstall', () => {
            let {
                libraryApplication: e,
                source: t
            } = this.props;
            S.installApplication(e.id, e.branchId, t);
        }), M(this, 'handleUpdate', () => {
            let {libraryApplication: e} = this.props;
            S.updateApplication(e.id, e.branchId);
        }), M(this, 'onClickHandlers', {
            add_to_library: this.handleAddToLibrary,
            install: this.handleInstall,
            update: this.handleUpdate
        }), M(this, 'handleClick', (e, t) => {
            let {onClick: n} = this.props;
            null == n || n(e), t(e);
        });
    }
}
function P(e) {
    let {libraryApplication: t} = e, n = (0, _.O)(), [i, a] = (0, o.Wu)([
            N.Z,
            f.Z
        ], () => [
            (0, T.i)(t, N.Z, f.Z),
            N.Z.getState(t.id, t.branchId)
        ], [t]), s = (0, o.e7)([h.Z], () => h.Z.isSyncing(t.id, t.branchId), [t]), r = (0, o.e7)([I.Z], () => I.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(Z, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: a,
        isCloudSyncing: s,
        hasNoBuild: r
    });
}
M(Z, 'defaultProps', {
    fullWidth: !1,
    size: d.Button.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}), M(Z, 'ButtonStates', i);
