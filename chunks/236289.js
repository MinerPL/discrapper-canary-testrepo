var i, a, s, l, r = n(979079), o = n.n(r), c = n(442837), _ = n(570140), u = n(531441), E = n(800530);
let d = {}, T = {}, S = { state: u.Sn.ALL_GOOD }, A = !1, I = !1, N = null, g = null, f = !1, C = !1, m = null, U = E.bK.DIDNT_VIOLATE_POLICY, h = '';
class p extends (l = c.ZP.Store) {
    isFetching() {
        return A;
    }
    getClassifications() {
        return Object.values(d);
    }
    getClassification(e) {
        return d[e];
    }
    getAccountStanding() {
        return S;
    }
    getFetchError() {
        return N;
    }
    isInitialized() {
        return I;
    }
    getClassificationRequestState(e) {
        return T[e];
    }
    getAppealClassificationId() {
        return g;
    }
    getIsDsaEligible() {
        return f;
    }
    getAppealSignal() {
        return U;
    }
    getFreeTextAppealReason() {
        return h;
    }
    getIsSubmitting() {
        return C;
    }
    getSubmitError() {
        return m;
    }
}
s = 'SafetyHubStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new p(_.Z, {
    SAFETY_HUB_FETCH_START: function (e) {
        A = !0;
    },
    SAFETY_HUB_FETCH_SUCCESS: function (e) {
        let {
            classifications: t,
            accountStanding: n,
            isDsaEligible: i
        } = e;
        d = o()(t, 'id'), S = n, f = i, A = !1, I = !0, N = null;
    },
    SAFETY_HUB_FETCH_FAILURE: function (e) {
        let {error: t} = e;
        A = !1, I = !1, N = t;
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
        T[e.classificationId] = u.OY.PENDING, A = !0;
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
        let {
            classification: t,
            accountStanding: n,
            isDsaEligible: i
        } = e;
        d[t.id] = t, T[t.id] = u.OY.SUCCESS, S = n, A = !1, N = null, f = i, I = !0;
    },
    SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
        let {
            error: t,
            classificationId: n
        } = e;
        A = !1, N = t, T[n] = u.OY.FAILED, I = !1;
    },
    SAFETY_HUB_APPEAL_OPEN: function (e) {
        let {classificationId: t} = e;
        g = t;
    },
    SAFETY_HUB_APPEAL_CLOSE: function () {
        g = null, U = E.bK.DIDNT_VIOLATE_POLICY, h = '';
    },
    SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
        let {signal: t} = e;
        U = t;
    },
    SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
        let {userInput: t} = e;
        h = t;
    },
    SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
        let {} = e;
        C = !0, m = null;
    },
    SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
        let {classificationId: t} = e;
        C = !1, m = null, d[t].appeal_status = { status: u.hQ.REVIEW_PENDING };
    },
    SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
        let {error: t} = e;
        C = !1, m = t;
    },
    LOGOUT: function () {
        A = !1, d = {}, S = { state: u.Sn.ALL_GOOD }, g = null, U = E.bK.DIDNT_VIOLATE_POLICY, h = '';
    }
});
