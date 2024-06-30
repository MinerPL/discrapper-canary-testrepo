s(653041), s(47120);
var a = s(735250), n = s(470079), l = s(442837), i = s(481060), r = s(325432), o = s(391690), c = s(424218), h = s(998502), d = s(689938), u = s(732362);
function p(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
let I = 'select';
class A extends n.PureComponent {
    fetchAllDirectoryMetadata() {
        let {installationPaths: e} = this.props, t = e.map(e => {
                let {path: t} = e;
                return t;
            }), {newInstallationPath: s} = this.state;
        for (let e of (null != s && t.push(s), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, r.ec)(t), t))
            this.fetchedMetadataPaths.add(e);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(e) {
        this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value);
    }
    getOptions() {
        let {installationPaths: e} = this.props, {newInstallationPath: t} = this.state, s = e.map(e => {
                let {
                    path: t,
                    label: s
                } = e;
                return {
                    value: t,
                    label: this.renderLabel(t, s)
                };
            });
        return null != t && s.push({
            value: t,
            label: this.renderLabel(t)
        }), s.push({
            value: I,
            label: d.Z.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
        }), s;
    }
    hasEnoughDiskSpace(e) {
        let {
                requiredDiskKB: t,
                installationPathsMetadata: s
            } = this.props, a = null != s[e] ? s[e].availableKB : null;
        return null == t || null == a || t < a;
    }
    sendChange(e) {
        let {
                installationPathsMetadata: t,
                onChange: s
            } = this.props, a = null != t[e] && !1 === t[e].hasPermission;
        s(e, a || !this.hasEnoughDiskSpace(e));
    }
    renderError() {
        let {
            value: e,
            installationPathsMetadata: t
        } = this.props;
        return null != t[e] && !1 === t[e].hasPermission ? (0, a.jsx)('div', {
            className: u.error,
            children: d.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
        }) : this.hasEnoughDiskSpace(e) ? null : (0, a.jsx)('div', {
            className: u.error,
            children: d.Z.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
        });
    }
    renderLabel(e, t) {
        let {installationPathsMetadata: s} = this.props, a = null != t ? t : e;
        return null != s[e] && null != s[e].availableKB ? d.Z.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
            path: a,
            size: (0, c.BU)(s[e].availableKB, { useKibibytes: !0 })
        }) : a;
    }
    render() {
        let {
            value: e,
            className: t,
            autoFocus: s
        } = this.props;
        return (0, a.jsxs)('div', {
            className: t,
            children: [
                (0, a.jsx)(i.FormTitle, {
                    tag: 'h5',
                    children: d.Z.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                }),
                (0, a.jsx)(i.SingleSelect, {
                    autoFocus: s,
                    options: this.getOptions(),
                    value: e,
                    onChange: this.handleChange
                }),
                this.renderError()
            ]
        });
    }
    constructor(...e) {
        super(...e), p(this, 'state', { newInstallationPath: null }), p(this, 'fetchedMetadataPaths', new Set()), p(this, 'handleChange', e => {
            e === I ? h.ZP.showOpenDialog(['openDirectory']).then(e => {
                if (null != e && e.length > 0) {
                    let t = e[0];
                    this.setState({
                        newInstallationPath: null != this.props.installationPaths.find(e => {
                            let {path: s} = e;
                            return s === t;
                        }) ? null : t
                    }), this.sendChange(t);
                }
            }) : this.sendChange(e);
        });
    }
}
t.Z = l.ZP.connectStores([o.Z], () => ({
    installationPaths: o.Z.installationPaths,
    installationPathsMetadata: o.Z.installationPathsMetadata
}))(A);
