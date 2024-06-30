n.d(t, {
    Xq: function () {
        return d;
    },
    g8: function () {
        return E;
    },
    hZ: function () {
        return u;
    },
    wk: function () {
        return _;
    }
});
var i = n(990547), a = n(283693), s = n(570140), l = n(558724), r = n(626135), o = n(573261), c = n(981631);
function d(e) {
    s.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function u(e, t) {
    s.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }), t ? r.default.track(c.rMx.APP_NOTICE_CLOSED, {
        notice_type: c.kVF.SURVEY,
        survey_id: e,
        dismissed: t
    }) : r.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY });
}
function _(e, t) {
    var n = {};
    return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), o.Z.get({
        url: c.ANM.USER_SURVEY,
        query: n,
        trackedActionData: {
            event: i.NetworkActionNames.USER_SURVEY_FETCH,
            properties: e => {
                var t;
                let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                return (0, a.iG)({ key: null == n ? void 0 : n.key });
            }
        }
    }).then(e => {
        var t;
        s.Z.dispatch({
            type: 'SURVEY_FETCHED',
            survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
        });
    }, () => {
        s.Z.dispatch({
            type: 'SURVEY_FETCHED',
            survey: null
        });
    });
}
function E(e) {
    let t = l.Z.getLastSeenTimestamp();
    if (null === t || null != t && Date.now() - t >= l.J)
        return s.Z.dispatch({
            type: 'SURVEY_SEEN',
            key: e
        }), o.Z.post({
            url: c.ANM.USER_SURVEY_SEEN(e),
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_SEEN,
                properties: t => (0, a.iG)({ key: e })
            }
        });
}
