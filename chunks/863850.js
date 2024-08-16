r.d(t, {
    Z: function () {
        return k;
    }
});
var a = r(521464),
    n = r(157680),
    s = r(15393),
    o = r(337309),
    i = r(774375),
    c = r(748024),
    u = r(692378),
    l = r(870271),
    b = r(599295),
    f = r(470079),
    d = r(639519),
    h = r.n(d),
    p = r(949179),
    y = r(261411),
    g = r(852153),
    v = r(703205);
function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? m(Object(r), !0).forEach(function (t) {
                  (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function w(e) {
    return { expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level) };
}
var k = (function (e) {
    (0, o.Z)(h, e);
    var t,
        r,
        d =
            ((t = h),
            (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    a = (0, c.Z)(t);
                return (e = r ? Reflect.construct(a, arguments, (0, c.Z)(this).constructor) : a.apply(this, arguments)), (0, i.Z)(this, e);
            });
    function h(e) {
        var t;
        return (
            (0, a.Z)(this, h),
            (t = d.call(this, e)),
            (0, u.Z)((0, s.Z)(t), 'handleClick', function () {
                t.props.expandable && t.setState({ expanded: !t.state.expanded });
            }),
            (t.state = w(e)),
            t
        );
    }
    return (
        (0, n.Z)(h, [
            {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                    var t = w(e);
                    w(this.props).expanded !== t.expanded && this.setState(t);
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                    var r = this;
                    return (
                        !!Object.keys(e).find(function (t) {
                            return 'circularCache' !== t && ('keyPath' === t ? e[t].join('/') !== r.props[t].join('/') : e[t] !== r.props[t]);
                        }) || t.expanded !== this.state.expanded
                    );
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.getItemString,
                        r = e.nodeTypeIndicator,
                        a = e.nodeType,
                        n = e.data,
                        s = e.hideRoot,
                        o = e.createItemString,
                        i = e.styling,
                        c = e.collectionLimit,
                        u = e.keyPath,
                        d = e.labelRenderer,
                        h = e.expandable,
                        m = this.state.expanded,
                        w =
                            m || (s && 0 === this.props.level)
                                ? (function e(t, r, a) {
                                      var n = t.nodeType,
                                          s = t.data,
                                          o = t.collectionLimit,
                                          i = t.circularCache,
                                          c = t.keyPath,
                                          u = t.postprocessValue,
                                          d = t.sortObjectKeys,
                                          h = [];
                                      return (
                                          (0, y.Z)(n, s, d, o, r, a).forEach(function (r) {
                                              if (void 0 !== r.to)
                                                  h.push(
                                                      f.createElement(
                                                          v.Z,
                                                          (0, b.Z)({}, t, {
                                                              key: 'ItemRange--'.concat(r.from, '-').concat(r.to),
                                                              from: r.from,
                                                              to: r.to,
                                                              renderChildNodes: e
                                                          })
                                                      )
                                                  );
                                              else {
                                                  var a = r.key,
                                                      n = r.value,
                                                      s = -1 !== i.indexOf(n);
                                                  h.push(
                                                      f.createElement(
                                                          g.Z,
                                                          (0, b.Z)({}, t, {
                                                              postprocessValue: u,
                                                              collectionLimit: o,
                                                              key: 'Node--'.concat(a),
                                                              keyPath: [a].concat((0, l.Z)(c)),
                                                              value: u(n),
                                                              circularCache: [].concat((0, l.Z)(i), [n]),
                                                              isCircular: s,
                                                              hideRoot: !1
                                                          })
                                                      )
                                                  );
                                              }
                                          }),
                                          h
                                      );
                                  })(O(O({}, this.props), {}, { level: this.props.level + 1 }))
                                : null,
                        k = t(a, n, f.createElement('span', i('nestedNodeItemType', m), r), o(n, c), u),
                        E = [u, a, m, h];
                    return s
                        ? f.createElement('li', i.apply(void 0, ['rootNode'].concat(E)), f.createElement('ul', i.apply(void 0, ['rootNodeChildren'].concat(E)), w))
                        : f.createElement(
                              'li',
                              i.apply(void 0, ['nestedNode'].concat(E)),
                              h &&
                                  f.createElement(p.Z, {
                                      styling: i,
                                      nodeType: a,
                                      expanded: m,
                                      onClick: this.handleClick
                                  }),
                              f.createElement('label', (0, b.Z)({}, i.apply(void 0, [['label', 'nestedNodeLabel']].concat(E)), { onClick: this.handleClick }), d.apply(void 0, E)),
                              f.createElement('span', (0, b.Z)({}, i.apply(void 0, ['nestedNodeItemString'].concat(E)), { onClick: this.handleClick }), k),
                              f.createElement('ul', i.apply(void 0, ['nestedNodeChildren'].concat(E)), w)
                          );
                }
            }
        ]),
        h
    );
})(f.Component);
(0, u.Z)(k, 'propTypes', {
    getItemString: h().func.isRequired,
    nodeTypeIndicator: h().any,
    nodeType: h().string.isRequired,
    data: h().any,
    hideRoot: h().bool.isRequired,
    createItemString: h().func.isRequired,
    styling: h().func.isRequired,
    collectionLimit: h().number,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])).isRequired,
    labelRenderer: h().func.isRequired,
    shouldExpandNode: h().func,
    level: h().number.isRequired,
    sortObjectKeys: h().oneOfType([h().func, h().bool]),
    isCircular: h().bool,
    expandable: h().bool
}),
    (0, u.Z)(k, 'defaultProps', {
        data: [],
        circularCache: [],
        level: 0,
        expandable: !0
    });
