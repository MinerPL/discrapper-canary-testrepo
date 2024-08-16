n(411104), n(47120);
var i = n(735250);
n(470079);
var l = n(392711),
    r = n(848246),
    a = n(481060),
    s = n(570140),
    o = n(904245),
    c = n(317770),
    u = n(100527),
    d = n(358221),
    h = n(963249),
    p = n(361291),
    _ = n(592125),
    f = n(430824),
    g = n(594174),
    m = n(295226),
    C = n(626135),
    I = n(74538),
    E = n(557457),
    N = n(269486),
    x = n(514851),
    S = n(970645),
    v = n(30684),
    Z = n(371260),
    T = n(6242),
    L = n(467721),
    A = n(757692),
    b = n(114064),
    M = n(933843),
    R = n(684259),
    O = n(937579),
    P = n(1163),
    y = n(841174),
    j = n(11352),
    D = n(474936),
    w = n(981631),
    U = n(354459),
    G = n(37113),
    k = n(689938);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class H extends c.Z {
    _initialize() {
        __OVERLAY__ ? s.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCampaignContext), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (s.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), s.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCampaignContext), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), s.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), s.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: l } = e;
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e('33184').then(n.bind(n, 465836));
            return (n) =>
                (0, i.jsx)(e, {
                    channel: t,
                    content: l,
                    ...n
                });
        });
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        return new Promise((t, n) => {
            (0, h.Z)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                }
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error('Should not use this function from the overlay, use ModalAPI.openModal instead');
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: l } = null != e ? e : {};
        return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = r),
                s.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = P.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== w.hes.DISCONNECTED || e.willReconnect) return;
        let n = _.Z.getChannel(e.channelId);
        if (null == n) return;
        let i = b.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (i &&
                s.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !i)
        )
            return;
        let { resolution: l, fps: a } = p.Z.getState();
        !(0, M.mc)(l, a) && (0, y.Z)(n.guild_id);
    }
    constructor(...e) {
        super(...e),
            B(this, '_premiumPaymentModalCloseResolve', null),
            B(this, '_premiumPaymentModalCloseReject', null),
            B(this, '_maybeFetchPremiumOffer', async () => {
                let e = g.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, I.I5)(e) && m.Z.shouldFetchOffer();
                    await (0, O.T)('PremiumManager', t);
                }
                s.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            B(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = g.default.getCurrentUser();
                null != e && e.verified && !(0, I.I5)(e) && v.Z.shouldFetchCheckoutRecovery() && (await (0, S.o)());
            }),
            B(this, '_maybeFetchCampaignContext', async () => {
                let e = g.default.getCurrentUser();
                null != e && e.verified && x.Z.shouldFetchCampaignContext() && (await (0, N.W)());
            }),
            B(this, '_trackCustomNotificationSoundsExposure', () => {
                j.Y.trackExposure({ location: 'PremiumManager' });
            }),
            B(this, '_trackSkyLoadExposure', () => {
                R.Z.trackExposure({ location: 'PremiumManager' });
            }),
            B(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [u.Z.OVERLAY],
                    onClose: (e) => {
                        s.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            B(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            B(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = g.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            B(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, l.debounce)((e, t, n) => {
                    var i, l;
                    let r = d.Z.getSelectedParticipant(e),
                        a = (0, A.o)(r, n),
                        { sendNitroMessage: s } = (0, T.TD)(a),
                        c = null !== (l = null === (i = f.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : w.Eu4.NONE;
                    if (L.Z.cooldownIsActive() || !s || c >= w.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== U.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    Z.I();
                    let u = k.Z.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
                        nickname: r.userNick,
                        resolution: (0, G.o6)(r.maxResolution.height),
                        fps: (0, E.bp)(r.maxFrameRate)
                    });
                    o.Z.sendNitroSystemMessage(e, u),
                        C.default.track(w.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: D.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? w.jXE.TEXT_IN_VOICE : w.jXE.CHANNEL_TEXT_AREA,
                            location_object: w.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new H();
