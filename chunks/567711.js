t.d(e, {
    Z: function () {
        return M;
    }
});
var r = t(735250);
t(470079);
var u = t(442837),
    i = t(481060),
    a = t(313889),
    o = t(825829),
    l = t(36459),
    c = t(592125),
    d = t(375954),
    _ = t(496675),
    s = t(981631),
    E = t(689938);
function M(n, e) {
    let t = (0, u.e7)([_.Z], () => null != n && _.Z.canWithPartialContext(s.Plq.MANAGE_MESSAGES, { channelId: n }), [n]),
        M = (0, u.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = (0, u.e7)([d.Z], () => (null != n && null != e ? d.Z.getMessage(n, e) : null)),
        A = (0, o.NK)(null != f ? f : null);
    if (null == M || null == f) return null;
    let O = null != A && A.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
        I = O === a.d.SET_COMPLETED ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
    return t && null != e
        ? (0, r.jsx)(
              i.MenuItem,
              {
                  id: 'mark-automod-alert-completed',
                  label: I,
                  action: () => {
                      (0, l.Xx)(e, M, O);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
