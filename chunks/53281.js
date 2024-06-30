n(653041);
var r = n(735250), i = n(470079), a = n(834427), o = n(579806), s = n(403182), l = n(358085), u = n(861990);
function c(e) {
    let t = ['openFile'];
    e.multiple && t.push('multiSelections');
    let n = e.filters;
    o.Z.fileManager.openFiles({
        properties: t,
        filters: n
    }, u.zz).then(t => {
        let n = t.map(e => s.qF(e));
        null != n && e.onChange({
            stopPropagation: () => null,
            preventDefault: () => null,
            currentTarget: { files: n }
        });
    }).catch(t => {
        e.onChange({
            stopPropagation: () => null,
            preventDefault: () => null,
            currentTarget: {
                files: null,
                err: t
            }
        });
    });
}
class d extends i.Component {
    activateUploadDialogue() {
        if (null != this._ref)
            return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, r.jsx)(a.S, {
            ref: this.setRef,
            handleNativeClick: c,
            embedded: (0, l.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        var t, n, r;
        super(e), t = this, n = '_ref', r = i.createRef(), n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r, this.setRef = this.setRef.bind(this);
    }
}
t.Z = d;
