var e,
    a,
    o,
    l,
    c = i(979079),
    s = i.n(c),
    u = i(442837),
    r = i(570140),
    _ = i(531441),
    d = i(800530);
let f = {},
    E = {},
    S = { state: _.Sn.ALL_GOOD },
    A = !1,
    T = !1,
    p = null,
    C = null,
    g = !1,
    U = !1,
    I = null,
    b = d.bK.DIDNT_VIOLATE_POLICY,
    F = '';
class H extends (l = u.ZP.Store) {
    isFetching() {
        return A;
    }
    getClassifications() {
        return Object.values(f);
    }
    getClassification(t) {
        return f[t];
    }
    getAccountStanding() {
        return S;
    }
    getFetchError() {
        return p;
    }
    isInitialized() {
        return T;
    }
    getClassificationRequestState(t) {
        return E[t];
    }
    getAppealClassificationId() {
        return C;
    }
    getIsDsaEligible() {
        return g;
    }
    getAppealSignal() {
        return b;
    }
    getFreeTextAppealReason() {
        return F;
    }
    getIsSubmitting() {
        return U;
    }
    getSubmitError() {
        return I;
    }
}
(o = 'SafetyHubStore'),
    (a = 'displayName') in (e = H)
        ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (e[a] = o),
    (n.Z = new H(r.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            A = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: n, accountStanding: i, isDsaEligible: e } = t;
            (f = s()(n, 'id')), (S = i), (g = e), (A = !1), (T = !0), (p = null);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: n } = t;
            (A = !1), (T = !1), (p = n);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (E[t.classificationId] = _.OY.PENDING), (A = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: n, accountStanding: i, isDsaEligible: e } = t;
            (f[n.id] = n), (E[n.id] = _.OY.SUCCESS), (S = i), (A = !1), (p = null), (g = e), (T = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: i } = t;
            (A = !1), (p = n), (E[i] = _.OY.FAILED), (T = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            C = n;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (C = null), (b = d.bK.DIDNT_VIOLATE_POLICY), (F = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            b = n;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            F = n;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (U = !0), (I = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: n } = t;
            (U = !1), (I = null), (f[n].appeal_status = { status: _.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: n } = t;
            (U = !1), (I = n);
        },
        LOGOUT: function () {
            (A = !1), (f = {}), (S = { state: _.Sn.ALL_GOOD }), (C = null), (b = d.bK.DIDNT_VIOLATE_POLICY), (F = '');
        }
    }));
