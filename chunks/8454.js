n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(442837),
    i = n(314897),
    a = n(158776),
    s = n(676035),
    o = n(981631);
function l(e) {
    let t = (0, r.e7)([i.default], () => i.default.getId() === e),
        n = (0, s.a)(),
        l = (0, r.e7)([a.Z], () =>
            a.Z.findActivity(e, (e) => {
                let { type: t } = e;
                return t === o.IIU.CUSTOM_STATUS;
            })
        );
    return t ? n : l;
}
