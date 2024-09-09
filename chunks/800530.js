n.d(t, {
    Cg: function () {
        return C;
    },
    Cs: function () {
        return m;
    },
    EY: function () {
        return A;
    },
    I5: function () {
        return p;
    },
    RY: function () {
        return g;
    },
    SU: function () {
        return u;
    },
    Sv: function () {
        return S;
    },
    bK: function () {
        return I;
    },
    c6: function () {
        return x;
    },
    d9: function () {
        return R;
    },
    n0: function () {
        return _;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return E;
    },
    sQ: function () {
        return f;
    },
    wo: function () {
        return d;
    }
});
var i,
    a,
    s,
    r,
    l,
    o,
    c,
    u,
    d,
    _,
    E,
    I,
    m,
    T,
    h = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((i = u || (u = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION');
class f {}
N(f, 'TOS_LINK', 'https://discord.com/terms'), N(f, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), N(f, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), N(f, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), N(f, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), N(f, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class C {}
N(C, 'CLASSIFICATION_ID', 'classification_id'), N(C, 'INCIDENT_TIMESTAMP', 'incident_time'), ((a = d || (d = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (a.LEARN_MORE_LINK = 'learn_more_link');
class p {}
N(p, 'ICON_TYPE', 'icon_type'),
    N(p, 'HEADER', 'header'),
    N(p, 'BODY', 'body'),
    N(p, 'CTAS', 'ctas'),
    N(p, 'TIMESTAMP', 'timestamp'),
    N(p, 'THEME', 'theme'),
    N(p, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    N(p, 'LEARN_MORE_LINK', 'learn_more_link'),
    N(p, 'CLASSIFICATION_ID', 'classification_id'),
    ((s = _ || (_ = {}))[(s.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (s[(s.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (s[(s.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (s[(s.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (s[(s.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (s[(s.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (s[(s.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (s[(s.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((r = E || (E = {}))[(r.SystemDM = 0)] = 'SystemDM'),
    (r[(r.StandingTab = 1)] = 'StandingTab'),
    (r[(r.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: h.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: h.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: h.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: h.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: h.jXE.APPEAL_INGESTION_THANKS,
        SPAM: h.jXE.APPEAL_INGESTION_SPAM
    }),
    ((l = I || (I = {}))[(l.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (l[(l.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (l[(l.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (l[(l.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let g = [0, 1, 2, 3],
    S = 372,
    A = 279;
((o = m || (m = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let R = {
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
    x = {
        'collect-signal': {
            next: 'thanks',
            prev: null
        },
        thanks: {
            next: null,
            prev: null
        }
    };
((c = T || (T = {}))[(c.USER = 1)] = 'USER'), (c[(c.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (c[(c.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
