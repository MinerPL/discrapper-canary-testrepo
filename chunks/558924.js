t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    s = t(26151),
    o = t(358221),
    d = t(985588),
    l = t(354459),
    u = t(689938);
function c(e, n) {
    let [t, c] = (0, r.Wu)([o.Z], () => [o.Z.getParticipants(n), o.Z.getParticipant(n, e.id)], [n, e.id]);
    return (0, d.s)(e) && 0 !== t.length
        ? null == c
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'ring',
                  label: u.Z.Messages.RING,
                  action: () => s.Z.ring(n, [e.id])
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, i.jsx)(a.MenuItem, {
                    id: 'stop-ringing',
                    label: u.Z.Messages.STOP_RINGING,
                    action: () => s.Z.stopRinging(n, [e.id])
                })
              : null
        : null;
}
