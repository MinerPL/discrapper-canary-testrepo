n(653041);
var r = n(735250),
    i = n(470079),
    a = n(834427),
    s = n(579806),
    o = n(403182),
    l = n(358085),
    u = n(380684),
    c = n(861990);
function d(e) {
    let t = ['openFile'];
    e.multiple && t.push('multiSelections');
    let n = e.filters;
    s.Z.fileManager
        .openFiles(
            {
                properties: t,
                filters: n
            },
            (0, u.Xv)() ? c.Ld : c.zz
        )
        .then((t) => {
            let n = t.map((e) => o.qF(e));
            null != n &&
                e.onChange({
                    stopPropagation: () => null,
                    preventDefault: () => null,
                    currentTarget: { files: n }
                });
        })
        .catch((t) => {
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
class _ extends i.Component {
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, r.jsx)(a.S, {
            ref: this.setRef,
            handleNativeClick: d,
            embedded: (0, l.isDesktop)(),
            ...this.props
        });
    }
    constructor(e) {
        var t, n, r;
        super(e),
            (t = this),
            (n = '_ref'),
            (r = i.createRef()),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.setRef = this.setRef.bind(this));
    }
}
t.Z = _;
