"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("798609"),
  d = n("685665"),
  c = n("175528"),
  E = n("274800"),
  f = n("574073"),
  _ = n("401642"),
  T = n("42203"),
  I = n("305961"),
  m = n("697218"),
  N = n("666897"),
  p = n("49111"),
  S = n("406291"),
  A = n("782340"),
  C = n("607602");
let h = {
    tag: "span",
    variant: "text-md/normal",
    color: "header-secondary"
  },
  g = {
    className: i("mention", C.mention)
  };

function M(e) {
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.Text, {
      ...h,
      color: "header-primary",
      children: e
    })
  })
}
var O = l.memo(function(e) {
  var t, n, a, i, O, R;
  let v, {
      channel: L,
      messageId: P,
      interactionData: D
    } = e,
    {
      analyticsLocations: x
    } = (0, d.default)(),
    {
      onCopy: y,
      copyRef: U
    } = (0, c.default)(L, null == D ? void 0 : null === (t = D.application_command) || void 0 === t ? void 0 : t.id),
    j = (0, r.useStateFromStores)([I.default], () => I.default.getGuild(L.guild_id), [L.guild_id]);
  if (l.useEffect(() => {
      (null == D || D.type === u.ApplicationCommandType.CHAT && void 0 === D.application_command) && E.fetchMessageInteractionData(L.id, P)
    }, [L.id, P, D]), null == D) v = (0, s.jsx)(o.Spinner, {
    type: o.Spinner.Type.SPINNING_CIRCLE,
    className: C.spinner
  });
  else {
    let e = [],
      t = Object.fromEntries((null !== (i = null === (n = D.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== i ? i : []).map(e => [e.name, e]));
    for (let n of null !== (O = D.options) && void 0 !== O ? O : []) e = e.concat(function e(t) {
      var n, a, i, r, d, c, E;
      let C, {
          option: O,
          channel: R,
          guild: v,
          messageId: L,
          parentOptionKey: P,
          commandOptionSpec: D,
          sourceAnalyticsLocations: x
        } = t,
        y = null != P ? P + " " + O.name : O.name;
      if (O.type === u.ApplicationCommandOptionType.SUB_COMMAND || O.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
        let t = [(0, s.jsxs)(l.Fragment, {
            children: [" ", (0, s.jsx)(o.Text, {
              ...h,
              children: null !== (a = null == D ? void 0 : D.name_localized) && void 0 !== a ? a : O.name
            })]
          }, y)],
          u = Object.fromEntries(null === (n = null !== (i = null == D ? void 0 : D.options) && void 0 !== i ? i : []) || void 0 === n ? void 0 : n.map(e => [e.name, e]));
        for (let n of null !== (r = O.options) && void 0 !== r ? r : []) t = t.concat(e({
          option: n,
          channel: R,
          guild: v,
          messageId: L,
          parentOptionKey: y,
          commandOptionSpec: u[n.name],
          sourceAnalyticsLocations: x
        }));
        return t
      }
      let U = O.value;
      if (null != O.value) switch (O.type) {
        case u.ApplicationCommandOptionType.USER: {
          let e = O.value.toString(),
            t = m.default.getUser(e);
          if (null != t) {
            let e = (0, f.getUserAuthor)(t, R);
            C = (0, s.jsxs)(N.default, {
              ...g,
              onClick: () => (0, _.openUserProfileModal)({
                userId: t.id,
                guildId: R.guild_id,
                channelId: R.id,
                messageId: L,
                sourceAnalyticsLocations: x,
                analyticsLocation: {
                  section: p.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                }
              }),
              children: [S.MENTION_SENTINEL, e.nick]
            })
          }
          break
        }
        case u.ApplicationCommandOptionType.CHANNEL: {
          let e = O.value.toString(),
            t = T.default.getChannel(e);
          null != t && (C = (0, s.jsxs)(N.default, {
            ...g,
            children: [S.CHANNEL_SENTINEL, t.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.ROLE: {
          let e = O.value.toString(),
            t = null != v ? I.default.getRole(v.id, e) : void 0;
          null != t && (C = (0, s.jsxs)(N.default, {
            ...g,
            children: [S.MENTION_SENTINEL, t.name]
          }));
          break
        }
        case u.ApplicationCommandOptionType.MENTIONABLE: {
          let e = O.value.toString(),
            t = null != v ? I.default.getRole(v.id, e) : void 0;
          if (null != t) C = (0, s.jsxs)(N.default, {
            children: [S.MENTION_SENTINEL, t.name]
          });
          else {
            let t = m.default.getUser(e);
            if (null != t) {
              let e = (0, f.getUserAuthor)(t, R);
              C = (0, s.jsxs)(N.default, {
                ...g,
                onClick: () => (0, _.openUserProfileModal)({
                  userId: t.id,
                  guildId: R.guild_id,
                  analyticsLocation: {
                    section: p.AnalyticsSections.CHANNEL_TEXT_AREA_AUTOCOMPLETE
                  }
                }),
                children: [S.MENTION_SENTINEL, e.nick]
              })
            }
          }
          break
        }
        case u.ApplicationCommandOptionType.ATTACHMENT:
          C = M(A.default.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
          break;
        default: {
          let e = null == D ? void 0 : null === (d = D.choices) || void 0 === d ? void 0 : d.find(e => e.value === O.value);
          null != e && (U = null !== (c = e.name_localized) && void 0 !== c ? c : e.name)
        }
      }
      return null == C && (C = M(null == U ? void 0 : U.toString())), [(0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsxs)(o.Text, {
          ...h,
          children: [" ", null !== (E = null == D ? void 0 : D.name_localized) && void 0 !== E ? E : O.name, ": "]
        }), C]
      }, y)]
    }({
      option: n,
      channel: L,
      guild: j,
      messageId: P,
      parentOptionKey: null,
      commandOptionSpec: t[n.name],
      sourceAnalyticsLocations: x
    }));
    v = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(o.Text, {
        ...h,
        children: ["/", null !== (R = null === (a = D.application_command) || void 0 === a ? void 0 : a.name_localized) && void 0 !== R ? R : D.name]
      }), e]
    })
  }
  return (0, s.jsxs)("div", {
    className: C.container,
    onCopy: e => {
      var t, n, s;
      let l = null !== (s = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "";
      l.startsWith("/") && l.endsWith("\n") && y(e, D)
    },
    children: [(0, s.jsx)("div", {
      className: C.tooltip,
      ref: U,
      children: v
    }), (0, s.jsx)("div", {
      className: C.tooltipPointer
    })]
  })
})