"use strict";
n.r(t), n.d(t, {
  AppealIngestionSignal: function() {
    return _
  },
  AppealIngestionSignalOrder: function() {
    return C
  },
  AppealIngestionSlideTypes: function() {
    return m
  },
  DEFAULT_MEDIA_MAX_HEIGHT: function() {
    return g
  },
  DEFAULT_MEDIA_MAX_WIDTH: function() {
    return A
  },
  SafetyHubAnalyticsActionSource: function() {
    return E
  },
  SafetyHubAnalyticsActions: function() {
    return f
  },
  SafetyHubLinks: function() {
    return h
  },
  SafetyHubPolicyNoticeKeys: function() {
    return N
  },
  SafetyHubView: function() {
    return d
  },
  SafetySystemNotificationCtaType: function() {
    return c
  },
  SafetySystemNotificationEmbedKeys: function() {
    return S
  },
  SlidesOrderDsaEligible: function() {
    return M
  },
  SlidesOrderNonDsaEligible: function() {
    return R
  },
  ViolationType: function() {
    return T
  }
});
var s, a, l, i, r, o, u, d, c, f, E, _, m, T, I = n("981631");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = d || (d = {})).SETTINGS = "SETTINGS", s.ACCOUNT_STANDING = "ACCOUNT_STANDING", s.GUILD_SETTINGS = "GUILD_SETTINGS";
class h {}
p(h, "TOS_LINK", "https://discord.com/terms"), p(h, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), p(h, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), p(h, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), p(h, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), p(h, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class N {}
p(N, "CLASSIFICATION_ID", "classification_id"), p(N, "INCIDENT_TIMESTAMP", "incident_time"), (a = c || (c = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", a.LEARN_MORE_LINK = "learn_more_link";
class S {}
p(S, "ICON_TYPE", "icon_type"), p(S, "HEADER", "header"), p(S, "BODY", "body"), p(S, "CTAS", "ctas"), p(S, "TIMESTAMP", "timestamp"), p(S, "THEME", "theme"), p(S, "CLIENT_VERSION_MESSAGE", "client_version_message"), p(S, "LEARN_MORE_LINK", "learn_more_link"), p(S, "CLASSIFICATION_ID", "classification_id"), (l = f || (f = {}))[l.ViewViolationDetail = 0] = "ViewViolationDetail", l[l.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", l[l.ClickLetUsKnow = 2] = "ClickLetUsKnow", l[l.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", l[l.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", l[l.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", l[l.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", l[l.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (i = E || (E = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", i[i.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: I.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: I.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: I.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: I.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: I.AnalyticsSections.APPEAL_INGESTION_THANKS,
  SPAM: I.AnalyticsSections.APPEAL_INGESTION_SPAM
}), (r = _ || (_ = {}))[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let C = [0, 1, 2, 3],
  A = 372,
  g = 279;
(o = m || (m = {})).SPEED_BUMP = "speed-bump", o.COLLECT_SIGNAL = "collect-signal", o.CONFIRM_SUBMISSION = "confirm-submission", o.REQUEST_SENT = "request-sent", o.THANKS = "thanks";
let M = {
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
  R = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  };
(u = T || (T = {}))[u.USER = 1] = "USER", u[u.GUILD_OWNER = 2] = "GUILD_OWNER", u[u.GUILD_MEMBER = 3] = "GUILD_MEMBER"