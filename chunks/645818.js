n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(846519), l = n(481060), o = n(293245), c = n(863969), d = n(563593), u = n(981631), _ = n(689938);
let E = (0, l.makeIconCompat)(c.Z), h = (0, l.makeIconCompat)(d.Z), I = new Set([
        u.TzF.PUSHING,
        u.TzF.PULLING
    ]), m = Object.freeze({
        [u.TzF.DONE]: E,
        [u.TzF.PLANNING]: E,
        [u.TzF.PREPARING]: E,
        [u.TzF.PUSHING]: l.UploadIcon,
        [u.TzF.PULLING]: l.DownloadIcon,
        [u.TzF.CONFLICT]: E,
        [u.TzF.ERROR]: E
    });
class p extends s.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState && this.props.cloudSyncState.type === u.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2000, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let {cloudSyncState: e} = this.props;
        if (null != e && e.type === u.TzF.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2000;
        }
        return !1;
    }
    getStop(e, t) {
        if (t)
            return 1;
        if (e.type === u.TzF.PUSHING || e.type === u.TzF.PULLING) {
            let {
                progress: t,
                total: n
            } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
        case u.TzF.DONE:
            if (t)
                return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_DONE;
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
        case u.TzF.CONFLICT:
        case u.TzF.ERROR:
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
        case u.TzF.PLANNING:
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PLANNING;
        case u.TzF.PREPARING:
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PREPARING;
        case u.TzF.PUSHING:
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PUSHING;
        case u.TzF.PULLING:
            return _.Z.Messages.CLOUD_SYNC_ICON_TOOLTIP_PULLING;
        default:
            return null;
        }
    }
    render() {
        let {
                cloudSyncState: e,
                libraryApplication: t,
                className: n
            } = this.props, s = null == e ? { type: u.TzF.DONE } : e, a = this.getIsRecentlySynced(), r = {};
        (I.has(s.type) || a) && (r.gradientConfig = {
            id: t.id,
            startColor: 'rgba(199, 208, 240, 1)',
            stopColor: 'rgba(114, 137, 218, 1)',
            stop: this.getStop(s, a)
        });
        let o = a ? h : m[s.type];
        return (0, i.jsx)(l.Tooltip, {
            text: this.getTooltip(s, a),
            children: e => (0, i.jsx)(o, {
                className: n,
                ...r,
                ...e
            })
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e), t = this, n = '_doneTimer', i = new r.V7(), n in t ? Object.defineProperty(t, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
    }
}
t.Z = a.ZP.connectStores([o.Z], e => {
    let {libraryApplication: t} = e;
    return { cloudSyncState: o.Z.getState(t.id, t.branchId) };
})(p);
