var i = n(544891),
    a = n(570140),
    s = n(981631);
t.Z = {
    fetchRegions(e) {
        i.tn
            .get({
                url: s.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0
            })
            .then(
                (t) =>
                    a.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: t.body,
                        guildId: e
                    }),
                () =>
                    a.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: [],
                        guildId: e
                    })
            );
    },
    changeCallRegion(e, t) {
        i.tn.patch({
            url: s.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0
        });
    }
};
