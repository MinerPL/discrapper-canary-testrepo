n.d(l, {
    Z: function () {
        return p;
    }
});
var t = n(735250), i = n(470079), r = n(120356), a = n.n(r), s = n(454585), u = n(937889), o = n(970184), d = n(870456), c = n(283370), m = n(622322);
function p(e) {
    let {
            content: l,
            className: n
        } = e, r = function (e) {
            let l = (0, o.CJ)();
            return (0, i.useMemo)(() => {
                let n;
                return null === l ? null : (n = null != l.message ? (0, u.rs)(l.message, d.u) : (0, u.p6)({
                    channelId: l.channelId,
                    renderOptions: d.u
                }), s.Z.parse(e, !0, n));
            }, [
                e,
                l
            ]);
        }(l);
    return (0, t.jsx)('div', {
        className: a()([
            n,
            m.markup,
            c.markdownContainer
        ]),
        children: r
    });
}
