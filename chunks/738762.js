n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(493683),
    l = n(367907),
    o = n(205129),
    c = n(626135),
    d = n(981631),
    u = n(689938);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: _ } = e,
        E = a.useContext(c.AnalyticsContext),
        h = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        m = 1 === _.length && 1 === n.length,
        I = n.length - _.length > 0;
    return (m || t) && !I && 0 !== h.length
        ? (0, i.jsx)(s.MenuItem, {
              id: 'message',
              action: function () {
                  r.Z.openPrivateChannel(h).then((t) =>
                      l.ZP.trackWithMetadata(d.rMx.ACTIVITY_FEED_DM_VISITED, {
                          source: {
                              ...E.location,
                              object: d.qAy.LIST_ITEM
                          },
                          channel_id: t,
                          recipient_id: 'string' == typeof h ? h : h[0],
                          af_recently_played: !1,
                          ...(0, o.y)(e)
                      })
                  );
              },
              label: u.Z.Messages.SEND_DM
          })
        : null;
}
