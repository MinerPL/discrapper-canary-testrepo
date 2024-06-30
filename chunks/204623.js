n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(525654), o = n.n(a), s = n(470716), l = n(442837), u = n(946188), c = n(481060), d = n(596454), _ = n(451478), E = n(586576), f = n(176354), h = n(63063), p = n(358085), m = n(792125), I = n(998502), T = n(151851), g = n(981631), S = n(689938);
let A = l.ZP.connectStores([_.Z], () => ({ focused: _.Z.isFocused() }))(T.Z);
class N extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null === (e = o().os) || void 0 === e ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? p.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? p.PlatformTypes.OSX : p.PlatformTypes.LINUX;
    }
    componentDidMount() {
        !function () {
            let e = window.require('electron').remote.getCurrentWindow();
            I.ZP.minimize = () => e.minimize(), I.ZP.maximize = () => {
                e.isMaximized() ? e.unmaximize() : e.maximize();
            }, I.ZP.close = () => e.close();
        }();
    }
    render() {
        let e = (0, r.jsx)('div', {
                children: (0, r.jsxs)('p', {
                    children: [
                        S.Z.Messages.VERY_OUT_OF_DATE_DESCRIPTION,
                        ' ',
                        (0, r.jsx)(d.Z, {
                            src: f.ZP.getURL(u.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }), t = (0, r.jsx)(c.Button, {
                size: c.ButtonSizes.LARGE,
                onClick: this.handleDownload,
                children: S.Z.Messages.DOWNLOAD
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(s.ql, { children: (0, r.jsx)('html', { className: (0, m.Q)(g.BRd.DARK) }) }),
                (0, r.jsx)(A, { type: this.getPlatform() }),
                (0, r.jsx)(E.Z, {
                    title: S.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                    note: e,
                    action: t
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'handleDownload', r = () => {
            window.open(this.getPlatform() === p.PlatformTypes.WINDOWS ? h.Z.getArticleURL(g.BhN.CORRUPT_INSTALLATION) : g.EYA.DOWNLOAD);
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
