r.d(t, {
    a: function () {
        return d;
    }
});
var n = r(573654),
    o = r(139883);
function i(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function a(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
var s = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
    c = ['beginDrag'],
    u = (function () {
        var e, t, r;
        function n(e, t, r) {
            var o = this;
            !(function (e, t) {
                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
            })(this, n),
                a(this, 'props', null),
                a(this, 'spec', void 0),
                a(this, 'monitor', void 0),
                a(this, 'ref', void 0),
                a(this, 'beginDrag', function () {
                    if (!!o.props) {
                        var e = o.spec.beginDrag(o.props, o.monitor, o.ref.current);
                        return e;
                    }
                }),
                (this.spec = e),
                (this.monitor = t),
                (this.ref = r);
        }
        return (
            (e = n),
            (t = [
                {
                    key: 'receiveProps',
                    value: function (e) {
                        this.props = e;
                    }
                },
                {
                    key: 'canDrag',
                    value: function () {
                        return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor));
                    }
                },
                {
                    key: 'isDragging',
                    value: function (e, t) {
                        return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId());
                    }
                },
                {
                    key: 'endDrag',
                    value: function () {
                        if (!!this.props && !!this.spec.endDrag) this.spec.endDrag(this.props, this.monitor, (0, o.Al)(this.ref));
                    }
                }
            ]),
            i(e.prototype, t),
            n
        );
    })();
function d(e) {
    return (
        Object.keys(e).forEach(function (t) {
            (0, n.k)(s.indexOf(t) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', s.join(', '), t), (0, n.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
        }),
        c.forEach(function (t) {
            (0, n.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
        }),
        function (t, r) {
            return new u(e, t, r);
        }
    );
}
