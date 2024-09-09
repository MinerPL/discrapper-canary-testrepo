t.d(n, {
    Z: function () {
        return c;
    }
});
var o = t(735250);
t(470079);
var r = t(481060),
    a = t(547972),
    i = t(326528);
function c() {
    let e = (0, i.b)().map((e) =>
        (0, o.jsx)(
            r.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, a.Z)(e.id)
            },
            e.id
        )
    );
    return (0, o.jsx)(o.Fragment, { children: e });
}
