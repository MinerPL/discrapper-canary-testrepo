n.d(t, {
    A: function () {
        return o;
    },
    S: function () {
        return s;
    }
});
var r = n(663993),
    i = n(618541),
    a = n(981631);
function s() {
    return (0, r.wE)({
        createPromise: () => n.e('661').then(n.t.bind(n, 491668, 23)),
        webpackId: 491668
    }).then((e) => {
        let { default: t } = e;
        return t;
    });
}
function o() {
    let e = i.Z.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({ authorization: a.Ai1.BRAINTREE.KEY })
                  .then((e) => l(e))
                  .catch(() => null)
          )
        : l(e);
}
function l(e) {
    return s().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null)
    );
}
