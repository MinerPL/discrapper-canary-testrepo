i.d(n, {
    Z: function () {
        return M;
    }
});
var l = i(735250);
i(470079);
var t = i(442837), a = i(481060), r = i(239091), s = i(749210), o = i(305325), c = i(281956), u = i(889161), d = i(703656), E = i(922482), g = i(984933), h = i(430824), v = i(496675), Z = i(626135), C = i(572004), m = i(482241), N = i(951539), x = i(894017), f = i(274311), _ = i(854698), I = i(118998), p = i(139712), T = i(765305), j = i(981631), L = i(689938);
function M(e) {
    let {
            guild: n,
            channel: M,
            guildScheduledEvent: k,
            isActive: P,
            recurrenceId: G,
            onActionTaken: D
        } = e, {
            scheduled_start_time: S,
            id: y,
            entity_type: A,
            guild_id: R
        } = k, {canManageGuildEvent: U} = (0, u.XJ)(null != M ? M : n), b = U(k), V = (0, N.ZP)(k), O = (0, f.T)(null == M ? void 0 : M.id, k.id), {withinStartWindow: H} = (0, _.ub)(S), w = (0, t.e7)([v.Z], () => (null == M ? !void 0 : !M.isGuildVocal()) || v.Z.can(j.Plq.CONNECT, M), [M]), z = (0, c.J)(R), B = (0, x.Z)(G, y);
    function J(e) {
        e.stopPropagation(), (0, p.Z)(y, G, R);
    }
    async function X(e) {
        e.stopPropagation(), await s.Z.joinGuild(R), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(R) || (!P && J(e), W(e), !1));
    }
    function W(e) {
        e.stopPropagation();
        let n = g.ZP.getDefaultChannel(R);
        (0, a.closeAllModals)(), (0, d.XU)(R, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: b ? function (e) {
            if (e.stopPropagation(), !!b && !P)
                (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
                    ...e,
                    header: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                    confirmText: L.Z.Messages.DELETE,
                    cancelText: L.Z.Messages.CANCEL,
                    onConfirm: () => m.Z.deleteGuildEvent(y, R),
                    children: (0, l.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                    })
                }));
        } : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(), null != n && (0, r.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    i.e('15450'),
                    i.e('37133')
                ]).then(i.bind(i, 215269));
                return i => (0, l.jsx)(e, {
                    guildEventId: y,
                    recurrenceId: G,
                    channel: M,
                    guild: n,
                    ...i
                });
            });
        },
        onJoinClick: w || z ? function (e) {
            if (e.stopPropagation(), z) {
                null == D || D(), (0, o.hk)(R);
                return;
            }
            (null == M ? void 0 : M.isGuildStageVoice()) ? ((0, E.Cq)(M), null == D || D()) : (null == M ? void 0 : M.isGuildVoice()) && (m.Z.joinVoiceEvent(M.guild_id, M.id), null == D || D());
        } : void 0,
        onRsvpClick: J,
        onStartClick: b && H && !(null == B ? void 0 : B.is_canceled) ? function (e) {
            e.stopPropagation(), (0, a.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    i.e('84722'),
                    i.e('72850')
                ]).then(i.bind(i, 296864));
                return n => (0, l.jsx)(e, {
                    ...n,
                    event: k,
                    onSuccess: D
                });
            });
        } : void 0,
        onInviteClick: function (e) {
            if (e.stopPropagation(), null != n) {
                if (!V || !O) {
                    let e = (0, I.H)({
                        guildId: R,
                        guildEventId: y
                    });
                    (0, C.JG)(e), Z.default.track(j.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                        guild_id: R,
                        guild_scheduled_event_id: y
                    });
                    return;
                }
                (0, a.openModalLazy)(async () => {
                    let {default: e} = await Promise.all([
                        i.e('7654'),
                        i.e('1187'),
                        i.e('18222')
                    ]).then(i.bind(i, 560114));
                    return i => (0, l.jsx)(e, {
                        ...i,
                        guild: n,
                        channel: M,
                        guildScheduledEvent: k,
                        source: j.t4x.GUILD_EVENTS
                    });
                });
            }
        },
        onEndClick: b && A === T.WX.EXTERNAL && P ? function (e) {
            if (e.stopPropagation(), !b)
                return;
            let n = () => {
                m.Z.endEvent(y, R), (0, a.closeAllModals)();
            };
            (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
                ...e,
                header: L.Z.Messages.END_EVENT,
                confirmText: L.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: L.Z.Messages.CANCEL,
                onConfirm: n,
                children: (0, l.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: L.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                })
            }));
        } : void 0,
        onJoinGuildClick: X,
        onGoToGuildClick: W
    };
}
