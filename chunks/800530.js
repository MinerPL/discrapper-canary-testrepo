n.d(t, {
  Cg: function() {
return C;
  },
  Cs: function() {
return u;
  },
  EY: function() {
return M;
  },
  I5: function() {
return f;
  },
  RY: function() {
return R;
  },
  SU: function() {
return N;
  },
  Sv: function() {
return D;
  },
  bK: function() {
return s;
  },
  c6: function() {
return G;
  },
  d9: function() {
return p;
  },
  n0: function() {
return A;
  },
  qS: function() {
return L;
  },
  s: function() {
return c;
  },
  sQ: function() {
return O;
  },
  wo: function() {
return o;
  }
});
var E, _, i, r, I, S, a, N, o, A, c, s, u, L, T = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(E = N || (N = {})).SETTINGS = 'SETTINGS', E.ACCOUNT_STANDING = 'ACCOUNT_STANDING', E.GUILD_SETTINGS = 'GUILD_SETTINGS', E.ENCRYPTION = 'ENCRYPTION';
class O {}
l(O, 'TOS_LINK', 'https://discord.com/terms'), l(O, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), l(O, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), l(O, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), l(O, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), l(O, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class C {}
l(C, 'CLASSIFICATION_ID', 'classification_id'), l(C, 'INCIDENT_TIMESTAMP', 'incident_time'), (_ = o || (o = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail', _.LEARN_MORE_LINK = 'learn_more_link';
class f {}
l(f, 'ICON_TYPE', 'icon_type'), l(f, 'HEADER', 'header'), l(f, 'BODY', 'body'), l(f, 'CTAS', 'ctas'), l(f, 'TIMESTAMP', 'timestamp'), l(f, 'THEME', 'theme'), l(f, 'CLIENT_VERSION_MESSAGE', 'client_version_message'), l(f, 'LEARN_MORE_LINK', 'learn_more_link'), l(f, 'CLASSIFICATION_ID', 'classification_id'), (i = A || (A = {}))[i.ViewViolationDetail = 0] = 'ViewViolationDetail', i[i.ViewViolationsDropdown = 1] = 'ViewViolationsDropdown', i[i.ClickLetUsKnow = 2] = 'ClickLetUsKnow', i[i.ClickAgeVerificationLink = 3] = 'ClickAgeVerificationLink', i[i.ClickSpamWebformLink = 4] = 'ClickSpamWebformLink', i[i.ClickLearnMoreLink = 5] = 'ClickLearnMoreLink', i[i.ClickCommunityGuidelinesLink = 6] = 'ClickCommunityGuidelinesLink', i[i.ClickWarningSystemHelpcenterLink = 7] = 'ClickWarningSystemHelpcenterLink', (r = c || (c = {}))[r.SystemDM = 0] = 'SystemDM', r[r.StandingTab = 1] = 'StandingTab', r[r.AppealIngestion = 2] = 'AppealIngestion', Object.freeze({
  SPEED_BUMP: T.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: T.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: T.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: T.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: T.jXE.APPEAL_INGESTION_THANKS,
  SPAM: T.jXE.APPEAL_INGESTION_SPAM
}), (I = s || (s = {}))[I.DIDNT_VIOLATE_POLICY = 0] = 'DIDNT_VIOLATE_POLICY', I[I.TOO_STRICT_UNFAIR = 1] = 'TOO_STRICT_UNFAIR', I[I.DONT_AGREE_PENALTY = 2] = 'DONT_AGREE_PENALTY', I[I.SOMETHING_ELSE = 3] = 'SOMETHING_ELSE';
let R = [
0,
1,
2,
3
  ],
  D = 372,
  M = 279;
(S = u || (u = {})).SPEED_BUMP = 'speed-bump', S.COLLECT_SIGNAL = 'collect-signal', S.CONFIRM_SUBMISSION = 'confirm-submission', S.REQUEST_SENT = 'request-sent', S.THANKS = 'thanks';
let p = {
'speed-bump': {
  next: 'collect-signal',
  prev: null
},
'collect-signal': {
  next: 'confirm-submission',
  prev: 'speed-bump'
},
'confirm-submission': {
  next: 'request-sent',
  prev: 'collect-signal'
},
'request-sent': {
  next: null,
  prev: null
}
  },
  G = {
'collect-signal': {
  next: 'thanks',
  prev: null
},
thanks: {
  next: null,
  prev: null
}
  };
(a = L || (L = {}))[a.USER = 1] = 'USER', a[a.GUILD_OWNER = 2] = 'GUILD_OWNER', a[a.GUILD_MEMBER = 3] = 'GUILD_MEMBER';