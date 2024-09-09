_.d(E, {
    ZP: function () {
        return o;
    },
    k: function () {
        return L;
    }
}),
    _(47120);
var n = _(735250);
_(470079);
var t = _(913527),
    s = _.n(t),
    a = _(442837),
    M = _(481060),
    r = _(211739),
    S = _(92114),
    u = _(401412),
    N = _(777861),
    A = _(9156),
    i = _(621600),
    l = _(933557),
    O = _(981631),
    I = _(969943),
    T = _(689938);
let L = () => [
        {
            value: I.Oe.MINUTES_15,
            label: T.Z.Messages.MUTE_DURATION_15_MINUTES
        },
        {
            value: I.Oe.HOURS_1,
            label: T.Z.Messages.MUTE_DURATION_1_HOUR
        },
        {
            value: I.Oe.HOURS_3,
            label: T.Z.Messages.MUTE_DURATION_3_HOURS
        },
        {
            value: I.Oe.HOURS_8,
            label: T.Z.Messages.MUTE_DURATION_8_HOURS
        },
        {
            value: I.Oe.HOURS_24,
            label: T.Z.Messages.MUTE_DURATION_24_HOURS
        },
        {
            value: I.Oe.ALWAYS,
            label: T.Z.Messages.MUTE_DURATION_ALWAYS
        }
    ],
    c = (e) => {
        let E = e > 0 ? s()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: E
            }
        };
    };
function o(e, E) {
    let [_, t] = (0, a.Wu)([A.ZP], () => [A.ZP.isChannelMuted(e.guild_id, e.id), A.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        s = (0, N.U)(t),
        I = (0, l.ZP)(e, !0);
    function o(E) {
        E && e.type === O.d4z.GUILD_CATEGORY && (0, r.c4)(e.id), S.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: E }, i.UE.muted(E));
    }
    let C = T.Z.Messages.MUTE_CHANNEL_GENERIC,
        G = T.Z.Messages.UNMUTE_CHANNEL_GENERIC;
    switch (e.type) {
        case O.d4z.GUILD_CATEGORY:
            (C = T.Z.Messages.MUTE_CATEGORY), (G = T.Z.Messages.UNMUTE_CATEGORY);
            break;
        case O.d4z.GROUP_DM:
            (C = T.Z.Messages.MUTE_CONVERSATION), (G = T.Z.Messages.UNMUTE_CONVERSATION);
            break;
        case O.d4z.DM:
            (C = T.Z.Messages.MUTE_CHANNEL.format({ name: I })), (G = T.Z.Messages.UNMUTE_CHANNEL.format({ name: I }));
            break;
        default:
            (C = T.Z.Messages.MUTE_CHANNEL_GENERIC), (G = T.Z.Messages.UNMUTE_CHANNEL_GENERIC);
    }
    return _
        ? (0, n.jsx)(M.MenuItem, {
              id: 'unmute-channel',
              label: G,
              subtext: s,
              action: () => o(!1)
          })
        : (0, n.jsx)(M.MenuItem, {
              id: 'mute-channel',
              label: C,
              action: () => {
                  o(!0),
                      (0, u.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: L().map((_) => {
                  let { value: t, label: s } = _;
                  return (0, n.jsx)(
                      M.MenuItem,
                      {
                          id: ''.concat(t),
                          label: s,
                          action: () =>
                              (function (_) {
                                  e.type === O.d4z.GUILD_CATEGORY && (0, r.c4)(e.id);
                                  let n = c(_);
                                  S.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, i.ZB.Muted, E);
                              })(t)
                      },
                      t
                  );
              })
          });
}
