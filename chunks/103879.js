i.d(n, {
    NA: function () {
        return r;
    },
    uR: function () {
        return d;
    },
    yq: function () {
        return u;
    }
});
var e = i(544891),
    a = i(570140),
    o = i(406432),
    l = i(314897),
    c = i(788080),
    s = i(981631);
async function u() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = l.default.getSuspendedUserToken(),
        n = null != t ? s.ANM.SAFETY_HUB_SUSPENDED : s.ANM.SAFETY_HUB,
        i =
            null != t
                ? e.tn.post({
                      url: n,
                      body: { token: t }
                  })
                : e.tn.get({ url: n });
    await i
        .then((t) => {
            let { body: n } = t,
                { classifications: i, guild_classifications: e, account_standing: o, is_dsa_eligible: l } = n,
                c = i.map((t) => (_(t), t));
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: c.concat(null != e ? e : []),
                accountStanding: o,
                isDsaEligible: l
            });
        })
        .catch((t) => {
            var n, i;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error'
            });
        });
}
async function r(t) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let n = l.default.getSuspendedUserToken(),
        i = null != n ? s.ANM.SAFETY_HUB_SUSPENDED : s.ANM.SAFETY_HUB,
        o =
            null != n
                ? e.tn.post({
                      url: i,
                      body: { token: n }
                  })
                : e.tn.get({ url: i });
    await o
        .then((n) => {
            let { body: i } = n,
                { classifications: e, account_standing: o, is_dsa_eligible: l } = i,
                c = e.find((n) => n.id === t);
            null != c
                ? (_(c),
                  a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: c,
                      accountStanding: o,
                      isDsaEligible: l
                  }))
                : a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: t
                  });
        })
        .catch((n) => {
            var i, e;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (e = null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.message) && void 0 !== e ? e : 'Unknown error',
                classificationId: t
            });
        });
}
function _(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let n = t.flagged_content[0];
        (n.attachments = n.attachments.filter((t) => {
            let { filename: n } = t;
            return (0, o.CO)(n) || (0, o.NU)(n);
        })),
            (t.flagged_content = (0, c.Vt)(n) ? [] : [n]);
    }
}
async function d(t, n, i) {
    let o = l.default.getSuspendedUserToken(),
        c = null != o ? s.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : s.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        u =
            null != o
                ? e.tn.put({
                      url: c,
                      body: {
                          signal: n,
                          user_input: i,
                          token: o
                      }
                  })
                : e.tn.put({
                      url: c,
                      body: {
                          signal: n,
                          user_input: i
                      }
                  });
    a.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await u
            .then(() => {
                a.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: t
                });
            })
            .catch((t) => {
                var n, i;
                throw (
                    (a.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error'
                    }),
                    t)
                );
            });
}
