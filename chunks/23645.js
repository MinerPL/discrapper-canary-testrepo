n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var o = n(470079),
    r = n(817080),
    s = n(579806),
    a = n(358085);
class i extends o.Component {
    getFileContents() {
        let { fileContents: e } = this.props;
        return 'function' == typeof e && (e = e()), e;
    }
    downloadNative(e, t) {
        s.Z.fileManager.saveWithDialog(e, t);
    }
    downloadHtml5(e, t) {
        let n = new Blob([e], { type: this.props.contentType });
        (0, r.saveAs)(n, t);
    }
    render() {
        let { children: e } = this.props,
            t = o.Children.only(e);
        return o.cloneElement(t, { onClick: this.handleFileDownload });
    }
    constructor(...e) {
        var t, n, o;
        super(...e),
            (t = this),
            (n = 'handleFileDownload'),
            (o = (e) => {
                e.preventDefault();
                let t = this.getFileContents(),
                    { fileName: n, onDownload: o } = this.props;
                a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == o || o();
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = o);
    }
}
