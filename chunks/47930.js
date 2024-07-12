n.d(t, {
  x: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(245315),
  a = n(467679),
  o = n(368859),
  s = n(475525);

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
  return ((null == n ? void 0 : n.isSystemDM()) ? t = a.Z.Types.SYSTEM_DM : null != n && (0, o.Z)(n) ? t = (0, i.cp)(n) ? a.Z.Types.OFFICIAL : a.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? t = a.Z.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !d && (t = a.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, r.jsx)(a.Z, {
className: c ? s.botTagCompact : s.botTagCozy,
type: t,
verified: null == u ? void 0 : u.isVerifiedBot(),
hideIcon: _,
useRemSizes: !0,
children: E
  });
}