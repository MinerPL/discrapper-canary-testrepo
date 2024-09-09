var r = n(126387),
    i = n(493623),
    a = n(67966),
    s = n(343713),
    o = n(205208),
    l = n(464826),
    u = n(544338),
    c = n(581206),
    d = n(740078);
t.Z = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t,
            n,
            a,
            _ = e.state,
            E = e.name,
            f = e.options,
            h = _.elements.arrow,
            p = _.modifiersData.popperOffsets,
            m = (0, r.Z)(_.placement),
            I = (0, o.Z)(m),
            T = [d.t$, d.F2].indexOf(m) >= 0 ? 'height' : 'width';
        if (!!h && !!p) {
            var g = ((t = f.padding), (n = _), (t = 'function' == typeof t ? t(Object.assign({}, n.rects, { placement: n.placement })) : t), (0, u.Z)('number' != typeof t ? t : (0, c.Z)(t, d.mv))),
                S = (0, i.Z)(h),
                A = 'y' === I ? d.we : d.t$,
                N = 'y' === I ? d.I : d.F2,
                v = _.rects.reference[T] + _.rects.reference[I] - p[I] - _.rects.popper[T],
                O = p[I] - _.rects.reference[I],
                R = (0, s.Z)(h),
                C = R ? ('y' === I ? R.clientHeight || 0 : R.clientWidth || 0) : 0,
                y = g[A],
                D = C - S[T] - g[N],
                L = C / 2 - S[T] / 2 + (v / 2 - O / 2),
                b = (0, l.u)(y, L, D);
            _.modifiersData[E] = (((a = {})[I] = b), (a.centerOffset = b - L), a);
        }
    },
    effect: function (e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? '[data-popper-arrow]' : n;
        if (null != r && ('string' != typeof r || !!(r = t.elements.popper.querySelector(r))) && !!(0, a.Z)(t.elements.popper, r)) t.elements.arrow = r;
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};
