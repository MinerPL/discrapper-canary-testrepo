e.d(t, {
    Z: function () {
        return s;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(493683),
    o = e(592125),
    u = e(594174),
    d = e(388032);
function s(n, t) {
    var e;
    let s = (0, r.e7)([u.default], () => u.default.getCurrentUser(), []),
        c = (0, r.e7)([o.Z], () => o.Z.getChannel(t), [t]);
    return null == c || c.isOwner(n) || null == s || !c.isOwner(s.id) || !(null === (e = c.recipients) || void 0 === e ? void 0 : e.includes(n))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'remove',
              label: d.intl.string(d.t.n5zMIy),
              action: () => a.Z.removeRecipient(t, n),
              color: 'danger'
          });
}
