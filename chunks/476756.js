n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(716364),
    c = n(474873),
    d = n(197344),
    u = n(871465),
    m = n(388032);
function h() {
    let e = (0, l.e7)([c.Z], () => c.Z.getSoundpack()),
        t = d.Z.useHolidaySoundpack();
    r()(null != t, 'should not render this without a holiday soundpack');
    let n = [
        {
            value: u.YC.CLASSIC,
            label: m.intl.string(m.t.p3Hg5e)
        },
        {
            value: u.YC.HALLOWEEN,
            label: m.intl.string(m.t['+LasFR'])
        }
    ];
    return (0, i.jsx)(a.SingleSelect, {
        onChange: o.c,
        value: e,
        options: n,
        maxVisibleItems: n.length
    });
}
