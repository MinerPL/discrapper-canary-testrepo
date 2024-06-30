n(47120);
var i = n(748780), s = n(570140), a = n(317770), r = n(716578), l = n(928518);
function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class c extends a.Z {
    _initialize() {
        l.Z.addChangeListener(this.handlePopoutWindowChange), s.Z.subscribe('WINDOW_FOCUS', this.handleMainWindowFocus);
    }
    _terminate() {
        l.Z.removeChangeListener(this.handlePopoutWindowChange), s.Z.unsubscribe('WINDOW_FOCUS', this.handleMainWindowFocus), this.injectWindowAnimationFrame(window);
    }
    injectWindowAnimationFrame(e) {
        let t = t => e.requestAnimationFrame(t), n = t => e.cancelAnimationFrame(t);
        i.Z.inject.RequestAnimationFrame(t), i.Z.inject.CancelAnimationFrame(n), r.f.setRAF(t, n);
    }
    constructor(...e) {
        super(...e), o(this, 'handleMainWindowFocus', e => {
            let {focused: t} = e;
            t && this.injectWindowAnimationFrame(window);
        }), o(this, 'handlePopoutWindowChange', () => {
            let e = l.Z.getWindowKeys().find(e => l.Z.getWindowFocused(e));
            if (null == e)
                return this.injectWindowAnimationFrame(window);
            let t = l.Z.getWindow(e);
            if (null == t || t.closed)
                return this.injectWindowAnimationFrame(window);
            this.injectWindowAnimationFrame(t);
        });
    }
}
t.Z = new c();
