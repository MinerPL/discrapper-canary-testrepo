t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(668781),
    s = t(79390),
    o = t(222677),
    u = t(665906),
    d = t(496675),
    c = t(981631),
    E = t(689938);
function M(e, n) {
    let t = (0, u.$R)(n),
        M = (0, a.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [n, t]);
    return !M || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.eQ)(e))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'remove-reactions',
              label: E.Z.Messages.REMOVE_ALL_REACTIONS,
              action: function (t) {
                  t.shiftKey
                      ? (0, o.wX)(n.id, e.id)
                      : r.Z.show({
                            title: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                            body: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                            confirmText: E.Z.Messages.YES_TEXT,
                            cancelText: E.Z.Messages.NO_TEXT,
                            onConfirm: () => {
                                (0, o.wX)(n.id, e.id);
                            }
                        });
              },
              color: 'danger'
          });
}
