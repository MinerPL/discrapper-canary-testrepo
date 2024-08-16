n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(812206),
    i = n(592125),
    a = n(594174),
    s = n(585483),
    o = n(337682),
    l = n(566620),
    u = n(307091),
    c = n(574952),
    d = n(275920),
    _ = n(981631);
async function E(e) {
    var t;
    let { targetApplicationId: n, locationObject: E, channelId: f, analyticsLocations: h, componentId: p } = e,
        m = (0, c.Z)(),
        I = a.default.getCurrentUser();
    if (null == n) return !1;
    let T = null !== (t = r.Z.getApplication(n)) && void 0 !== t ? t : await (0, u.Z)(n, f);
    return null == f
        ? (s.S.dispatch(_.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1)
        : null != i.Z.getChannel(f) &&
              null != I &&
              null != T &&
              ((0, d.Z)({
                  type: _.q5t.LAUNCH,
                  userId: I.id,
                  applicationId: T.id,
                  locationObject: E,
                  analyticsLocations: h
              }),
              o.tZ(T.id),
              await (0, l.af)({
                  channelId: f,
                  applicationId: T.id,
                  isStart: !0,
                  embeddedActivitiesManager: m,
                  componentId: p
              }));
}
