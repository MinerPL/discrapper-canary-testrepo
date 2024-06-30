n.d(t, {
    b: function () {
        return c;
    }
});
var r = n(735250), o = n(470079), i = n(120356), l = n.n(i), u = n(481060), a = n(727857);
function c(e) {
    let {
            chunks: t,
            columns: n,
            className: i
        } = e, c = o.useMemo(() => ({ '--secure-frames-columns': n }), [n]);
    return (0, r.jsx)('div', {
        style: c,
        className: l()(a.code, i),
        children: t.map((e, t) => (0, r.jsx)('div', {
            className: l()(a.chunk, { [a.divider]: t > n - 1 }),
            children: (0, r.jsx)(u.Text, {
                className: a.codeText,
                variant: 'code',
                color: 'text-normal',
                children: e
            })
        }, ''.concat(e, '-').concat(t)))
    });
}
