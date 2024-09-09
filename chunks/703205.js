r.d(t, {
    Z: function () {
        return p;
    }
});
var a = r(599295),
    n = r(521464),
    s = r(157680),
    o = r(15393),
    i = r(337309),
    c = r(774375),
    u = r(748024),
    l = r(692378),
    b = r(470079),
    f = r(639519),
    h = r.n(f),
    d = r(949179),
    p = (function (e) {
        (0, i.Z)(h, e);
        var t,
            r,
            f =
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
                        a = (0, u.Z)(t);
                    return (e = r ? Reflect.construct(a, arguments, (0, u.Z)(this).constructor) : a.apply(this, arguments)), (0, c.Z)(this, e);
                });
        function h(e) {
            var t;
            return (
                (0, n.Z)(this, h),
                (t = f.call(this, e)),
                (0, l.Z)((0, o.Z)(t), 'handleClick', function () {
                    t.setState({ expanded: !t.state.expanded });
                }),
                (t.state = { expanded: !1 }),
                t
            );
        }
        return (
            (0, s.Z)(h, [
                {
                    key: 'render',
                    value: function () {
                        var e = this.props,
                            t = e.styling,
                            r = e.from,
                            n = e.to,
                            s = e.renderChildNodes,
                            o = e.nodeType;
                        return this.state.expanded
                            ? b.createElement('div', t('itemRange', this.state.expanded), s(this.props, r, n))
                            : b.createElement(
                                  'div',
                                  (0, a.Z)({}, t('itemRange', this.state.expanded), { onClick: this.handleClick }),
                                  b.createElement(d.Z, {
                                      nodeType: o,
                                      styling: t,
                                      expanded: !1,
                                      onClick: this.handleClick,
                                      arrowStyle: 'double'
                                  }),
                                  ''.concat(r, ' ... ').concat(n)
                              );
                    }
                }
            ]),
            h
        );
    })(b.Component);
(0, l.Z)(p, 'propTypes', {
    styling: h().func.isRequired,
    from: h().number.isRequired,
    to: h().number.isRequired,
    renderChildNodes: h().func.isRequired,
    nodeType: h().string.isRequired
});
