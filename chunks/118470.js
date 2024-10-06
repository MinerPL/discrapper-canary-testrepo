n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(812206),
    l = n(82950),
    o = n(434404),
    c = n(106976),
    d = n(270144),
    u = n(981631),
    _ = n(689938),
    E = n(466389);
function h(e) {
    let t,
        { guild: n } = e,
        h = (0, d.h6)(n),
        m = () => (0, c.sB)(n.id),
        I = a.useMemo(() => new Set(h.map((e) => e.applicationId)), [h]),
        p = (0, s.Wu)(
            [r.Z],
            () => {
                let e = [];
                for (let t of I) {
                    let n = r.Z.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [I]
        );
    return 0 === p.length
        ? null
        : ((t =
              1 === p.length
                  ? _.Z.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({ a: p[0].name })
                  : 2 === p.length
                    ? _.Z.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
                          a: p[0].name,
                          b: p[1].name
                      })
                    : 3 === p.length
                      ? _.Z.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
                            a: p[0].name,
                            b: p[1].name,
                            c: p[2].name
                        })
                      : _.Z.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT),
          (0, i.jsx)(l.Z, {
              guild: n,
              onDismissed: m,
              message: t,
              type: u.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: E,
              onClick: () => {
                  m(), o.Z.open(n.id, u.pNK.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: _.Z.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
          }));
}
