n.d(t, {
    K: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(803997),
    a = n.n(i),
    s = n(534493);
function o(e) {
    let { gap: t = 8, direction: n = 'vertical', align: i = 'stretch', justify: o = 'start', padding: l = 0, style: u, className: c, children: d, ..._ } = e;
    return (0, r.jsx)('div', {
        'data-align': i,
        'data-justify': o,
        'data-direction': n,
        className: a()(s.stack, c),
        style: {
            ...u,
            ...(function (e) {
                return 'number' == typeof e
                    ? { padding: e }
                    : {
                          paddingLeft: e.left,
                          paddingRight: e.right,
                          paddingTop: e.top,
                          paddingBottom: e.bottom
                      };
            })(l),
            gap: t
        },
        ..._,
        children: d
    });
}
