n.d(t, {
    Ff: function () {
        return E;
    },
    GS: function () {
        return m;
    },
    KH: function () {
        return f;
    },
    Nm: function () {
        return I;
    },
    RI: function () {
        return p;
    },
    Up: function () {
        return h;
    },
    XV: function () {
        return _;
    }
});
var r = n(544891), i = n(570140), a = n(675478), o = n(131951), s = n(594174), l = n(932724), u = n(647177), c = n(901757), d = n(981631);
async function _() {
    let e = await r.tn.get(d.ANM.VIDEO_FILTER_ASSETS);
    return i.Z.dispatch({
        type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
        assets: e.body
    }), e;
}
async function E(e, t, n) {
    try {
        let a = await r.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: t,
                asset: e,
                last_used: null == n ? void 0 : n.toISOString()
            }
        });
        return i.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
            videoFilterAsset: a.body
        }), a.body;
    } catch (e) {
        throw new c.Z(e);
    }
}
async function f(e) {
    await r.tn.del(d.ANM.VIDEO_FILTER_ASSET(e.id));
    let t = (0, l.P)(s.default.getCurrentUser());
    (0, u.rD)(t) && t.id === e.id && h(null), i.Z.dispatch({
        type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
        videoFilterAsset: e
    });
}
async function h(e) {
    if (await a.hW.updateAsync('voiceAndVideo', t => {
            t.videoBackgroundFilterDesktop = (0, u.i7)(e);
        }, a.fy.FREQUENT_USER_ACTION), (0, u.rD)(e)) {
        let t = await r.tn.post(d.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id));
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: t.body
        });
    } else
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function p(e) {
    if (!!o.Z.isSupported())
        i.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function m() {
    if (!!o.Z.isSupported())
        i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function I() {
    i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
