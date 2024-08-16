t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var i = t(442837),
    l = t(481060),
    u = t(703656),
    r = t(914010),
    s = t(981631),
    d = t(689938);
function o(e) {
    let n = (0, i.e7)([r.Z], () => r.Z.getGuildId());
    return __OVERLAY__ || n !== s.I_8
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'go-to-original-guild',
              label: d.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
              action: function () {
                  (0, u.XU)(e.guild_id, e.id);
              }
          });
}
