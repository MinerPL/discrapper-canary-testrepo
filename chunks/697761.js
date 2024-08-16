n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(710845),
    a = n(620662),
    s = n(915863),
    o = n(981631),
    l = n(689938);
function u(e) {
    let { activity: t, user: n, look: u, color: c, onAction: d } = e;
    return (0, a.Z)(t, o.xjy.INSTANCE)
        ? (0, r.jsx)(
              s.Z,
              {
                  look: u,
                  color: c,
                  onClick: () => {
                      null == d || d(), new i.Z('UserActivityActions').log('notify', n.id, t);
                  },
                  fullWidth: !0,
                  children: l.Z.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
              },
              'notify'
          )
        : null;
}
