t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(914010),
    u = t(362658),
    s = t(981631),
    o = t(689938);
function d(e) {
    let n = (0, a.e7)([r.Z], () => r.Z.getGuildId()),
        d = e.type === s.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, u.z)('useChannelFavoriteSetNickname');
    return __OVERLAY__ || n !== s.I_8
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'set-channel-nickname',
              label: c && d ? o.Z.Messages.FAVORITES_RENAME_CATEGORY : o.Z.Messages.CHANGE_NICKNAME,
              action: function () {
                  (0, l.openModalLazy)(async () => {
                      let { default: n } = await t.e('46161').then(t.bind(t, 238716));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              channelId: e.id,
                              heading: c && d ? o.Z.Messages.FAVORITES_RENAME_CATEGORY : o.Z.Messages.CHANGE_NICKNAME,
                              formTitle: c && d ? o.Z.Messages.CATEGORY_NAME : o.Z.Messages.NICKNAME,
                              allowReset: !(c && d)
                          });
                  });
              }
          });
}
