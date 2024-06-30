n.d(t, {
    NA: function () {
        return _;
    },
    uR: function () {
        return E;
    },
    yq: function () {
        return c;
    }
});
var i = n(544891), a = n(570140), s = n(406432), l = n(314897), r = n(788080), o = n(981631);
async function c() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let e = l.default.getSuspendedUserToken(), t = null != e ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB, n = null != e ? i.tn.post({
            url: t,
            body: { token: e }
        }) : i.tn.get({ url: t });
    await n.then(e => {
        let {body: t} = e, {
                classifications: n,
                guild_classifications: i,
                account_standing: s,
                is_dsa_eligible: l
            } = t, r = n.map(e => (u(e), e));
        a.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_SUCCESS',
            classifications: r.concat(null != i ? i : []),
            accountStanding: s,
            isDsaEligible: l
        });
    }).catch(e => {
        var t, n;
        a.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_FAILURE',
            error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : 'Unknown error'
        });
    });
}
async function _(e) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: e
    });
    let t = l.default.getSuspendedUserToken(), n = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB, s = null != t ? i.tn.post({
            url: n,
            body: { token: t }
        }) : i.tn.get({ url: n });
    await s.then(t => {
        let {body: n} = t, {
                classifications: i,
                account_standing: s,
                is_dsa_eligible: l
            } = n, r = i.find(t => t.id === e);
        null != r ? (u(r), a.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
            classification: r,
            accountStanding: s,
            isDsaEligible: l
        })) : a.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
            error: 'Classification not found.',
            classificationId: e
        });
    }).catch(t => {
        var n, i;
        a.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
            error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error',
            classificationId: e
        });
    });
}
function u(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        t.attachments = t.attachments.filter(e => {
            let {filename: t} = e;
            return (0, s.CO)(t) || (0, s.NU)(t);
        }), e.flagged_content = (0, r.Vt)(t) ? [] : [t];
    }
}
async function E(e, t, n) {
    let s = l.default.getSuspendedUserToken(), r = null != s ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : o.ANM.SAFETY_HUB_REQUEST_REVIEW(e), c = null != s ? i.tn.put({
            url: r,
            body: {
                signal: t,
                user_input: n,
                token: s
            }
        }) : i.tn.put({
            url: r,
            body: {
                signal: t,
                user_input: n
            }
        });
    a.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }), await c.then(() => {
        a.Z.dispatch({
            type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
            classificationId: e
        });
    }).catch(e => {
        var t, n;
        throw a.Z.dispatch({
            type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
            error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : 'Unknown error'
        }), e;
    });
}
