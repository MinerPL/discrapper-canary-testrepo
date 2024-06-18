"use strict";
n.d(t, {
  x: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(368859),
  s = n(245315),
  o = n(467679),
  a = n(822545);

function l(e) {
  let t, {
    message: n,
    channel: l,
    user: u,
    compact: _,
    isRepliedMessage: d,
    hideIcon: c = !1,
    children: E
  } = e;
  return ((null == n ? void 0 : n.isSystemDM()) ? t = o.Z.Types.SYSTEM_DM : null != n && (0, r.Z)(n) ? t = (0, s.cp)(n) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? t = o.Z.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !d && (t = o.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, i.jsx)(o.Z, {
    className: _ ? a.botTagCompact : a.botTagCozy,
    type: t,
    verified: null == u ? void 0 : u.isVerifiedBot(),
    hideIcon: c,
    useRemSizes: !0,
    children: E
  })
}