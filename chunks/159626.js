"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(987170);

function r(e) {
  let t = (0, i.Z)({
    ...e,
    id: "".concat(e.id, "_existing_users"),
    label: "".concat(e.label, " - Existing Users")
  });
  return {
    existingUsers: t,
    newUsers: (0, i.Z)({
      ...e,
      id: "".concat(e.id, "_new_users"),
      label: "".concat(e.label, " - New Users")
    })
  }
}