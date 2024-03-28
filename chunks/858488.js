"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
}), a("47120");
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  d = a("699516"),
  s = a("689938");

function i(e) {
  let t = e.id,
    [i, o] = (0, n.useStateFromStoresArray)([d.default], () => {
      var e;
      return [d.default.isFriend(t), null !== (e = d.default.getNickname(t)) && void 0 !== e ? e : null]
    }, [t]);
  if (!i) return null;
  let r = null == o ? s.default.Messages.ADD_FRIEND_NICKNAME : s.default.Messages.CHANGE_FRIEND_NICKNAME;
  return (0, l.jsx)(u.MenuItem, {
    id: null == o ? "add-friend-nickname" : "edit-friend-nickname",
    label: r,
    action: () => {
      (0, u.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("25070")]).then(a.bind(a, "599633"));
        return a => (0, l.jsx)(t, {
          user: e,
          nickname: o,
          ...a
        })
      })
    }
  })
}