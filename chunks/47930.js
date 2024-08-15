n.d(t, {
  x: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(385499),
  a = n(245315),
  s = n(368859),
  o = n(438379);

function l(e) {
  let t, {
message: n,
channel: l,
user: u,
compact: c,
isRepliedMessage: d,
hideIcon: _ = !1,
children: E
  } = e;
  return ((null == n ? void 0 : n.isSystemDM()) ? t = i.Z.Types.SYSTEM_DM : null != n && (0, s.Z)(n) ? t = (0, a.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? t = i.Z.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !d && (t = i.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, r.jsx)(i.Z, {
className: c ? o.botTagCompact : o.botTagCozy,
type: t,
verified: null == u ? void 0 : u.isVerifiedBot(),
hideIcon: _,
useRemSizes: !0,
children: E
  });
}