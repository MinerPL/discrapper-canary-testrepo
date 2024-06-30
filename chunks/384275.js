var i = n(544891), a = n(570140), s = n(981631);
t.Z = {
    fetch() {
        i.tn.get({
            url: s.ANM.OAUTH2_TOKENS,
            oldFormErrors: !0
        }).then(e => a.Z.dispatch({
            type: 'USER_AUTHORIZED_APPS_UPDATE',
            apps: e.body
        }), () => a.Z.dispatch({
            type: 'USER_AUTHORIZED_APPS_UPDATE',
            apps: []
        }));
    },
    delete(e) {
        i.tn.del({
            url: s.ANM.OAUTH2_TOKEN(e),
            oldFormErrors: !0
        }).then(() => {
            this.fetch();
        });
    }
};
