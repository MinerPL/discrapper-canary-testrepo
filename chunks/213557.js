t.d(n, {
    Z: function () {
        return L;
    }
}), t(653041);
var l = t(735250), a = t(470079), i = t(442837), r = t(481060), s = t(239091), o = t(561472), c = t(36311), d = t(367907), u = t(188471), h = t(541716), m = t(526120), _ = t(563534), f = t(736052), C = t(442336), p = t(910611), x = t(41776), g = t(703656), N = t(6025), I = t(592125), b = t(703558), E = t(731290), Z = t(430824), v = t(375954), j = t(594174), T = t(502568), S = t(933557), R = t(287746), A = t(981631), O = t(689938), B = t(415412);
function L(e) {
    let {
            channelId: n,
            baseChannelId: L,
            channelViewSource: M = 'Split View',
            isResourceChannelView: w
        } = e, P = (0, i.e7)([I.Z], () => I.Z.getChannel(n)), y = (0, i.e7)([Z.Z], () => Z.Z.getGuild(null == P ? void 0 : P.getGuildId())), k = (0, i.e7)([j.default], () => j.default.getCurrentUser()), H = (0, i.e7)([E.Z], () => E.Z.didAgree(null == P ? void 0 : P.guild_id)), D = (null == k ? void 0 : k.nsfwAllowed) === !0, U = (0, S.ZP)(P), W = (0, i.e7)([x.Z], () => (null == y ? void 0 : y.id) != null && x.Z.isLurking(y.id), [y]), G = (0, f.Z)(n), F = (0, i.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getResourceForChannel(null == y ? void 0 : y.id, n)) || void 0 === e ? void 0 : e.title;
        }), z = a.useRef(!1);
    if (a.useEffect(() => {
            null != P && !z.current && (z.current = !0, (0, d.yw)(A.rMx.CHANNEL_OPENED, {
                ...(0, d.$H)(P.id),
                channel_view: M
            }), (0, u.a)(A.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: P.id }));
        }, [
            P,
            M
        ]), null == P || null == y)
        return null;
    let V = [];
    return (!W && V.push((0, l.jsx)(C.Z, { channel: P }, 'notifications')), V.push((0, l.jsx)(T.ZP.Icon, {
        icon: r.CloseSmallIcon,
        tooltip: O.Z.Messages.CLOSE,
        onClick: () => N.Z.closeChannelSidebar(L)
    }, 'close')), !P.isNSFW() || D && H) ? (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.Z, {
                channel: P,
                draftType: b.d.ChannelMessage
            }),
            (0, l.jsx)(T.ZP, {
                toolbar: V,
                'aria-label': O.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                children: (0, p.ud)({
                    channel: P,
                    channelName: G ? F : U,
                    guild: y,
                    inSidebar: !0,
                    handleContextMenu: e => {
                        (0, s.jW)(e, async () => {
                            let {default: e} = await t.e('24783').then(t.bind(t, 439635));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: P,
                                guild: y
                            });
                        });
                    },
                    handleClick: () => {
                        let e = v.Z.getMessages(P.id);
                        if (w) {
                            (0, g.uL)(A.Z5c.CHANNEL(P.guild_id, P.id)), (0, m.C3)(P.guild_id, null);
                            return;
                        }
                        (0, g.XU)(P.guild_id, P.id, e.jumpTargetId);
                    }
                })
            }),
            (0, l.jsx)('div', {
                className: B.chat,
                children: (0, l.jsx)(R.Z, {
                    channel: P,
                    guild: y,
                    chatInputType: h.I.SIDEBAR
                }, n)
            })
        ]
    }) : (0, l.jsx)(c.Z, { guild: y });
}
