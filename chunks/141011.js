var a = n(735250), r = n(470079), o = n(120356), l = n.n(o), i = n(399606), s = n(376345), c = n(607070), d = n(302221), u = n(884697), f = n(372654), p = n(50812);
t.Z = e => {
    let {
            asset: t,
            size: n = f.yV,
            addGradient: o = !1,
            className: g,
            style: v,
            children: C,
            blur: E = !1
        } = e, h = (0, i.e7)([c.Z], () => c.Z.saturation), b = r.useMemo(() => {
            if (null == t)
                return v;
            let e = (0, u.uV)(t, {
                    size: n,
                    format: 'jpg'
                }), a = E ? {
                    filter: 'blur(2px)',
                    transform: 'scale(1.02)'
                } : {};
            if (1 === h)
                return {
                    ...v,
                    backgroundImage: o ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    ...a
                };
            let r = (0, d.aD)(s.ZP.unsafe_rawColors.BLACK_500, 1 - h);
            return {
                ...v,
                backgroundImage: 'linear-gradient('.concat(r, ', ').concat(r, '), url(').concat(e, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                ...a
            };
        }, [
            t,
            n,
            h,
            v,
            E,
            o
        ]);
    return (0, a.jsx)('div', {
        className: l()(p.banner, g),
        style: b,
        children: C
    });
};
