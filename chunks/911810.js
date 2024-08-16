n.d(t, {
    k: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(939350),
    o = n(837244);
function l(e) {
    let { contents: t, label: n, className: i, color: l = 'default' } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              'aria-label': n,
              role: 'group',
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)('div', {
                            className: a()(o.groupLabel, o.hideInteraction, s._[l]),
                            children: n
                        })
                      : null,
                  t
              ]
          });
}
