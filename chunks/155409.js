n.d(t, {
    Z: function () {
        return E;
    }
});
var i,
    a,
    s,
    l,
    r = n(735250),
    o = n(470079),
    c = n(699581),
    u = n(374470),
    d = n(442837),
    h = n(260300),
    m = n(451478),
    p = n(5560),
    _ = n(10401);
class f extends (l = o.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: a, visible: s, windowSize: l } = e;
        a !== this.props.tutorialId ? h.Z.hide(a) : (s !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || l !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: i, offsetY: a, visible: s, inlineSpecs: l, autoInvert: r } = this.props;
        if (e && null == l) {
            let e = (0, c.findDOMNode)(this);
            if (!(0, u.k)(e)) return;
            let { top: s, left: l, right: o, bottom: d } = e.getBoundingClientRect();
            h.Z.show(t, {
                position: n,
                targetWidth: o - l,
                targetHeight: d - s,
                autoInvert: r,
                origin: {
                    x: l,
                    y: s
                },
                offset: {
                    x: i,
                    y: a
                }
            });
        } else s && h.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: i, windowFocused: a, position: s, autoInvert: l } = this.props,
            c = _.Z.getData()[t];
        return null != e && null != c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, r.jsx)(p.V, {
                              autoInvert: l,
                              position: s,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: a,
                              ...e
                          })
                  ]
              })
            : o.Children.only(n);
    }
}
function E(e) {
    let { tutorialId: t } = e,
        n = (0, d.e7)([_.Z], () => _.Z.shouldShow(t), [t]),
        i = (0, d.e7)([m.Z], () => m.Z.isFocused()),
        a = (0, d.e7)([m.Z], () => m.Z.windowSize(), []);
    return (0, r.jsx)(f, {
        ...e,
        visible: n,
        windowFocused: i,
        windowSize: a
    });
}
(s = {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
}),
    (a = 'defaultProps') in (i = f)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
