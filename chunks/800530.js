"use strict";
n.r(t), n.d(t, {
  AppealIngestionSignal: function() {
    return _
  },
  AppealIngestionSignalOrder: function() {
    return f
  },
  AppealIngestionSlideTypes: function() {
    return A
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return d
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return O
  },
  SafetyHubAnalyticsActionSource: function() {
    return S
  },
  SafetyHubAnalyticsActions: function() {
    return a
  },
  SafetyHubLinks: function() {
    return T
  },
  SafetyHubPolicyNoticeKeys: function() {
    return L
  },
  SafetyHubView: function() {
    return c
  },
  SafetySystemNotificationCtaType: function() {
    return I
  },
  SafetySystemNotificationEmbedKeys: function() {
    return C
  },
  SlidesOrderDsaEligible: function() {
    return R
  },
  SlidesOrderNonDsaEligible: function() {
    return M
  }
});
var i, o, E, r, s, l, c, I, a, S, _, A, N = n("981631");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = c || (c = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING";
class T {}
u(T, "TOS_LINK", "https://discord.com/terms"), u(T, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), u(T, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), u(T, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), u(T, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), u(T, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class L {}
u(L, "CLASSIFICATION_ID", "classification_id"), u(L, "INCIDENT_TIMESTAMP", "incident_time"), (o = I || (I = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", o.LEARN_MORE_LINK = "learn_more_link";
class C {}
u(C, "ICON_TYPE", "icon_type"), u(C, "HEADER", "header"), u(C, "BODY", "body"), u(C, "CTAS", "ctas"), u(C, "TIMESTAMP", "timestamp"), u(C, "THEME", "theme"), u(C, "CLIENT_VERSION_MESSAGE", "client_version_message"), u(C, "LEARN_MORE_LINK", "learn_more_link"), u(C, "CLASSIFICATION_ID", "classification_id"), (E = a || (a = {}))[E.ViewViolationDetail = 0] = "ViewViolationDetail", E[E.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", E[E.ClickLetUsKnow = 2] = "ClickLetUsKnow", E[E.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", E[E.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", E[E.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", E[E.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", E[E.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (r = S || (S = {}))[r.SystemDM = 0] = "SystemDM", r[r.StandingTab = 1] = "StandingTab", r[r.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: N.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: N.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: N.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: N.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: N.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: N.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (s = _ || (_ = {}))[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let f = [0, 1, 2, 3],
  O = 372,
  d = 279;
(l = A || (A = {})).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks";
let R = {
    "speed-bump": {
      next: "collect-signal",
      prev: null
    },
    "collect-signal": {
      next: "confirm-submission",
      prev: "speed-bump"
    },
    "confirm-submission": {
      next: "request-sent",
      prev: "collect-signal"
    },
    "request-sent": {
      next: null,
      prev: null
    }
  },
  M = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  }