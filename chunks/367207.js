n(411104), n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    r = n(848246),
    a = n(481060),
    o = n(570140),
    s = n(904245),
    c = n(317770),
    u = n(100527),
    d = n(358221),
    h = n(963249),
    p = n(93127),
    f = n(361291),
    m = n(592125),
    g = n(430824),
    C = n(594174),
    _ = n(431),
    x = n(626135),
    v = n(74538),
    I = n(557457),
    b = n(970645),
    S = n(30684),
    Z = n(514701),
    N = n(6242),
    E = n(467721),
    y = n(757692),
    j = n(114064),
    T = n(933843),
    P = n(281494),
    A = n(276444),
    M = n(684259),
    w = n(937579),
    L = n(1163),
    R = n(841174),
    D = n(522558),
    O = n(879463),
    k = n(822070),
    U = n(520540),
    G = n(11352),
    B = n(474936),
    V = n(981631),
    H = n(354459),
    F = n(37113),
    W = n(388032);
function z(e, t, n) {
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
class Y extends c.Z {
    _initialize() {
        __OVERLAY__ ? o.Z.subscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.subscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.subscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.subscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.subscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.subscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), o.Z.subscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), o.Z.subscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
    }
    _terminate() {
        __OVERLAY__ ? o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_OPEN', this._handlePremiumPaymentModalOpen) : (o.Z.unsubscribe('PREMIUM_PAYMENT_MODAL_CLOSE', this._handlePremiumPaymentModalClose), o.Z.unsubscribe('MESSAGE_LENGTH_UPSELL', this.handleMessageLengthUpsell), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchPremiumOffer), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchCheckoutRecovery), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeFetchUserAffinities), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackCustomNotificationSoundsExposure), o.Z.unsubscribe('POST_CONNECTION_OPEN', this._trackSkyLoadExposure), o.Z.unsubscribe('RTC_CONNECTION_STATE', this.maybeShowHDStreamingPerksDemoPostUpsellModal), o.Z.unsubscribe('MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED', this.maybeShowHDStreamingViewerUpsellMessage));
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
    _getReferralIncentiveEligibility() {
        let e = C.default.getCurrentUser();
        if (A.Z.getIsFetchingReferralIncentiveEligibility() || !(0, v.I5)(e)) return;
        let t = { location: 'PremiumManager' },
            n = { autoTrackExposure: !1 };
        if (!!U.g.getCurrentConfig(t, n).enabled && !O.eP.getCurrentConfig(t, n).enabled) k.$.getCurrentConfig(t, n).enabled && (0, P.bq)();
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
                o.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_MODAL_OPEN',
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: l
                });
        });
    }
    maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
        let { enabled: t } = L.Z.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
        if (!t || e.state !== V.hes.DISCONNECTED || e.willReconnect) return;
        let n = m.Z.getChannel(e.channelId);
        if (null == n) return;
        let i = j.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
        if (
            (i &&
                o.Z.dispatch({
                    type: 'PREMIUM_PERKS_DEMO_COMPLETE',
                    perkType: r.q.STREAM_HIGH_QUALITY
                }),
            !i)
        )
            return;
        let { resolution: l, fps: a } = f.Z.getState();
        !(0, T.mc)(l, a) && (0, R.Z)(n.guild_id);
    }
    constructor(...e) {
        super(...e),
            z(this, '_premiumPaymentModalCloseResolve', null),
            z(this, '_premiumPaymentModalCloseReject', null),
            z(this, '_maybeFetchPremiumOffer', async () => {
                let e = C.default.getCurrentUser();
                if (null != e && e.verified) {
                    let t = !(0, v.I5)(e) && _.Z.shouldFetchOffer();
                    await (0, w.T)('PremiumManager', t);
                }
                o.Z.dispatch({ type: 'PREMIUM_MARKETING_DATA_READY' });
            }),
            z(this, '_maybeFetchCheckoutRecovery', async () => {
                let e = C.default.getCurrentUser();
                null != e && e.verified && !(0, v.I5)(e) && S.Z.shouldFetchCheckoutRecovery() && (await (0, b.o)());
            }),
            z(this, '_maybeFetchUserAffinities', () => {
                let { enabled: e } = D.w.getCurrentConfig({ location: 'PremiumManager' }, { autoTrackExposure: !1 });
                e && (0, p.W)();
            }),
            z(this, '_trackCustomNotificationSoundsExposure', () => {
                G.Y.trackExposure({ location: 'PremiumManager' });
            }),
            z(this, '_trackSkyLoadExposure', () => {
                M.Z.trackExposure({ location: 'PremiumManager' });
            }),
            z(this, '_handlePremiumPaymentModalOpen', (e) => {
                (0, h.Z)({
                    ...e,
                    analyticsLocations: [u.Z.OVERLAY],
                    onClose: (e) => {
                        o.Z.dispatch({
                            type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                            didSucceed: e
                        });
                    }
                });
            }),
            z(this, '_handlePremiumPaymentModalClose', (e) => {
                let { didSucceed: t } = e;
                t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), (this._premiumPaymentModalCloseResolve = null), (this._premiumPaymentModalCloseReject = null);
            }),
            z(this, 'maybeShowHDStreamingViewerUpsellMessage', (e) => {
                let t = C.default.getCurrentUser();
                (null == t ? void 0 : t.id) !== e.senderUserId && this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            z(
                this,
                '_maybeSendViewerUpsellMessage',
                (0, l.debounce)((e, t, n) => {
                    var i, l;
                    let r = d.Z.getSelectedParticipant(e),
                        a = (0, y.o)(r, n),
                        { sendNitroMessage: o } = (0, N.TD)(a),
                        c = null !== (l = null === (i = g.Z.getGuild(t)) || void 0 === i ? void 0 : i.premiumTier) && void 0 !== l ? l : V.Eu4.NONE;
                    if (E.Z.cooldownIsActive() || !o || c >= V.Eu4.TIER_2 || (null == r ? void 0 : r.type) !== H.fO.STREAM || (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) || null == r.maxResolution || null == r.maxFrameRate) return;
                    Z.I();
                    let u = W.intl.formatToPlainString(W.t.AbyeZG, {
                        nickname: r.userNick,
                        resolution: (0, F.o6)(r.maxResolution.height),
                        fps: (0, I.bp)(r.maxFrameRate)
                    });
                    s.Z.sendNitroSystemMessage(e, u),
                        x.default.track(V.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                            type: B.cd.HD_STREAMING_VIEWER_UPSELL,
                            location_section: null != t ? V.jXE.TEXT_IN_VOICE : V.jXE.CHANNEL_TEXT_AREA,
                            location_object: V.qAy.MESSAGE,
                            guild_id: t
                        });
                }, 200)
            );
    }
}
t.Z = new Y();
