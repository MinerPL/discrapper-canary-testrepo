n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(998698), r = n(933557), o = n(703558), c = n(731290), u = n(607744), d = n(819640), h = n(496675), p = n(699516), m = n(594174), _ = n(585483), f = n(127654), E = n(205822), C = n(731994), g = n(981631), I = n(689938);
t.Z = function (e) {
    let {
            className: t,
            style: n,
            channel: x,
            draftType: T
        } = e, [N, v] = a.useState(!0), S = (0, l.e7)([d.Z], () => d.Z.hasLayers()), Z = (0, l.e7)([h.Z], () => null != x && h.Z.can(g.Plq.ATTACH_FILES, x), [x]), A = null != (0, l.e7)([s.Z], () => s.Z.getActiveCommand(x.id)), M = x.getGuildId(), b = T === o.d.FirstThreadMessage, R = (0, l.e7)([m.default], () => {
            var e;
            return !0 == !(null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
        }), j = (0, l.e7)([c.Z], () => c.Z.didAgree(M)) && !R, L = a.useMemo(() => !S && (x.isPrivate() && !x.isManaged() || null != M && (!x.isNSFW() || j) && Z && u.Z.canChatInGuild(M)), [
            Z,
            j,
            x,
            M,
            S
        ]), P = b ? g.TPd.GUILD_THREADS_ONLY.has(x.type) ? I.Z.Messages.UPLOAD_TO_NEW_POST : I.Z.Messages.UPLOAD_TO_NEW_THREAD : N ? I.Z.Messages.UPLOAD_TO.format({ destination: (0, r.F6)(x, m.default, p.Z, !0) }) : I.Z.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
    return A || !L ? null : (0, i.jsx)(E.Z, {
        className: t,
        style: n,
        title: P,
        description: b ? I.Z.Messages.UPLOAD_AREA_NEW_THREAD_HELP : I.Z.Messages.UPLOAD_AREA_HELP,
        icons: C.J6,
        onDrop: e => {
            if (A)
                return !1;
            L && null != x && ((0, f.d)(e, x, T, {
                requireConfirm: N,
                showLargeMessageDialog: !1
            }), _.S.dispatchToLastSubscribed(g.CkL.TEXTAREA_FOCUS));
        },
        onDragClear: () => v(!0),
        onDragOver: e => {
            if (A)
                return !1;
            !b && e.shiftKey === N && v(!e.shiftKey);
        }
    });
};
