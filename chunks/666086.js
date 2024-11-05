n(47120);
var r = n(392711),
    i = n(106351),
    a = n(904245),
    s = n(147913),
    o = n(367907),
    l = n(447003),
    u = n(592125),
    c = n(650774),
    d = n(271383),
    f = n(430824),
    _ = n(375954),
    h = n(944486),
    p = n(626135),
    m = n(522558),
    g = n(581025),
    E = n(795448),
    v = n(441623),
    I = n(474936),
    S = n(981631);
class T extends s.Z {
    isChannelEligible(e, t) {
        switch (e.type) {
            case i.d.DM:
            case i.d.GROUP_DM:
                return !0;
            case i.d.GUILD_TEXT:
                let n = f.Z.getGuild(t),
                    r = c.Z.getMemberCount(t);
                return null != r && r <= 50 && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, l.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n, i) {
        (0, r.debounce)(() => {
            let r = h.Z.getChannelId();
            !v.Z.isGiftIntentMessageInCooldown(n) &&
                e === r &&
                _.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    giftIntentSecondaryAction: i
                }),
                (0, E.PV)(n));
        }, 1000)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = g.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = u.Z.getChannel(t);
        if ((n || r) && null != i && this.isChannelEligible(i, e)) {
            let t = new Set(null != e ? d.ZP.getMemberIds(e) : i.recipients),
                a = v.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (r && a.length > 0) {
                let e = a[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(i.id, I.hX.FRIEND_ANNIVERSARY, e, a.length > 1 ? I.X2.VIEW_ALL : I.X2.SEND_MESSAGE);
            }
            n &&
                p.default.track(S.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: a.length,
                    ...(0, o.v_)(i)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = h.Z.getChannelId();
        if (null != e) {
            let t = u.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new T();
