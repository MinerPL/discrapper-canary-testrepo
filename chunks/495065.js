n.d(t, {
    R: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    l = n(497505),
    r = n(471985),
    o = n(602667),
    a = n(46140),
    c = n(689938);
function u(e) {
    return (0, r.Z)(a.dr.USER_SETTINGS_GIFT_INVENTORY)
        ? null
        : (0, i.jsx)(o.A, {
              questOrQuests: e.quests,
              questContent: l.jn.GIFT_INVENTORY_SETTINGS_BADGE,
              children: (e) =>
                  (0, i.jsx)('span', {
                      ref: e,
                      children: (0, i.jsx)(s.TextBadge, { text: c.Z.Messages.NEW })
                  })
          });
}
