n.d(t, {
    h: function () {
        return d;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(909820),
    o = n(740492),
    c = n(937995),
    u = n(618158);
function d(e) {
    let { buttonRef: t, dismissed: n, onDismiss: d, renderComponent: h } = e,
        m = a.useContext(c.h9),
        [p, _] = a.useState(''),
        [E, f] = a.useState(!1),
        C = (0, s.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        g = a.createRef(),
        I = a.useRef(0);
    a.useEffect(() => {
        var e, t;
        _(String(I.current)), f(void 0 !== C && C < (null !== (t = null === (e = g.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (I.current += 1);
    }, [C, g]);
    let { preventIdle: x, allowIdle: T } = (0, u.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(r.ZP, {
              children: (0, i.jsx)(l.ReferencePositionLayer, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  nudgeAlignIntoViewport: !1,
                  positionKey: p,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: g,
                          onMouseOver: x,
                          onFocus: x,
                          onBlur: T,
                          onMouseLeave: T,
                          children: h({
                              hidden: E || m || n,
                              onDismiss: d
                          })
                      })
              })
          });
}
