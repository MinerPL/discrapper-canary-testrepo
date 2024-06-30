n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(668781), o = n(431583), c = n(91372), d = n(19780), u = n(502568), _ = n(35818), E = n(689938), m = n(656847);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class T extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? {
            memoizedMode: e.mode,
            clicked: !1
        } : null;
    }
    handleDownloadApps() {
        (0, l.openModal)(e => (0, i.jsx)(o.default, {
            source: 'Links',
            ...e
        }));
    }
    render() {
        switch (this.props.mode) {
        case 'UPDATE_AVAILABLE':
            return (0, i.jsx)(u.JO, {
                hideOnClick: !1,
                tooltip: E.Z.Messages.UPDATE_AVAILABLE,
                foreground: m.downloadArrow,
                background: m.cloud,
                icon: l.DownloadIcon
            });
        case 'UPDATE_MANUALLY':
        case 'UPDATE_DOWNLOADED':
            return (0, i.jsx)(u.JO, {
                tooltip: E.Z.Messages.UPDATE_DOWNLOADED,
                foreground: m.updateIconForeground,
                onClick: this.handleInstallDownload,
                icon: l.DownloadIcon
            });
        default:
            return null;
        }
    }
    constructor(...e) {
        super(...e), I(this, 'state', {
            memoizedMode: this.props.mode,
            clicked: !1
        }), I(this, 'handleInstallDownload', () => {
            d.Z.isConnected() ? r.Z.show({
                title: E.Z.Messages.UPDATE_DURING_CALL_TITLE,
                body: E.Z.Messages.UPDATE_DURING_CALL_BODY,
                onConfirm: this.doUpdate,
                cancelText: E.Z.Messages.CANCEL,
                confirmText: E.Z.Messages.UPDATE_DURING_CALL_CONTINUE
            }) : this.doUpdate();
        }), I(this, 'doUpdate', () => {
            !this.state.clicked && (this.setState({ clicked: !0 }), (0, _.Q)());
        });
    }
}
t.Z = s.ZP.connectStores([c.Z], () => ({ mode: c.Z.getState() }))(T);
