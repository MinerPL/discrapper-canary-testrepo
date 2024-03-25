"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var i = a("37983"),
  n = a("884691"),
  l = a("77078"),
  d = a("685665"),
  u = a("349649"),
  s = a("401642"),
  o = a("271938"),
  r = a("102985"),
  c = a("599110"),
  f = a("49111"),
  I = a("590456"),
  p = a("782340");

function A(e) {
  let {
    user: t,
    guildId: a,
    context: A
  } = e, {
    id: T
  } = t, {
    loading: S,
    note: v
  } = (0, u.default)(T), _ = !S && null != v && v.length > 0, m = A === f.AppContext.POPOUT, y = n.useContext(c.AnalyticsContext), {
    analyticsLocations: E
  } = (0, d.default)();
  return T === o.default.getId() || r.default.hidePersonalInformation || m ? null : (0, i.jsx)(l.MenuItem, {
    id: "note",
    label: S ? p.default.Messages.LOADING_NOTE : _ ? p.default.Messages.EDIT_NOTE : p.default.Messages.ADD_NOTE,
    action: () => {
      (0, s.openUserProfileModal)({
        userId: t.id,
        section: I.UserProfileSections.USER_INFO,
        guildId: a,
        autoFocusNote: !0,
        sourceAnalyticsLocations: E,
        analyticsLocation: y.location
      })
    }
  })
}