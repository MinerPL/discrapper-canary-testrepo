t.d(n, {
    r: function () {
        return C;
    }
});
var i = t(106351), l = t(475179), o = t(816782), E = t(358221), r = t(318661), u = t(57048), a = t(433355), s = t(592125), d = t(944486), _ = t(914010), c = t(981631);
let C = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = _.Z.getGuildId(), n = d.Z.getChannelId(e), t = s.Z.getChannel(n);
        if (null != n && null != t && t.type === i.d.GUILD_VOICE)
            return l.Z.updateChatOpen(n, !E.Z.getChatOpen(n)), !1;
        if (null != n && null != t && t.type === i.d.DM) {
            let e = a.ZP.getSection(n, null == t ? void 0 : t.isDM()), i = (0, r.Of)(t.getRecipientId()), l = e === c.ULH.PROFILE;
            return (0, u.a)(i, !l), o.Z.toggleProfilePanelSection(), !1;
        }
        return o.Z.toggleMembersSection(), !1;
    }
};
