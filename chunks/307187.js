n.d(t, {
    x: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(368859), a = n(245315), o = n(467679), s = n(250050);
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
    return ((null == n ? void 0 : n.isSystemDM()) ? t = o.Z.Types.SYSTEM_DM : null != n && (0, i.Z)(n) ? t = (0, a.cp)(n) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER : (null == u ? void 0 : u.bot) ? t = o.Z.Types.BOT : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !d && (t = o.Z.Types.ORIGINAL_POSTER), null == t) ? null : (0, r.jsx)(o.Z, {
        className: c ? s.botTagCompact : s.botTagCozy,
        type: t,
        verified: null == u ? void 0 : u.isVerifiedBot(),
        hideIcon: _,
        useRemSizes: !0,
        children: E
    });
}
