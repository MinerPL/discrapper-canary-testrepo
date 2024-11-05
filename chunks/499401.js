e.d(n, {
    Y: function () {
        return u;
    }
});
var r = e(388032);
function u(t) {
    let { application: n, username: e, usernameOnClick: u } = t;
    return null != n
        ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: e,
              applicationName: n.name,
              usernameOnClick: u
          })
        : r.intl.formatToParts(r.t.PUJtgo, {
              username: e,
              usernameOnClick: u
          });
}
