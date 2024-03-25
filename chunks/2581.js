"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var s = a("693566"),
  n = a.n(s),
  i = a("446674"),
  l = a("913144"),
  r = a("718517");
let o = {
    taken: null,
    error: void 0,
    rateLimited: !0
  },
  d = {
    validations: new n({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: !1,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: void 0
        },
        fetched: !1,
        usernameSuggestionLoading: !1
      },
      registration: {
        suggestion: {
          username: void 0
        },
        source: void 0,
        fetched: !1
      }
    }
  };
class u extends i.default.Store {
  isRateLimited() {
    return null != d.retryAfterTime && Date.now() < d.retryAfterTime
  }
  validate(e) {
    let t = d.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? o : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
  }
  registrationUsernameSuggestion() {
    return d.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return d.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return d.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return d.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return d.suggestions.registration.source === e && d.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return d.suggestions.migration.fetched
  }
}
u.displayName = "PomeloStore";
var c = new u(l.default, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: a
    } = e;
    d.validations.set(t, {
      taken: a
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: a,
      statusCode: s,
      retryAfter: n
    } = e;
    429 === s ? d.validations.set(t, {
      taken: null,
      error: a,
      rateLimited: !0
    }, (null != n ? n : 7) * r.default.Millis.SECOND) : d.validations.set(t, {
      taken: null,
      error: a
    }), null != n && (d.retryAfterTime = Date.now() + n * r.default.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    d.suggestions.migration = {
      suggestion: {
        username: void 0
      },
      fetched: !1,
      usernameSuggestionLoading: !1
    }, d.suggestions.registration = {
      suggestion: {
        username: void 0
      },
      source: void 0,
      fetched: !1
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    d.suggestions.migration = {
      suggestion: t,
      fetched: !0,
      usernameSuggestionLoading: !1
    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (d.currentUsernameInvalid = !0)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    d.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: a
    } = e;
    d.suggestions.registration = {
      suggestion: t,
      source: a,
      fetched: !0
    }, (null == t ? void 0 : t.username) != null && d.validations.set(t.username, {
      taken: !1
    })
  }
})