var i = n(544891),
  s = n(570140),
  a = n(981631);
t.Z = {
  fetch() {
i.tn.get({
  url: a.ANM.OAUTH2_TOKENS,
  oldFormErrors: !0
}).then(e => s.Z.dispatch({
  type: 'USER_AUTHORIZED_APPS_UPDATE',
  apps: e.body
}), () => s.Z.dispatch({
  type: 'USER_AUTHORIZED_APPS_UPDATE',
  apps: []
}));
  },
  delete(e) {
i.tn.del({
  url: a.ANM.OAUTH2_TOKEN(e),
  oldFormErrors: !0
}).then(() => {
  this.fetch();
});
  }
};