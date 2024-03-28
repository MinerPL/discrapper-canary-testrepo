"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var l = a("735250"),
  n = a("470079"),
  u = a("481060"),
  d = a("906732"),
  s = a("702557"),
  i = a("171368"),
  o = a("314897"),
  r = a("246946"),
  f = a("626135"),
  c = a("981631"),
  M = a("228168"),
  m = a("689938");

function E(e) {
  let {
    user: t,
    guildId: a,
    context: E
  } = e, {
    id: g
  } = t, {
    loading: I,
    note: C
  } = (0, s.default)(g), _ = !I && null != C && C.length > 0, S = E === c.AppContext.POPOUT, T = n.useContext(f.AnalyticsContext), {
    analyticsLocations: N
  } = (0, d.default)();
  return g === o.default.getId() || r.default.hidePersonalInformation || S ? null : (0, l.jsx)(u.MenuItem, {
    id: "note",
    label: I ? m.default.Messages.LOADING_NOTE : _ ? m.default.Messages.EDIT_NOTE : m.default.Messages.ADD_NOTE,
    action: () => {
      (0, i.openUserProfileModal)({
        userId: t.id,
        section: M.UserProfileSections.USER_INFO,
        guildId: a,
        autoFocusNote: !0,
        sourceAnalyticsLocations: N,
        analyticsLocation: T.location
      })
    }
  })
}