n.d(t, {
    Id: function () {
        return m;
    },
    Qm: function () {
        return p;
    },
    hR: function () {
        return _;
    }
});
var o = n(470079),
    i = n(892814),
    a = n(442837),
    l = n(895924),
    r = n(581364),
    c = n(823379),
    d = n(399654),
    u = n(844439);
let m = {
        '1181475143340539995': {
            imageOption: 'image',
            additionalOptions: [
                {
                    motion_prompt: [
                        {
                            text: '$dimi_deadpool_bye_bye_bye',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$simone_biles_floor_routine',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$fortnite_starlit_emote',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$apple_guy_running',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$ishowspeed_jumps_over_the_car',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$lil_yachty_stage_entrance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$anthony_edwards_score',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$beyonce_single_ladies',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$ronaldo_skill',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$gimme_head_top',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$hugo_hilaire_goofy_dance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$paqueta_dance',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$tauba_tauba',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$masbondit_suara_asli',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$rock_your_hips',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                },
                {
                    motion_prompt: [
                        {
                            text: '$jojo_siwa_guilty_pleasure',
                            type: 'text'
                        }
                    ],
                    background: [
                        {
                            text: 'From template',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        '991195178360635431': {
            imageOption: 'image',
            onlyAllowEdit: !0
        },
        '1091213298818613408': { imageOption: 'image' },
        '1029794689932611625': { imageOption: 'image' },
        '1238332854602043454': { imageOption: 'image' }
    },
    s = Object.keys(m);
function p(e) {
    let { contentType: t } = e;
    switch (t) {
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
    let { channelId: t } = e,
        { fetchState: n, recommendationsSections: m } = (function (e) {
            let { channelId: t } = e,
                n = i.I.CONTEXTUAL_IMAGE,
                l = o.useMemo(
                    () => ({
                        channelId: t,
                        location: n,
                        withCommands: !0
                    }),
                    [t, n]
                );
            o.useEffect(() => {
                (0, d.a)(l);
            }, [l]);
            let { fetchState: r, recommendationsSections: c } = (0, a.cj)([u.ZP], () => ({
                fetchState: u.ZP.getFetchState(l),
                recommendationsSections: u.ZP.getRecommendations(l)
            }));
            return {
                fetchState: r,
                recommendationsSections: c
            };
        })({ channelId: t });
    return {
        fetchState: n,
        imageRecCommandContexts: o.useMemo(() => {
            let e = m.length > 0 ? m[0].items : void 0;
            return void 0 === e
                ? []
                : s
                      .map((t) => {
                          var n, o;
                          let i;
                          let a = e.find((e) => {
                              var n;
                              return null != (i = null === (n = e.commands) || void 0 === n ? void 0 : n.find((e) => e.id === t));
                          });
                          if (null == a) return null;
                          let { application: c } = a;
                          if (null == i) return null;
                          let d = (0, r.Z8)({
                              rootCommand: i,
                              command: i,
                              applicationId: c.id
                          });
                          return {
                              command: {
                                  ...d,
                                  displayName: d.displayName
                                      .split(/[_ ]/)
                                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                                      .join(' ')
                              },
                              section: {
                                  type: l.Qi.APPLICATION,
                                  id: c.id,
                                  icon: c.icon,
                                  name: null !== (o = null == c ? void 0 : null === (n = c.bot) || void 0 === n ? void 0 : n.username) && void 0 !== o ? o : c.name,
                                  application: c
                              }
                          };
                      })
                      .filter(c.lm);
        }, [m])
    };
}
