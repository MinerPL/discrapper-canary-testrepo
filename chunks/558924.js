t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(26151),
    u = t(358221),
    s = t(314897),
    o = t(354459),
    d = t(689938);
function c(e, n) {
    let t = (0, a.e7)([s.default], () => s.default.getId() === e, [e]),
        [c, _] = (0, a.Wu)([u.Z], () => [u.Z.getParticipants(n), u.Z.getParticipant(n, e)], [n, e]);
    return t || 0 === c.length
        ? null
        : null == _
          ? (0, i.jsx)(l.MenuItem, {
                id: 'ring',
                label: d.Z.Messages.RING,
                action: () => r.Z.ring(n, [e])
            })
          : _.type === o.fO.USER && _.ringing
            ? (0, i.jsx)(l.MenuItem, {
                  id: 'stop-ringing',
                  label: d.Z.Messages.STOP_RINGING,
                  action: () => r.Z.stopRinging(n, [e])
              })
            : null;
}
