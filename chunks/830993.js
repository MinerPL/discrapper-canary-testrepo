"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("58540"),
  o = n("619915"),
  u = n("620662"),
  d = n("841784"),
  c = n("471445"),
  f = n("430824"),
  h = n("496675"),
  m = n("158776"),
  C = n("979651"),
  p = n("823379"),
  g = n("355363"),
  E = n("737592"),
  _ = n("561788"),
  S = n("135724"),
  I = n("543432"),
  N = n("981631"),
  T = n("689938"),
  A = n("254193");

function L(e) {
  var t, c;
  let {
    channel: f,
    guild: h,
    onAction: C,
    voiceStates: g,
    isChannelSelected: _,
    shouldShowSettingNudge: S
  } = e;
  ! function(e, t) {
    let n = a.useMemo(() => {
      var n;
      return null == t || t.length > 50 ? {} : {
        [e.getGuildId()]: null !== (n = t.map(e => {
          let {
            user: t
          } = e;
          return t.id
        })) && void 0 !== n ? n : []
      }
    }, [e, t]);
    (0, r.useSubscribeGuildMembers)(n)
  }(f, g);
  let I = (0, o.default)(f),
    L = new Map;
  I.forEach(e => {
    L.set(e.application.id, e)
  });
  let x = null !== (t = null == g ? void 0 : g.filter(p.isNotNullish)) && void 0 !== t ? t : [],
    R = e => t => [N.ActivityTypes.PLAYING, N.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === N.ActivityTypes.LISTENING,
    M = (0, s.useStateFromStores)([m.default], () => {
      let e = new Map;
      return x.forEach(t => {
        let n = m.default.findActivity(t.user.id, R(t));
        if (null != n && (0, d.default)(n)) {
          let t = null != n.application_id ? L.get(n.application_id) : null;
          null != t && null != n.application_id && e.set(n.application_id, {
            ...t,
            presenceActivity: n
          })
        }
      }), e
    }, [x, L], s.statesWillNeverBeEqual),
    y = (0, s.useStateFromStores)([m.default], () => {
      let e = {};
      return x.forEach(t => {
        let n = m.default.findActivity(t.user.id, R(t));
        if (null != n && !(0, d.default)(n)) {
          var l, a, s, i;
          let r = "".concat(null !== (a = n.application_id) && void 0 !== a ? a : "", ":").concat(null !== (s = null === (l = n.party) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : t.user.id),
            o = null !== (i = e[r]) && void 0 !== i ? i : {
              members: [],
              activity: n
            };
          o.members.push(t), !(0, u.default)(o.activity, N.ActivityFlags.JOIN) && (o.activity = n), e[r] = o
        }
      }), Object.values(e)
    }, [x], s.statesWillNeverBeEqual),
    O = Array.from(M.values()).map(e => ({
      members: x,
      activity: e.presenceActivity
    })),
    D = [...O, ...y];
  return 0 === D.length ? null : (0, l.jsxs)(i.Scroller, {
    className: A.container,
    children: [(0, l.jsx)(v, {
      channel: f,
      isChannelSelected: _,
      voiceStatesCount: null !== (c = null == g ? void 0 : g.length) && void 0 !== c ? c : 0
    }), (0, l.jsx)("div", {
      className: A.headerDivider
    }), D.map((e, t) => {
      let {
        members: n,
        activity: a
      } = e, s = a.application_id, i = null != s ? M.get(s) : void 0;
      return (0, l.jsx)(E.default, {
        presenceActivity: a,
        embeddedApp: i,
        channel: f,
        members: n,
        onAction: C
      }, t)
    }), S && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: A.headerDivider
      }), (0, l.jsx)("div", {
        className: A.settingNudgeText,
        children: (0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: T.default.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format({
            onClick: () => {
              (0, i.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("59500")]).then(n.bind(n, "241420"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  guild: h
                })
              })
            }
          })
        })
      })]
    })]
  })
}

function v(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: a
  } = e, i = (0, s.useStateFromStores)([h.default], () => !h.default.can(N.Permissions.CONNECT, t)), r = (0, s.useStateFromStores)([C.default], () => C.default.hasVideo(t.id)), o = (0, g.default)({
    channel: t,
    locked: i,
    video: r,
    selected: n
  }), u = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(t.guild_id));
  return null == (0, c.getChannelIconComponent)(t, u) ? null : (0, l.jsxs)("div", {
    className: A.popoutHeaderContainer,
    children: [(0, l.jsx)(_.default, {
      channel: t
    }), o ? (0, l.jsx)(S.default, {
      userCount: a,
      video: r,
      channel: t
    }) : (0, l.jsx)(I.default, {
      userCount: a
    })]
  })
}