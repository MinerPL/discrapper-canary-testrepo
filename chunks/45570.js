t.d(n, {
    Z: function () {
        return a;
    }
});
var r = t(200651);
t(192379);
var o = t(481060),
    i = t(547972),
    l = t(326528);
function a() {
    let e = (0, l.b)().map((e) =>
        (0, r.jsx)(
            o.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, i.Z)(e.id)
            },
            e.id
        )
    );
    return (0, r.jsx)(r.Fragment, { children: e });
}
