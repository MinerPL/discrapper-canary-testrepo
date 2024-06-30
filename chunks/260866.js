function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
n.d(t, {
    $o: function () {
        return _;
    },
    NE: function () {
        return c;
    },
    P1: function () {
        return l;
    },
    P2: function () {
        return d;
    },
    ie: function () {
        return i;
    },
    jb: function () {
        return o;
    },
    kn: function () {
        return a;
    },
    qR: function () {
        return u;
    },
    x3: function () {
        return s;
    }
}), n(47120);
let i = 'data-list-item-id', a = 'data-list-id';
function o(e, t) {
    return ''.concat(e).concat('___').concat(t);
}
function s(e) {
    return e.split('___')[1];
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return '['.concat(t, '="').concat(e, '"]');
}
function u(e, t) {
    return ''.concat(e, '-').concat(t);
}
function c(e, t, n) {
    return ''.concat(e, '-').concat(t, '-').concat(n);
}
function d(e, t) {
    let n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
        !n && (e(...i), n = !0, setTimeout(() => n = !1, t));
    };
}
class _ {
    get(e) {
        let t = this.handlers.get(e);
        return null == t && (t = this.makeHandler(e), this.handlers.set(e, t)), t;
    }
    clean() {
        delete this.handlers, this.handlers = new Map();
    }
    constructor(e) {
        r(this, 'makeHandler', void 0), r(this, 'handlers', void 0), this.makeHandler = e, this.handlers = new Map(), this.makeHandler = e;
    }
}
