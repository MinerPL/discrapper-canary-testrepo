n.d(t, {
    Z: function () {
        return g;
    }
}), n(653041);
var i = n(735250), a = n(470079), l = n(392711), s = n(442837), r = n(481060), o = n(481051), c = n(871499), u = n(306680), d = n(111583), h = n(459273), p = n(566620), m = n(317381), _ = n(918559), f = n(981631), E = n(689938), C = n(856230);
function g(e) {
    let {
            channelId: t,
            className: n,
            ...g
        } = e, I = a.useRef(null), x = (0, s.e7)([m.ZP], () => m.ZP.getFocusedLayout() === _.MI.RESIZABLE), T = a.useCallback(() => {
            let e = x ? _.MI.NO_CHAT : _.MI.RESIZABLE;
            (0, p.gC)(e);
        }, [x]), {
            unreadCount: N,
            mentionCount: v
        } = function (e) {
            let t = (0, s.e7)([d.Z], () => !(0, l.isEmpty)(d.Z.getTypingUsers(e)), [e]), {
                    unreadCount: n,
                    mentionCount: i
                } = (0, s.cj)([u.ZP], () => ({
                    unreadCount: u.ZP.getUnreadCount(e),
                    mentionCount: u.ZP.getMentionCount(e)
                }), [e]);
            return {
                unreadCount: n,
                mentionCount: i,
                isTyping: t
            };
        }(t), S = a.useCallback(() => {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }, []);
    (0, h.yp)({
        event: f.CkL.FOCUS_CHAT_BUTTON,
        handler: S
    });
    let Z = x ? E.Z.Messages.HIDE_CHAT : E.Z.Messages.SHOW_CHAT, A = [Z];
    v > 0 && A.push(E.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: v })), N > 0 && A.push(E.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
    let M = (0, s.e7)([m.ZP], () => m.ZP.getFocusedLayout()), b = v > 0 ? v : N, R = b > 0;
    return (0, i.jsxs)('div', {
        className: C.wrapper,
        children: [
            (0, i.jsx)(c.d, {
                buttonRef: I,
                onClick: T,
                label: Z,
                'aria-label': A.join(', '),
                tooltipPosition: 'top',
                iconComponent: M === _.MI.NO_CHAT ? r.ChevronLargeUpIcon : r.ChevronLargeDownIcon,
                themeable: !0,
                className: n,
                ...g
            }),
            R ? (0, i.jsx)(o.Z, {
                hasMentions: v > 0,
                truncatedCount: b > 99 ? '99+' : b,
                className: C.badge
            }) : null
        ]
    });
}
