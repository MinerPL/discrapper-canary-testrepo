n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var a = n(442837),
    l = n(814443),
    i = n(594174),
    o = n(681619),
    s = n(914121),
    c = n(535271);
let u = [
    {
        key: 'user',
        cellClassName: s.userCell,
        render(e) {
            var t;
            let { user: n, key: r } = e;
            return null !== (t = null == n ? void 0 : n.username) && void 0 !== t ? t : r;
        }
    },
    {
        key: 'affinity',
        cellClassName: s.affinityCell,
        render(e) {
            let { affinity: t } = e;
            return ''.concat(t);
        }
    }
];
function d() {
    let e = (0, a.Wu)([l.Z, i.default], () =>
        l.Z.getUserAffinities().map((e) => {
            let { user_id: t, affinity: n } = e;
            return {
                user: i.default.getUser(t),
                affinity: n,
                key: t
            };
        })
    );
    return 0 === e.length
        ? null
        : (0, r.jsx)(o.Z, {
              className: c.panel,
              columns: u,
              rowClassName: s.row,
              data: e
          });
}
