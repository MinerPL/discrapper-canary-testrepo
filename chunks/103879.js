i.d(t, {
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
    s = i(788080),
    c = i(981631);
async function u() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let n = l.default.getSuspendedUserToken(),
        t = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        i =
            null != n
                ? e.tn.post({
                      url: t,
                      body: { token: n }
                  })
                : e.tn.get({ url: t });
    await i
        .then((n) => {
            let { body: t } = n,
                { classifications: i, guild_classifications: e, account_standing: o, is_dsa_eligible: l, username: s } = t,
                c = i.map((n) => (_(n), n));
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: c.concat(null != e ? e : []),
                accountStanding: o,
                isDsaEligible: l,
                username: s
            });
        })
        .catch((n) => {
            var t, i;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (i = null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.message) && void 0 !== i ? i : 'Unknown error'
            });
        });
}
async function r(n) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: n
    });
    let t = l.default.getSuspendedUserToken(),
        i = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        o =
            null != t
                ? e.tn.post({
                      url: i,
                      body: { token: t }
                  })
                : e.tn.get({ url: i });
    await o
        .then((t) => {
            let { body: i } = t,
                { classifications: e, account_standing: o, is_dsa_eligible: l, username: s } = i,
                c = e.find((t) => t.id === n);
            null != c
                ? (_(c),
                  a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: c,
                      accountStanding: o,
                      isDsaEligible: l,
                      username: s
                  }))
                : a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: n
                  });
        })
        .catch((t) => {
            var i, e;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (e = null == t ? void 0 : null === (i = t.body) || void 0 === i ? void 0 : i.message) && void 0 !== e ? e : 'Unknown error',
                classificationId: n
            });
        });
}
function _(n) {
    if (null != n.flagged_content && n.flagged_content.length > 0) {
        let t = n.flagged_content[0];
        (t.attachments = t.attachments.filter((n) => {
            let { filename: t } = n;
            return (0, o.CO)(t) || (0, o.NU)(t);
        })),
            (n.flagged_content = (0, s.Vt)(t) ? [] : [t]);
    }
}
async function d(n, t, i) {
    let o = l.default.getSuspendedUserToken(),
        s = null != o ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(n) : c.ANM.SAFETY_HUB_REQUEST_REVIEW(n),
        u =
            null != o
                ? e.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: i,
                          token: o
                      }
                  })
                : e.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: i
                      }
                  });
    a.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await u
            .then(() => {
                a.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: n
                });
            })
            .catch((n) => {
                var t, i;
                throw (
                    (a.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (i = null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.message) && void 0 !== i ? i : 'Unknown error'
                    }),
                    n)
                );
            });
}
