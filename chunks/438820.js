var n, a = i(442837), o = i(570140);
function r(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}
let s = {
    canPlayWowMoment: !1,
    isFetchingWowMomentMedia: !1,
    wowMomentWumpusMediaUrl: null
};
class c extends (n = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (s = e), s.canPlayWowMoment = !1, s.isFetchingWowMomentMedia = !1, s.wowMomentWumpusMediaUrl = null;
    }
    getState() {
        return s;
    }
    get canPlayWowMoment() {
        return s.canPlayWowMoment;
    }
    get isFetchingWowMomentMedia() {
        return s.isFetchingWowMomentMedia;
    }
    get wowMomentWumpusMedia() {
        return s.wowMomentWumpusMediaUrl;
    }
}
r(c, 'displayName', 'PurchasedItemsFestivityStore'), r(c, 'persistKey', 'PurchasedItemsFestivityStore'), r(c, 'migrations', [e => ({ ...e })]), t.Z = new c(o.Z, {
    LOGOUT: function () {
        s = {
            canPlayWowMoment: !1,
            isFetchingWowMomentMedia: !1,
            wowMomentWumpusMediaUrl: null
        };
    },
    PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
        let {value: t} = e;
        s.canPlayWowMoment = t;
    },
    PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function (e) {
        let {value: t} = e;
        s.isFetchingWowMomentMedia = t;
    },
    PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
        let {wumpusMedia: t} = e;
        s.wowMomentWumpusMediaUrl = t, s.isFetchingWowMomentMedia = !1;
    }
});
