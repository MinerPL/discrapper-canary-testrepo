var n = r(381538);
function i() {
    return (i =
        n ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }).apply(this, arguments);
}
function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                a(t, e, r[e]);
            });
    }
    return t;
}
function a(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = r),
        t
    );
}
var u = r(428374),
    s = r(297326),
    c = r(470079),
    l = r(1231),
    f = r(292489),
    p = r(675411),
    h = r(685536),
    d = r(126502),
    g = r(65183),
    y = r(581079),
    v = r(822274);
g.List;
var m = function (t, e) {
        return t.getAnchorKey() === e || t.getFocusKey() === e;
    },
    _ = function (t, e) {
        var r = t.getNextSiblingKey();
        return !!r && e.getBlockForKey(r).getType() === t.getType();
    },
    b = function (t, e, r) {
        var n = [],
            i = !0,
            o = !1,
            a = void 0;
        try {
            for (var u, l = r.reverse()[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                var f = u.value;
                if (f.type !== e) break;
                n.push(f);
            }
        } catch (t) {
            (o = !0), (a = t);
        } finally {
            try {
                !i && null != l.return && l.return();
            } finally {
                if (o) throw a;
            }
        }
        r.splice(r.indexOf(n[0]), n.length + 1);
        var p = n.reverse(),
            h = p[0].key;
        return (
            r.push(
                c.cloneElement(
                    t,
                    {
                        key: ''.concat(h, '-wrap'),
                        'data-offset-key': s.encode(h, 0, 0)
                    },
                    p
                )
            ),
            r
        );
    },
    S = function (t, e) {
        var r = e.get(t.getType()) || e.get('unstyled'),
            n = r.wrapper;
        return {
            Element: r.element || e.get('unstyled').element,
            wrapperTemplate: n
        };
    },
    w = function (t, e) {
        var r = e(t);
        return r
            ? {
                  CustomComponent: r.component,
                  customProps: r.props,
                  customEditable: r.editable
              }
            : {};
    },
    k = function (t, e, r, n, i, a) {
        var u = {
                'data-block': !0,
                'data-editor': e,
                'data-offset-key': r,
                key: t.getKey(),
                ref: a
            },
            s = n(t);
        return (
            s && (u.className = s),
            void 0 !== i.customEditable &&
                (u = o({}, u, {
                    contentEditable: i.customEditable,
                    suppressContentEditableWarning: !0
                })),
            u
        );
    },
    x = (function (t) {
        function e() {
            for (var e, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            return (
                a(
                    (function (t) {
                        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t;
                    })((e = t.call.apply(t, [this].concat(n)) || this)),
                    'wrapperRef',
                    c.createRef()
                ),
                e
            );
        }
        (r = e), (n = t), (r.prototype = Object.create(n.prototype)), (r.prototype.constructor = r), (r.__proto__ = n);
        var r,
            n,
            g = e.prototype;
        return (
            (g.shouldComponentUpdate = function (t) {
                var e = this.props,
                    r = e.block,
                    n = e.direction,
                    i = e.tree,
                    o = !r.getChildKeys().isEmpty(),
                    a = r !== t.block || i !== t.tree || n !== t.direction || (m(t.selection, t.block.getKey()) && t.forceSelection);
                return o || a;
            }),
            (g.componentDidMount = function () {
                var t,
                    e = this.props.selection,
                    r = e.getEndKey();
                if (!e.getHasFocus() || r !== this.props.block.getKey()) return;
                var n = this.wrapperRef.current;
                if (!!n) {
                    var i = f.getScrollParent(n),
                        o = h(i);
                    if (i === window) {
                        var a = p(n),
                            u = a.y + a.height;
                        (t = u - d().height) > 0 && window.scrollTo(o.x, o.y + t + 10);
                    } else {
                        v(n) || y(!1);
                        var s = n.offsetHeight + n.offsetTop;
                        (t = s - (i.offsetHeight + o.y)) > 0 && l.setTop(i, l.getTop(i) + t + 10);
                    }
                }
            }),
            (g.render = function () {
                var t = this,
                    r = this.props,
                    n = r.block,
                    a = r.blockRenderMap,
                    l = r.blockRendererFn,
                    f = r.blockStyleFn,
                    p = r.contentState,
                    h = r.decorator,
                    d = r.editorKey,
                    g = r.editorState,
                    y = r.customStyleFn,
                    v = r.customStyleMap,
                    x = r.direction,
                    C = r.forceSelection,
                    E = r.selection,
                    D = r.tree,
                    O = null;
                n.children.size &&
                    (O = n.children.reduce(function (r, n) {
                        var i = s.encode(n, 0, 0),
                            u = p.getBlockForKey(n),
                            h = w(u, l),
                            y = h.CustomComponent || e,
                            v = S(u, a),
                            m = v.Element,
                            x = v.wrapperTemplate,
                            C = k(u, d, i, f, h, null),
                            E = o({}, t.props, {
                                tree: g.getBlockTree(n),
                                blockProps: h.customProps,
                                offsetKey: i,
                                block: u
                            });
                        return (r.push(c.createElement(m, C, c.createElement(y, E))), !x || _(u, p)) ? r : (b(x, m, r), r);
                    }, []));
                var K = n.getKey(),
                    T = s.encode(K, 0, 0),
                    M = w(n, l),
                    A = M.CustomComponent,
                    I =
                        null != A
                            ? c.createElement(
                                  A,
                                  i({}, this.props, {
                                      tree: g.getBlockTree(K),
                                      blockProps: M.customProps,
                                      offsetKey: T,
                                      block: n
                                  })
                              )
                            : c.createElement(u, {
                                  block: n,
                                  children: O,
                                  contentState: p,
                                  customStyleFn: y,
                                  customStyleMap: v,
                                  decorator: h,
                                  direction: x,
                                  forceSelection: C,
                                  hasSelection: m(E, K),
                                  selection: E,
                                  tree: D
                              });
                if (n.getParentKey()) return I;
                var B = S(n, a).Element,
                    L = k(n, d, T, f, M, this.wrapperRef);
                return c.createElement(B, L, I);
            }),
            e
        );
    })(c.Component);
t.exports = x;
