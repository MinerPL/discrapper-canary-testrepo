n.d(t, {
    o: function () {
        return o;
    }
});
var i = n(470079),
    l = n(442837),
    r = n(115130),
    a = n(701488);
let o = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, l.cj)(
            [r.Z],
            () => ({
                isEnabled: r.Z.getIsEnabled(),
                lastUsedObject: r.Z.getLastUsedObject()
            }),
            []
        ),
        n = (0, l.Wu)([r.Z], () => r.Z.getDeveloperShelfItems(), []);
    return i.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: {
                              ...a.wT,
                              ...e.embeddedActivityConfig,
                              application_id: e.id
                          }
                      }))
                      .sort((e, n) => {
                          let i = t[e.application.id],
                              l = t[n.application.id];
                          return null == i ? 1 : null == l ? -1 : l - i;
                      })
                : [],
        [n, e, t]
    );
};
