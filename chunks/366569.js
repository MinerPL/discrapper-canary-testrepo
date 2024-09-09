r.d(t, {
    i: function () {
        return a;
    }
});
var n = r(573736);
function a(e, t, r = () => {}) {
    let a;
    try {
        a = e();
    } catch (e) {
        throw (t(e), r(), e);
    }
    return (function (e, t, r) {
        return (0, n.J8)(e)
            ? e.then(
                  (e) => (r(), e),
                  (e) => {
                      throw (t(e), r(), e);
                  }
              )
            : (r(), e);
    })(a, t, r);
}
