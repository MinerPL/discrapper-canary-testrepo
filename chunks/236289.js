var e,
    a,
    o,
    l,
    s = i(979079),
    c = i.n(s),
    u = i(442837),
    r = i(570140),
    _ = i(531441),
    d = i(800530);
let f = {},
    E = {},
    S = { state: _.Sn.ALL_GOOD },
    A = !1,
    p = !1,
    T = null,
    C = null,
    g = !1,
    b = !1,
    U = null,
    I = d.bK.DIDNT_VIOLATE_POLICY,
    F = '',
    H = '';
class R extends (l = u.ZP.Store) {
    isFetching() {
        return A;
    }
    getClassifications() {
        return Object.values(f);
    }
    getClassification(n) {
        return f[n];
    }
    getAccountStanding() {
        return S;
    }
    getFetchError() {
        return T;
    }
    isInitialized() {
        return p;
    }
    getClassificationRequestState(n) {
        return E[n];
    }
    getAppealClassificationId() {
        return C;
    }
    getIsDsaEligible() {
        return g;
    }
    getAppealSignal() {
        return I;
    }
    getFreeTextAppealReason() {
        return F;
    }
    getIsSubmitting() {
        return b;
    }
    getSubmitError() {
        return U;
    }
    getUsername() {
        return H;
    }
}
(o = 'SafetyHubStore'),
    (a = 'displayName') in (e = R)
        ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (e[a] = o),
    (t.Z = new R(r.Z, {
        SAFETY_HUB_FETCH_START: function (n) {
            A = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (n) {
            let { classifications: t, accountStanding: i, isDsaEligible: e, username: a } = n;
            (f = c()(t, 'id')), (S = i), (g = e), (A = !1), (p = !0), (T = null), (H = a);
        },
        SAFETY_HUB_FETCH_FAILURE: function (n) {
            let { error: t } = n;
            (A = !1), (p = !1), (T = t);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (n) {
            (E[n.classificationId] = _.OY.PENDING), (A = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (n) {
            let { classification: t, accountStanding: i, isDsaEligible: e, username: a } = n;
            (f[t.id] = t), (E[t.id] = _.OY.SUCCESS), (S = i), (A = !1), (T = null), (g = e), (p = !0), (H = a);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (n) {
            let { error: t, classificationId: i } = n;
            (A = !1), (T = t), (E[i] = _.OY.FAILED), (p = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (n) {
            let { classificationId: t } = n;
            C = t;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (C = null), (I = d.bK.DIDNT_VIOLATE_POLICY), (F = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (n) {
            let { signal: t } = n;
            I = t;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (n) {
            let { userInput: t } = n;
            F = t;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (n) {
            let {} = n;
            (b = !0), (U = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (n) {
            let { classificationId: t } = n;
            (b = !1), (U = null), (f[t].appeal_status = { status: _.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (n) {
            let { error: t } = n;
            (b = !1), (U = t);
        },
        LOGOUT: function () {
            (A = !1), (f = {}), (S = { state: _.Sn.ALL_GOOD }), (C = null), (I = d.bK.DIDNT_VIOLATE_POLICY), (F = '');
        }
    }));
