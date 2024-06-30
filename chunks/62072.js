var i = n(470079), a = n(904245), l = n(346610), s = n(868643), r = n(912332), o = n(41776), c = n(280845), u = n(665906), d = n(488131), h = n(695346), p = n(314897), m = n(592125), _ = n(323873), f = n(271383), E = n(607744), C = n(375954), g = n(496675), I = n(572004), x = n(585483), T = n(358085), N = n(709054), v = n(418476), S = n(901461), Z = n(432376), A = n(996861), M = n(981631);
function b(e) {
    return g.Z.can(M.Plq.MANAGE_MESSAGES, e);
}
t.Z = function (e, t, n) {
    let R = i.useRef(n);
    return R.current = n, i.useCallback(n => {
        var i, j, L, P, O;
        if (!R.current || n.target !== n.currentTarget)
            return;
        let y = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey, D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey), k = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey), U = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey), w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey), B = C.Z.getMessage(t, e), H = m.Z.getChannel(t);
        if (null == B || null == H)
            return;
        let G = p.default.getId();
        switch (n.key.toLowerCase()) {
        case 'backspace':
            y && (b(H) || B.canDeleteOwnMessage(G)) && (n.preventDefault(), (0, A.$Z)(H, B, n));
            break;
        case 'c':
            ((0, T.isMac)() ? U : k) && I.wS && (n.preventDefault(), (0, I.JG)(B.content));
            break;
        case 'e':
            if (y) {
                ;
                if (i = G, j = H, L = B, !j.isSystemDM() && (0, v.Z)(L, i))
                    n.preventDefault(), (0, A.Hd)(H, B);
            }
            break;
        case 'p':
            if (y || w) {
                ;
                if (P = H, O = B, !P.isSystemDM() && !(0, S.Z)(O) && (b(P) || P.isPrivate()))
                    n.preventDefault(), (0, A.rY)(H, B, n);
            }
            break;
        case '+':
            (y || w) && function (e) {
                let t = null == e.guild_id || E.Z.canChatInGuild(e.guild_id), n = h.nc.getSetting(), {disableReactionCreates: i} = (0, Z.Z)({
                        channel: e,
                        canChat: t,
                        renderReactions: n,
                        canAddNewReactions: t && g.Z.can(M.Plq.ADD_REACTIONS, e),
                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                        isGuest: null != e.guild_id && f.ZP.isCurrentUserGuest(e.guild_id),
                        isActiveChannelOrUnarchivableThread: (0, u.RG)(e)
                    });
                return !i && n;
            }(H) && (n.preventDefault(), x.S.dispatchKeyed(M.LPv.TOGGLE_REACTION_POPOUT, B.id, { emojiPicker: !0 }));
            break;
        case 'r':
            (y || w) && (0, c.o)(H, B) && (n.preventDefault(), (0, A.HH)(H, B, n));
            break;
        case 'f':
            (y || w) && l.w.getCurrentConfig({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages && (0, s.h)(B) && (n.preventDefault(), (0, r.l8)({
                messageId: B.id,
                channelId: H.id,
                source: 'keyboard-shortcut'
            }));
            break;
        case 't':
            if (y && (0, u.ki)(H, B))
                n.preventDefault(), (0, d.R6)(H, B, 'Message Shortcut');
            else if (B.hasFlag(M.iLy.HAS_THREAD)) {
                let e = m.Z.getChannel(N.default.castMessageIdAsChannelId(B.id));
                null != e && (y || w) && (n.preventDefault(), (0, d.ok)(e, w));
            }
            break;
        case 'enter':
            D && (n.preventDefault(), (0, A.B8)(H, B));
            break;
        case 'escape':
            _.Z.isEditing(H.id, B.id) ? a.Z.endEditMessage(H.id) : x.S.dispatch(M.CkL.TEXTAREA_FOCUS);
        }
    }, [
        e,
        t
    ]);
};
