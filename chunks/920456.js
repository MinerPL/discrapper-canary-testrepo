var i = n(544891),
    a = n(314897),
    s = n(981631);
t.Z = {
    setUserAchievement(e, t, n) {
        let r = a.default.getId();
        return i.tn.put({
            url: s.ANM.USER_ACHIEVEMENTS_FOR_USER(r, e, t),
            body: { percent_complete: n },
            oldFormErrors: !0
        });
    },
    fetchForApplication: (e) =>
        i.tn
            .get({
                url: s.ANM.USER_ACHIEVEMENTS(e),
                retries: 1,
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: t } = e;
                return t;
            })
};
