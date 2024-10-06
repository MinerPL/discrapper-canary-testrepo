n.d(t, {
    Cg: function () {
        return f;
    },
    Cs: function () {
        return m;
    },
    EY: function () {
        return M;
    },
    I5: function () {
        return g;
    },
    JQ: function () {
        return O;
    },
    RY: function () {
        return A;
    },
    SU: function () {
        return d;
    },
    Sv: function () {
        return S;
    },
    ZW: function () {
        return x;
    },
    bK: function () {
        return I;
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
        return p;
    },
    wo: function () {
        return u;
    }
});
var i,
    a,
    s,
    l,
    r,
    o,
    c,
    d,
    u,
    _,
    E,
    I,
    m,
    T,
    N = n(990547),
    h = n(981631);
function C(e, t, n) {
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
((i = d || (d = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class p {}
C(p, 'TOS_LINK', 'https://discord.com/terms'), C(p, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), C(p, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(p, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), C(p, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), C(p, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__');
class f {}
C(f, 'CLASSIFICATION_ID', 'classification_id'), C(f, 'INCIDENT_TIMESTAMP', 'incident_time'), ((a = u || (u = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (a.LEARN_MORE_LINK = 'learn_more_link');
class g {}
C(g, 'ICON_TYPE', 'icon_type'),
    C(g, 'HEADER', 'header'),
    C(g, 'BODY', 'body'),
    C(g, 'CTAS', 'ctas'),
    C(g, 'TIMESTAMP', 'timestamp'),
    C(g, 'THEME', 'theme'),
    C(g, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    C(g, 'LEARN_MORE_LINK', 'learn_more_link'),
    C(g, 'CLASSIFICATION_ID', 'classification_id'),
    ((s = _ || (_ = {}))[(s.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (s[(s.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (s[(s.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (s[(s.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (s[(s.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (s[(s.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (s[(s.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (s[(s.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((l = E || (E = {}))[(l.SystemDM = 0)] = 'SystemDM'),
    (l[(l.StandingTab = 1)] = 'StandingTab'),
    (l[(l.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: h.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: h.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: h.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: h.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: h.jXE.APPEAL_INGESTION_THANKS,
        SPAM: h.jXE.APPEAL_INGESTION_SPAM
    }),
    ((r = I || (I = {}))[(r.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (r[(r.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (r[(r.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (r[(r.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let A = [0, 1, 2, 3],
    S = 372,
    M = 279,
    x = { impression_group: N.ImpressionGroups.APPEAL_INGESTION };
((o = m || (m = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let O = {
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
};
((c = T || (T = {}))[(c.USER = 1)] = 'USER'), (c[(c.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (c[(c.GUILD_MEMBER = 3)] = 'GUILD_MEMBER');
