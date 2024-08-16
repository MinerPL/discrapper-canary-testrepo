n.d(t, {
    K: function () {
        return h;
    },
    y: function () {
        return f;
    }
}),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s = n(735250),
    o = n(470079),
    l = n(922770),
    u = n(930295),
    c = n(126306),
    d = n(890551);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((a = r || (r = {})).NONE = '1'), (a.TRANSLATE = '2'), (a.SCALE = '3'), (a.FADE = '4');
let E = Object.freeze({
    2: c.l.Types.TRANSLATE,
    3: c.l.Types.SCALE,
    4: c.l.Types.FADE
});
class f extends (i = o.Component) {
    render() {
        let { children: e, shouldShow: t, position: n, onRequestOpen: r, onRequestClose: i, align: a, autoInvert: o, fixed: l, nudgeAlignIntoViewport: c, useRawTargetDimensions: d, spacing: _, onShiftClick: E, positionKey: f, preload: h, disablePointerEvents: p, ignoreModalClicks: m, closeOnScroll: I, useMouseEnter: T, renderPopout: g, layerContext: S } = this.props;
        return (0, s.jsx)(u.H, {
            ref: this.ref,
            preload: h,
            position: n,
            align:
                null != a
                    ? a
                    : (function (e) {
                          switch (e) {
                              case 'top':
                              case 'bottom':
                                  return 'left';
                              case 'left':
                              case 'right':
                                  return 'top';
                              case 'center':
                              case 'window_center':
                                  return 'center';
                          }
                          throw Error('Unexpected position: '.concat(e));
                      })(n),
            autoInvert: o,
            fixed: l,
            nudgeAlignIntoViewport: c,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: _,
            shouldShow: null != g && t,
            onRequestOpen: r,
            onRequestClose: i,
            onShiftClick: E,
            positionKey: f,
            disablePointerEvents: p,
            ignoreModalClicks: m,
            closeOnScroll: I,
            useMouseEnter: T,
            layerContext: S,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'ref', o.createRef()),
            _(this, 'renderPopout', (e) => {
                let { renderPopout: t, animation: n, animationPosition: r } = this.props;
                switch ((null != r && null != e.position && (e.position = r), n)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, s.jsx)(c.l, {
                            position: e.position,
                            type: E[n],
                            children: t(e)
                        });
                    case '1':
                        return t(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(n)));
            });
    }
}
function h(e) {
    let { renderPopout: t, ...n } = e,
        r = o.useRef(null),
        [i, a] = o.useState(0);
    function u() {
        return _(), (0, s.jsx)(s.Fragment, {});
    }
    o.useLayoutEffect(() => {
        if (i > 0) {
            var e, t, n, a, s;
            null === (s = r.current) || void 0 === s || null === (a = s.ref) || void 0 === a || null === (n = a.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition();
        }
    }, [i]),
        o.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        }, []);
    let c = o.useRef(!1);
    async function _() {
        if (!c.current) {
            c.current = !0;
            let e = setTimeout(() => {
                    p(() => E), a((e) => e + 1);
                }, 300),
                n = await t();
            p(() => n), a((e) => e + 1), clearTimeout(e);
        }
    }
    function E() {
        var e, t, n, i;
        let a = null === (i = r.current) || void 0 === i ? void 0 : null === (n = i.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
            o = Math.max(100, null == a ? 100 : a.offsetWidth - 20);
        return (0, s.jsx)('div', {
            className: d.loader,
            style: { width: o },
            children: (0, s.jsx)(l.$, {})
        });
    }
    let [h, p] = o.useState(() => u);
    return (
        o.useEffect(() => {
            c.current
                ? t().then((e) => {
                      p(() => e), a((e) => e + 1);
                  })
                : p(u);
        }, [t]),
        (0, s.jsx)(f, {
            ref: r,
            ...n,
            renderPopout: h
        })
    );
}
_(f, 'Animation', r),
    _(f, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (h.Animation = r);
