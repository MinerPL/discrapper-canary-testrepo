n(47120);
var r = n(392711),
    i = n(106351),
    a = n(904245),
    s = n(147913),
    o = n(367907),
    l = n(447003),
    u = n(592125),
    c = n(271383),
    d = n(430824),
    _ = n(375954),
    E = n(944486),
    f = n(626135),
    h = n(522558),
    p = n(581025),
    I = n(795448),
    m = n(441623),
    T = n(474936),
    S = n(981631);
class g extends s.Z {
    isChannelEligible(e, t, n) {
        switch (e.type) {
            case i.d.DM:
            case i.d.GROUP_DM:
                return !0;
            case i.d.GUILD_TEXT:
                return t.length <= 50 && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, l.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n, i) {
        (0, r.debounce)(() => {
            let r = E.Z.getChannelId();
            !m.Z.isGiftIntentMessageInCooldown(n) &&
                e === r &&
                _.Z.isReady(e) &&
                (a.Z.sendGiftingPromptSystemMessage(e, {
                    giftIntentType: t,
                    recipientUserId: n,
                    showSecondaryCta: i
                }),
                (0, I.PV)(n));
        }, 1000)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = c.ZP.getMemberIds(e),
            a = d.Z.getGuild(e),
            s = u.Z.getChannel(t);
        if ((n || r) && null != s && this.isChannelEligible(s, i, a)) {
            let t = new Set(null != e ? i : s.recipients),
                a = m.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (r && a.length > 0) {
                let e = a[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(s.id, T.hX.FRIEND_ANNIVERSARY, e, a.length > 1);
            }
            n &&
                f.default.track(S.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: a.length,
                    ...(0, o.v_)(s)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = E.Z.getChannelId();
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
t.Z = new g();
