"use strict";
E.d(e, {
  Cg: function() {
    return a
  },
  Cs: function() {
    return u
  },
  EY: function() {
    return f
  },
  I5: function() {
    return R
  },
  RY: function() {
    return M
  },
  SU: function() {
    return A
  },
  Sv: function() {
    return D
  },
  bK: function() {
    return L
  },
  c6: function() {
    return P
  },
  d9: function() {
    return G
  },
  n0: function() {
    return s
  },
  qS: function() {
    return T
  },
  s: function() {
    return c
  },
  sQ: function() {
    return O
  },
  wo: function() {
    return o
  }
});
var t, I, _, i, r, N, S, A, o, s, c, L, u, T, l = E(981631);

function C(n, e, E) {
  return e in n ? Object.defineProperty(n, e, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = E, n
}(t = A || (A = {})).SETTINGS = "SETTINGS", t.ACCOUNT_STANDING = "ACCOUNT_STANDING", t.GUILD_SETTINGS = "GUILD_SETTINGS", t.ENCRYPTION = "ENCRYPTION";
class O {}
C(O, "TOS_LINK", "https://discord.com/terms"), C(O, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), C(O, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), C(O, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), C(O, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), C(O, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__");
class a {}
C(a, "CLASSIFICATION_ID", "classification_id"), C(a, "INCIDENT_TIMESTAMP", "incident_time"), (I = o || (o = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", I.LEARN_MORE_LINK = "learn_more_link";
class R {}
C(R, "ICON_TYPE", "icon_type"), C(R, "HEADER", "header"), C(R, "BODY", "body"), C(R, "CTAS", "ctas"), C(R, "TIMESTAMP", "timestamp"), C(R, "THEME", "theme"), C(R, "CLIENT_VERSION_MESSAGE", "client_version_message"), C(R, "LEARN_MORE_LINK", "learn_more_link"), C(R, "CLASSIFICATION_ID", "classification_id"), (_ = s || (s = {}))[_.ViewViolationDetail = 0] = "ViewViolationDetail", _[_.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", _[_.ClickLetUsKnow = 2] = "ClickLetUsKnow", _[_.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", _[_.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", _[_.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", _[_.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", _[_.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", (i = c || (c = {}))[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", i[i.AppealIngestion = 2] = "AppealIngestion", Object.freeze({
  SPEED_BUMP: l.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: l.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: l.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: l.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: l.jXE.APPEAL_INGESTION_THANKS,
  SPAM: l.jXE.APPEAL_INGESTION_SPAM
}), (r = L || (L = {}))[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE";
let M = [0, 1, 2, 3],
  D = 372,
  f = 279;
(N = u || (u = {})).SPEED_BUMP = "speed-bump", N.COLLECT_SIGNAL = "collect-signal", N.CONFIRM_SUBMISSION = "confirm-submission", N.REQUEST_SENT = "request-sent", N.THANKS = "thanks";
let G = {
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
  P = {
    "collect-signal": {
      next: "thanks",
      prev: null
    },
    thanks: {
      next: null,
      prev: null
    }
  };
(S = T || (T = {}))[S.USER = 1] = "USER", S[S.GUILD_OWNER = 2] = "GUILD_OWNER", S[S.GUILD_MEMBER = 3] = "GUILD_MEMBER"