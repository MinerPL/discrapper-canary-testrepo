n.r(t),
    n.d(t, {
        IGNORE_CLASS_NAME: function () {
            return h;
        }
    });
var r,
    i,
    a = n(192379),
    s = n(995295);
function o(e, t) {
    return (o =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
var u = function () {
    if ('undefined' != typeof window && 'function' == typeof window.addEventListener) {
        var e = !1,
            t = Object.defineProperty({}, 'passive', {
                get: function () {
                    e = !0;
                }
            }),
            n = function () {};
        return window.addEventListener('testPassiveEventSupport', n, t), window.removeEventListener('testPassiveEventSupport', n, t), e;
    }
};
var c =
        (void 0 === r && (r = 0),
        function () {
            return ++r;
        }),
    d = {},
    f = {},
    _ = ['touchstart', 'touchmove'],
    h = 'ignore-react-onclickoutside';
function p(e, t) {
    var n = {};
    return -1 !== _.indexOf(t) && i && (n.passive = !e.props.preventDefault), n;
}
t.default = function (e, t) {
    var n,
        r,
        _ = e.displayName || e.name || 'Component';
    return (
        (r = n =
            (function (n) {
                function r(e) {
                    var r;
                    return (
                        ((r = n.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ('function' == typeof r.__clickOutsideHandlerProp) {
                                r.__clickOutsideHandlerProp(e);
                                return;
                            }
                            var t = r.getInstance();
                            if ('function' == typeof t.props.handleClickOutside) {
                                t.props.handleClickOutside(e);
                                return;
                            }
                            if ('function' == typeof t.handleClickOutside) {
                                t.handleClickOutside(e);
                                return;
                            }
                            throw Error('WrappedComponent: ' + _ + ' lacks a handleClickOutside(event) function for processing outside click events.');
                        }),
                        (r.__getComponentNode = function () {
                            var e = r.getInstance();
                            return t && 'function' == typeof t.setClickOutsideRef ? t.setClickOutsideRef()(e) : 'function' == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : (0, s.findDOMNode)(e);
                        }),
                        (r.enableOnClickOutside = function () {
                            if ('undefined' != typeof document && !f[r._uid]) {
                                void 0 === i && (i = u()), (f[r._uid] = !0);
                                var e = r.props.eventTypes;
                                !e.forEach && (e = [e]),
                                    (d[r._uid] = function (e) {
                                        var t;
                                        if (null !== r.componentNode) {
                                            if ((r.props.preventDefault && e.preventDefault(), r.props.stopPropagation && e.stopPropagation(), !(r.props.excludeScrollbar && ((t = e), document.documentElement.clientWidth <= t.clientX || document.documentElement.clientHeight <= t.clientY)))) {
                                                if (
                                                    (function (e, t, n) {
                                                        if (e === t) return !0;
                                                        for (; e.parentNode || e.host; ) {
                                                            var r, i, a;
                                                            if (e.parentNode && ((r = e), (i = t), (a = n), r === i || (r.correspondingElement ? r.correspondingElement.classList.contains(a) : r.classList.contains(a)))) return !0;
                                                            e = e.parentNode || e.host;
                                                        }
                                                        return e;
                                                    })((e.composed && e.composedPath && e.composedPath().shift()) || e.target, r.componentNode, r.props.outsideClickIgnoreClass) !== document
                                                )
                                                    return;
                                                r.__outsideClickHandler(e);
                                            }
                                        }
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, d[r._uid], p(l(r), e));
                                    });
                            }
                        }),
                        (r.disableOnClickOutside = function () {
                            delete f[r._uid];
                            var e = d[r._uid];
                            if (e && 'undefined' != typeof document) {
                                var t = r.props.eventTypes;
                                !t.forEach && (t = [t]),
                                    t.forEach(function (t) {
                                        return document.removeEventListener(t, e, p(l(r), t));
                                    }),
                                    delete d[r._uid];
                            }
                        }),
                        (r.getRef = function (e) {
                            return (r.instanceRef = e);
                        }),
                        (r._uid = c()),
                        r
                    );
                }
                (h = r), (m = n), (h.prototype = Object.create(m.prototype)), (h.prototype.constructor = h), o(h, m);
                var h,
                    m,
                    g = r.prototype;
                return (
                    (g.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent) return this;
                        var t = this.instanceRef;
                        return t.getInstance ? t.getInstance() : t;
                    }),
                    (g.componentDidMount = function () {
                        if ('undefined' != typeof document && !!document.createElement) {
                            var e = this.getInstance();
                            if (t && 'function' == typeof t.handleClickOutside && ((this.__clickOutsideHandlerProp = t.handleClickOutside(e)), 'function' != typeof this.__clickOutsideHandlerProp)) throw Error('WrappedComponent: ' + _ + ' lacks a function for processing outside click events specified by the handleClickOutside config option.');
                            (this.componentNode = this.__getComponentNode()), !this.props.disableOnClickOutside && this.enableOnClickOutside();
                        }
                    }),
                    (g.componentDidUpdate = function () {
                        this.componentNode = this.__getComponentNode();
                    }),
                    (g.componentWillUnmount = function () {
                        this.disableOnClickOutside();
                    }),
                    (g.render = function () {
                        var t = this.props;
                        t.excludeScrollbar;
                        var n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                            return i;
                        })(t, ['excludeScrollbar']);
                        return e.prototype && e.prototype.isReactComponent ? (n.ref = this.getRef) : (n.wrappedRef = this.getRef), (n.disableOnClickOutside = this.disableOnClickOutside), (n.enableOnClickOutside = this.enableOnClickOutside), (0, a.createElement)(e, n);
                    }),
                    r
                );
            })(a.Component)),
        (n.displayName = 'OnClickOutside(' + _ + ')'),
        (n.defaultProps = {
            eventTypes: ['mousedown', 'touchstart'],
            excludeScrollbar: (t && t.excludeScrollbar) || !1,
            outsideClickIgnoreClass: h,
            preventDefault: !1,
            stopPropagation: !1
        }),
        (n.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        r
    );
};
