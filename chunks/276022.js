t.d(n, {
    Z: function () {
        return T;
    }
}), t(653041);
var i = t(735250), r = t(470079), u = t(442837), l = t(481060), a = t(139387), o = t(230711), d = t(213459), s = t(434404), c = t(430824), E = t(496675), _ = t(981631), I = t(689938);
function T(e) {
    let {
            user: n,
            guildId: t,
            channel: T,
            context: N
        } = e, S = c.Z.getGuild(t), A = (0, u.e7)([E.Z], () => null != S ? E.Z.can(_.Plq.MANAGE_GUILD, S) : null), f = (0, d.em)(T, !0, !0), p = (0, d.PL)(!0, !0), {
            isUserApp: O,
            isGuildApp: M
        } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let u = Object.values(null !== (i = null === (e = f.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}), l = Object.values(null !== (r = null === (t = p.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: u.some(e => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                }),
                isUserApp: l.some(e => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                })
            };
        }, [
            f,
            p,
            null == n ? void 0 : n.id
        ]), Z = r.useCallback(() => {
            if ((null == S ? void 0 : S.id) != null)
                s.Z.open(S.id, _.pNK.INTEGRATIONS), a.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
        }, [
            null == n ? void 0 : n.id,
            null == S ? void 0 : S.id
        ]), h = r.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
        }, []), R = N === _.IlC.POPOUT;
    if (!(null == n ? void 0 : n.bot) || !A || R || !M && !O)
        return null;
    let C = [];
    return M && C.push((0, i.jsx)(l.MenuItem, {
        id: 'manage-integration',
        label: I.Z.Messages.MANAGE_INTEGRATION,
        action: Z
    }, 'manage-integration')), O && C.push((0, i.jsx)(l.MenuItem, {
        id: 'manage-authorized-app',
        label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
        action: h
    }, 'manage-authorized-app')), C;
}
