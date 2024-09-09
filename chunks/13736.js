t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(787014),
    d = t(665906),
    s = t(689938);
function o(e) {
    let n = (0, d.C7)(e),
        t = (0, d.$R)(e),
        o = (0, d.Gu)(e);
    return !n || !t || o || __OVERLAY__
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'edit-thread',
              label: e.isForumPost() ? s.Z.Messages.EDIT_FORUM_POST : s.Z.Messages.EDIT_THREAD,
              action: () => {
                  (0, a.closeAllModals)(), r.ZP.open(e.id);
              }
          });
}
