"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("759843"),
  n = a("872717"),
  i = a("913144"),
  l = a("448993"),
  r = a("599110"),
  o = a("840707"),
  d = a("210898"),
  u = a("856368"),
  c = a("697543"),
  E = a("49111"),
  m = a("782340");
a("2581");
var f = {
  resetSuggestions: () => i.default.dispatch({
    type: "POMELO_SUGGESTIONS_RESET"
  }),
  async fetchSuggestionsRegistration(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
    if ((0, c.hasRegistrationUsernameSuggestions)()) {
      i.default.dispatch({
        type: "POMELO_SUGGESTIONS_RESET"
      });
      try {
        var a;
        let s = await n.HTTP.get({
          url: E.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
          query: null == e ? void 0 : {
            global_name: e
          },
          timeout: t
        });
        if (s.ok && (null === (a = s.body) || void 0 === a ? void 0 : a.username) != null) return i.default.dispatch({
          type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
          suggestion: s.body,
          source: e
        })
      } catch (e) {
        return
      }
    }
  },
  async fetchSuggestions(e) {
    if ((0, u.isInPomeloSuggestionsExperiment)()) try {
      var t;
      i.default.dispatch({
        type: "POMELO_SUGGESTIONS_FETCH",
        usernameSuggestionLoading: !0
      });
      let a = await n.HTTP.get({
        url: E.Endpoints.POMELO_SUGGESTIONS,
        timeout: e
      });
      if (a.ok && (null === (t = a.body) || void 0 === t ? void 0 : t.username) != null) return i.default.dispatch({
        type: "POMELO_SUGGESTIONS_SUCCESS",
        suggestion: a.body
      })
    } catch (e) {
      return
    }
  },
  async attemptPomelo(e) {
    var t, a;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
      u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    let f = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
      maxNum: 32,
      minNum: 2
    }) : void 0);
    if (null != f) return r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
      reason: f,
      username_error: !0,
      location: n,
      one_click_flow: c
    }), i.default.dispatch({
      type: "POMELO_ATTEMPT_FAILURE",
      username: e,
      error: f
    });
    if ((0, d.getPomeloAttempt)()) try {
      let t = await o.default.post({
        url: u ? E.Endpoints.POMELO_ATTEMPT_UNAUTHED : E.Endpoints.POMELO_ATTEMPT,
        body: {
          username: e
        },
        trackedActionData: {
          event: s.NetworkActionNames.POMELO_ATTEMPT,
          properties: {
            requested_username: e
          }
        }
      });
      t.body.taken && r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
        reason: "already_taken",
        username_error: !0,
        location: n,
        one_click_flow: c
      }), i.default.dispatch({
        type: "POMELO_ATTEMPT_SUCCESS",
        username: e,
        taken: t.body.taken
      })
    } catch (o) {
      ;
      let t = new l.APIError(o),
        s = null !== (a = t.getAnyErrorMessage()) && void 0 !== a ? a : void 0;
      r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
        reason: s,
        username_error: !0,
        location: n,
        one_click_flow: c
      }), i.default.dispatch({
        username: e,
        type: "POMELO_ATTEMPT_FAILURE",
        error: null != t.status && t.status < 500 && 401 !== t.status ? s : void 0,
        statusCode: t.status,
        retryAfter: t.retryAfter
      })
    }
  },
  async createPomelo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = await o.default.post({
        body: e,
        url: E.Endpoints.POMELO_CREATE,
        trackedActionData: {
          event: s.NetworkActionNames.POMELO_CREATE,
          properties: {
            one_click_flow: t
          }
        }
      });
    return i.default.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: a.body
    }), a.body
  }
}