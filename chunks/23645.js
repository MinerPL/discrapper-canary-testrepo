s.d(t, {
    Z: function () {
        return o;
    }
}), s(47120);
var n = s(470079), a = s(817080), i = s(579806), r = s(358085);
class o extends n.Component {
    getFileContents() {
        let {fileContents: e} = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        i.Z.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let s = new Blob([e], { type: this.props.contentType });
        (0, a.saveAs)(s, t);
    }
    render() {
        let {children: e} = this.props, t = n.Children.only(e);
        return n.cloneElement(t, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var t, s, n;
        super(...e), t = this, s = 'handleFileDownload', n = e => {
            e.preventDefault();
            let t = this.getFileContents(), {
                    fileName: s,
                    onDownload: n
                } = this.props;
            r.isPlatformEmbedded ? this.downloadNative(t, s) : this.downloadHtml5(t, s), null == n || n();
        }, s in t ? Object.defineProperty(t, s, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[s] = n;
    }
}
