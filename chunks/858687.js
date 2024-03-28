"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var a = t("735250"),
  l = t("470079"),
  u = t("481060"),
  s = t("493683"),
  r = t("960670"),
  i = t("933557"),
  d = t("689938");

function o(e, n) {
  let t = (0, i.default)(e),
    o = l.useCallback(() => {
      let l = d.default.Messages.LEAVE_GROUP_DM_TITLE.format({
          name: t
        }),
        i = d.default.Messages.LEAVE_GROUP_DM_BODY.format({
          name: t
        });
      e.isManaged() && (l = d.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
        name: t
      }), i = d.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
        name: t
      }));
      let o = function(t) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        s.default.closePrivateChannel(e.id, n, a)
      };
      (0, u.openModal)(e => (0, a.jsx)(r.default, {
        header: l,
        body: i,
        onSubmit: o,
        ...e
      }))
    }, [e, t, n]);
  return (0, a.jsx)(u.MenuItem, {
    id: "leave-channel",
    label: d.default.Messages.LEAVE_GROUP_DM,
    action: o,
    color: "danger"
  })
}