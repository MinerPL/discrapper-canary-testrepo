i.d(n, {
    Z: function () {
        return c;
    }
});
var t = i(735250);
i(470079);
var l = i(442837),
    s = i(481060),
    a = i(475179),
    u = i(703656),
    o = i(496675),
    r = i(981631),
    d = i(689938);
function c(e, n) {
    return (0, l.e7)([o.Z], () => o.Z.can(r.Plq.CONNECT, e), [e]) && e.isGuildVocal()
        ? (0, t.jsx)(s.MenuItem, {
              id: 'open-chat',
              label: d.Z.Messages.OPEN_CHAT,
              action: () => {
                  a.Z.updateChatOpen(e.id, !0), (0, u.XU)(n.id, e.id);
              }
          })
        : null;
}
