n.d(t, {
    Z: function () {
        return s;
    }
}), n(47120), n(653041);
var r = n(341702), i = n(887490);
let a = new Set([
        'line',
        'blockQuote'
    ]), o = [];
function s(e, t, n) {
    if (i.bN.areStylesDisabled(e))
        return [];
    let [s, l] = t;
    if (1 !== l.length || !i.aj.isInTypes(s, a))
        return o;
    let {
            entries: u,
            serializedChildren: c
        } = i.q.markdown(s, n, !0), d = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let a = u[t - 1], o = u[t + 1], s = (0, r.t)(e, l, c, n.start), _ = {
                    anchor: s,
                    focus: (0, r.t)(e, l, c, n.start + n.text.length)
                }, E = i.bN.nodes(e, {
                    at: _,
                    mode: 'lowest',
                    voids: !1
                }), f = {};
            for (let e of n.attributes)
                if (f[e] = !0, 'syntaxBefore' === e && null != o)
                    for (let e of o.attributes)
                        f['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != a)
                    for (let e of a.attributes)
                        f['after_'.concat(e)] = !0;
            for (let [t, n] of E) {
                let t = {
                    anchor: i.bN.start(e, n),
                    focus: i.bN.end(e, n)
                };
                i.Jz.isBefore(t.anchor, _.anchor) && (t.anchor = _.anchor), i.Jz.isAfter(t.focus, _.focus) && (t.focus = _.focus), d.push({
                    ...f,
                    ...t
                });
            }
        }
    }
    return d;
}
