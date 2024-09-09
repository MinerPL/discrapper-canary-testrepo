n.d(t, {
    L9: function () {
        return h;
    },
    vM: function () {
        return f;
    }
});
var r = n(544891),
    i = n(381499),
    a = n(570140),
    s = n(496929),
    o = n(706454),
    l = n(675478),
    u = n(164207),
    c = n(518638),
    d = n(1844),
    _ = n(474936),
    E = n(981631);
async function f() {
    if (!d.Z.isFetchingActiveOutboundPromotions)
        try {
            a.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH' });
            let t = u.t.getCurrentConfig({ location: '5731cc_1' }, { autoTrackExposure: !1 }).previewEnabled ? E.ANM.OUTBOUND_PROMOTIONS_PREVIEW : E.ANM.OUTBOUND_PROMOTIONS,
                n = (
                    await r.tn.get({
                        url: t,
                        query: { locale: o.default.locale },
                        oldFormErrors: !0
                    })
                ).body,
                i = d.Z.consumedInboundPromotionId;
            if (!d.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, s.yD)(_.RQ, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
                i = null !== (e = null == t ? void 0 : t.promotion_id) && void 0 !== e ? e : null;
            }
            a.Z.dispatch({
                type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS',
                activeOutboundPromotions: n.map((e) => (0, c.X_)(e)),
                consumedInboundPromotionId: i
            });
        } catch (e) {
            a.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL' });
        }
}
async function h() {
    if (!d.Z.isFetchingActiveBogoPromotion)
        try {
            a.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH' });
            let e = (
                await r.tn.get({
                    url: E.ANM.BOGO_PROMOTIONS,
                    query: { locale: o.default.locale }
                })
            ).body;
            a.Z.dispatch({
                type: 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS',
                activePromotion: (0, c.kr)(e)
            });
        } catch (e) {
            a.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL' });
        }
}
t.ZP = {
    fetchActiveOutboundPromotions: f,
    dismissOutboundPromotionNotice: function () {
        a.Z.dispatch({ type: 'OUTBOUND_PROMOTION_NOTICE_DISMISS' });
        let e = d.Z.lastDismissedOutboundPromotionStartDate;
        null != e &&
            l.hW.updateAsync(
                'userContent',
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = i.Gm.create({ value: e });
                },
                l.fy.INFREQUENT_USER_ACTION
            );
    },
    markOutboundPromotionsSeen() {
        a.Z.dispatch({ type: 'OUTBOUND_PROMOTIONS_SEEN' });
    },
    fetchActiveBogoPromotion: h
};
