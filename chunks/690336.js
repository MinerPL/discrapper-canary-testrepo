n(653041), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(355863),
    a = n(451478),
    u = n(830917),
    c = n(388627),
    d = n(892127),
    h = n(84346),
    f = n(561064),
    p = n(501787);
function m(e) {
    return e.widget.id;
}
function v(e, t, n, o) {
    return n === l.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: o
              },
              e
          );
}
let g = [];
t.Z = o.memo(function (e) {
    let { className: t } = e,
        n = (0, f.Z)(),
        d = (0, r.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
        E = (0, r.e7)(
            [s.Z],
            () => {
                let e = s.Z.getLayout(p.$S);
                if (null == e) return g;
                let t = [];
                for (let n of e.widgets) {
                    let e = s.Z.getWidget(n);
                    if (null == e) continue;
                    let i = h.Z[e.type];
                    null != i &&
                        t.push({
                            widget: e,
                            ...i
                        });
                }
                return t;
            },
            [],
            c.HP
        ),
        _ = o.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: d,
                    children: e
                }),
            [t, d]
        );
    return (0, i.jsx)(l.TransitionGroup, {
        items: E,
        renderItem: v,
        getItemKey: m,
        wrapChildren: _
    });
});
