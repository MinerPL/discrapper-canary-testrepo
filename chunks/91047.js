l.d(t, {
    Pv: function () {
        return s;
    },
    _j: function () {
        return a;
    },
    nm: function () {
        return o;
    },
    xS: function () {
        return r;
    }
}),
    l(411104);
var i = l(735250);
l(470079);
var n = l(239091);
function s(e, t, s) {
    s.isGroupDM()
        ? (0, n.jW)(e, async () => {
              let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('79107'), l.e('92453'), l.e('60222')]).then(l.bind(l, 354589));
              return (l) =>
                  (0, i.jsx)(e, {
                      ...l,
                      user: t,
                      channel: s
                  });
          })
        : s.isDM()
          ? (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('79107'), l.e('59743'), l.e('92453'), l.e('22036'), l.e('56826'), l.e('95470')]).then(l.bind(l, 131404));
                return (l) =>
                    (0, i.jsx)(e, {
                        ...l,
                        user: t,
                        channel: s,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != s.guild_id
            ? (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('79107'), l.e('92453'), l.e('13125'), l.e('34879')]).then(l.bind(l, 757387));
                  return (l) =>
                      (0, i.jsx)(e, {
                          ...l,
                          user: t,
                          channel: s,
                          guildId: s.guild_id
                      });
              })
            : (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([l.e('79695'), l.e('69220'), l.e('50261')]).then(l.bind(l, 881351));
                  return (l) =>
                      (0, i.jsx)(e, {
                          ...l,
                          user: t
                      });
              });
}
function a(e, t) {
    let { user: s, channel: a, moderationAlertId: o, guildId: r, ...d } = t;
    if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let u = null != r ? r : null == a ? void 0 : a.getGuildId();
    null != u &&
        (0, n.jW)(e, async () => {
            let { default: e } = await Promise.all([l.e('13125'), l.e('33685')]).then(l.bind(l, 833737));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    user: s,
                    channelId: null == a ? void 0 : a.id,
                    guildId: u,
                    moderationAlertId: o,
                    ...d
                });
        });
}
function o(e, t) {
    let { user: s, guildId: a, analyticsLocations: o, onCloseContextMenu: r, isViewOnly: d } = t;
    (0, n.jW)(e, async () => {
        let { default: e } = await l.e('45130').then(l.bind(l, 246389));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                user: s,
                guildId: a,
                analyticsLocations: o,
                onCloseContextMenu: r,
                isViewOnly: d
            });
    });
}
function r(e, t, s) {
    null != s &&
        (0, n.jW)(e, async () => {
            let { default: e } = await l.e('50331').then(l.bind(l, 158195));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    guildId: s
                });
        });
}
