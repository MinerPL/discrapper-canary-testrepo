t.d(n, {
    Qm: function () {
        return E;
    },
    hR: function () {
        return _;
    },
    yJ: function () {
        return s;
    }
});
var i = t(470079),
    a = t(892814),
    l = t(442837),
    o = t(895924),
    c = t(581364),
    d = t(823379),
    r = t(399654),
    u = t(844439);
let s = {
        '1181475143340539995': {
            imageOption: 'image',
            overrideSendCommandInfo: {
                commandId: '1272485059353640963',
                imageOption: 'image'
            }
        },
        '991195178360635431': {
            imageOption: 'image',
            onlyAllowEdit: !0
        },
        '1091213298818613408': { imageOption: 'image' },
        '1029794689932611625': { imageOption: 'image' },
        '1238332854602043454': { imageOption: 'image' }
    },
    m = Object.keys(s);
function E(e) {
    let { contentType: n } = e;
    switch (n) {
        case 'image/jpeg':
        case 'image/jpg':
            return '.jpg';
        case 'image/png':
        case 'image/apng':
            return '.png';
        case 'image/webp':
            return '.webp';
        default:
            return '';
    }
}
function _(e) {
    let { channelId: n } = e,
        { fetchState: t, recommendationsSections: E } = (function (e) {
            let { channelId: n } = e,
                t = a.I.CONTEXTUAL_IMAGE,
                o = i.useMemo(
                    () => ({
                        channelId: n,
                        location: t,
                        withCommands: !0
                    }),
                    [n, t]
                );
            i.useEffect(() => {
                (0, r.a)(o);
            }, [o]);
            let { fetchState: c, recommendationsSections: d } = (0, l.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o)
            }));
            return {
                fetchState: c,
                recommendationsSections: d
            };
        })({ channelId: n });
    return {
        fetchState: t,
        imageRecCommandContexts: i.useMemo(() => {
            let e = E.length > 0 ? E[0].items : void 0;
            return void 0 === e
                ? []
                : m
                      .map((n) => {
                          var t, i, a, l;
                          let d, r;
                          let u = e.find((e) => {
                              var t;
                              return null != (d = null === (t = e.commands) || void 0 === t ? void 0 : t.find((e) => e.id === n));
                          });
                          if (null == u) return null;
                          let { application: m } = u;
                          if (null == d) return null;
                          let E = (0, c.Z8)({
                                  rootCommand: d,
                                  command: d,
                                  applicationId: m.id
                              }),
                              _ = null === (t = s[n].overrideSendCommandInfo) || void 0 === t ? void 0 : t.commandId;
                          if (null != _) {
                              let e = null != _ ? (null === (a = u.commands) || void 0 === a ? void 0 : a.find((e) => e.id === _)) : void 0;
                              null != e &&
                                  (r = (0, c.Z8)({
                                      rootCommand: e,
                                      command: e,
                                      applicationId: m.id
                                  }));
                          }
                          return {
                              command: {
                                  ...E,
                                  displayName: E.displayName
                                      .split(/[_ ]/)
                                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                      .join(' ')
                              },
                              overrideSendCommand: r,
                              section: {
                                  type: o.Qi.APPLICATION,
                                  id: m.id,
                                  icon: m.icon,
                                  name: null !== (l = null == m ? void 0 : null === (i = m.bot) || void 0 === i ? void 0 : i.username) && void 0 !== l ? l : m.name,
                                  application: m
                              }
                          };
                      })
                      .filter(d.lm);
        }, [E])
    };
}
