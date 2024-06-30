var i = n(544891), s = n(314897), a = n(981631);
t.Z = {
    setUserAchievement(e, t, n) {
        let r = s.default.getId();
        return i.tn.put({
            url: a.ANM.USER_ACHIEVEMENTS_FOR_USER(r, e, t),
            body: { percent_complete: n },
            oldFormErrors: !0
        });
    },
    fetchForApplication: e => i.tn.get({
        url: a.ANM.USER_ACHIEVEMENTS(e),
        retries: 1,
        oldFormErrors: !0
    }).then(e => {
        let {body: t} = e;
        return t;
    })
};
