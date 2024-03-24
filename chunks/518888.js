"use strict";
n.r(t), n.d(t, {
  overrideSurvey: function() {
    return d
  },
  surveyHide: function() {
    return c
  },
  surveyFetch: function() {
    return E
  },
  surveySeen: function() {
    return f
  }
});
var s = n("759843"),
  l = n("627929"),
  a = n("913144"),
  i = n("381684"),
  r = n("599110"),
  o = n("840707"),
  u = n("49111");

function d(e) {
  a.default.dispatch({
    type: "SURVEY_OVERRIDE",
    id: e
  })
}

function c(e, t) {
  a.default.dispatch({
    type: "SURVEY_HIDE",
    key: e
  }), t ? r.default.track(u.AnalyticEvents.APP_NOTICE_CLOSED, {
    notice_type: u.NoticeTypes.SURVEY,
    survey_id: e,
    dismissed: t
  }) : r.default.track(u.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: u.NoticeTypes.SURVEY
  })
}

function E(e, t) {
  var n = {};
  return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), o.default.get({
    url: u.Endpoints.USER_SURVEY,
    query: n,
    trackedActionData: {
      event: s.NetworkActionNames.USER_SURVEY_FETCH,
      properties: e => {
        var t;
        let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
        return (0, l.exact)({
          key: null == n ? void 0 : n.key
        })
      }
    }
  }).then(e => {
    var t;
    a.default.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
    })
  }, () => {
    a.default.dispatch({
      type: "SURVEY_FETCHED",
      survey: null
    })
  })
}

function f(e) {
  let t = i.default.getLastSeenTimestamp();
  if (null === t || null != t && Date.now() - t >= i.SURVEY_REFETCH_INTERVAL) return a.default.dispatch({
    type: "SURVEY_SEEN",
    key: e
  }), o.default.post({
    url: u.Endpoints.USER_SURVEY_SEEN(e),
    trackedActionData: {
      event: s.NetworkActionNames.USER_SURVEY_SEEN,
      properties: t => (0, l.exact)({
        key: e
      })
    }
  })
}