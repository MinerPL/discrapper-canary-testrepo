n.d(t, {
    b: function () {
        return o;
    }
});
var r,
    i,
    a = n(836560);
((r = i || (i = {})).VERTICAL = 'vertical'), (r.HORIZONTAL = 'horizontal');
let s = {
    open: !1,
    orientation: null
};
class o extends a.EventEmitter {
    get orientations() {
        return Object.values(i);
    }
    get state() {
        return s;
    }
    check() {
        let e =
                (function () {
                    try {
                        return window.outerWidth - window.innerWidth;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            t =
                (function () {
                    try {
                        return window.outerHeight - window.innerHeight;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            n = e ? 'vertical' : 'horizontal';
        if (!(t && e) && (e || t)) {
            let e = s.open;
            (s = {
                open: !0,
                orientation: n
            }),
                (!e || s.orientation !== n) && this.emit('changed', s);
        } else s.open && ((s.open = !1), this.emit('changed', s));
    }
    constructor() {
        super(), setInterval(() => this.check(), 500);
    }
}
