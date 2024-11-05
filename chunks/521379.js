n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(757143);
var i,
    r,
    s,
    a,
    l = n(200651),
    o = n(192379),
    c = n(442837),
    u = n(388905),
    d = n(108427),
    h = n(559786);
c.ZP.initialize();
class g extends (i = o.PureComponent) {
    componentDidMount() {
        (0, d.e)('account_revert');
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, l.jsx)(u.ZP, {
            style: { padding: 0 },
            children: (0, l.jsx)(h.Z, {
                width: 464,
                token: e,
                ...this.props
            })
        });
    }
}
(r = g),
    (s = 'defaultProps'),
    (a = {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e)
    }),
    s in r
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a);
