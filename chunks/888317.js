n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(442837),
    a = n(481060),
    s = n(403404),
    o = n(906732),
    l = n(26033),
    u = n(592125),
    c = n(944486),
    d = n(701488),
    f = n(388032);
function _(e) {
    let { display: t, entry: n, onAction: _ } = e,
        { analyticsLocations: h } = (0, o.ZP)(),
        p = (0, i.e7)([u.Z, c.Z], () => u.Z.getChannel(c.Z.getChannelId()));
    return 'live' !== t && (0, l.Mq)(n)
        ? (0, r.jsx)(a.MenuItem, {
              id: 'view-activity',
              label: f.intl.string(f.t.GDWYR0),
              action: () => {
                  var e;
                  null == _ || _({ action: 'PRESS_VIEW_ACTIVITY_MENU_ITEM' }),
                      (0, s.Z)({
                          channel: p,
                          guildId: null !== (e = null == p ? void 0 : p.getGuildId()) && void 0 !== e ? e : void 0,
                          analyticsLocations: h,
                          locationObject: {},
                          openInPopout: !1,
                          initialSelectedApplicationId: n.extra.application_id,
                          initialSlide: d.ag.DETAIL_PAGE
                      });
              }
          })
        : null;
}
