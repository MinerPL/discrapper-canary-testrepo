n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(492423),
    i = n(774073);
function a(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        a = (0, i.ZP)(e);
    return a.shouldOpenGameProfile && null != n
        ? (i) => {
              i.stopPropagation(),
                  i.preventDefault(),
                  r.Z.openGameProfileModal({
                      ...e,
                      applicationId: n,
                      gameProfileModalChecks: a
                  }),
                  null == t || t();
          }
        : void 0;
}
