"use strict";
a.r(t), a.d(t, {
  default: function() {
    return j
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("392711"),
  i = a.n(s),
  d = a("442837"),
  r = a("481060"),
  u = a("287734"),
  o = a("872810"),
  c = a("557135"),
  f = a("102172"),
  m = a("718805"),
  h = a("871118"),
  g = a("66999"),
  E = a("131704"),
  _ = a("199902"),
  I = a("314897"),
  x = a("496675"),
  S = a("944486"),
  v = a("169278"),
  C = a("51144"),
  N = a("679184"),
  p = a("981631"),
  T = a("37007");

function A(e) {
  var t;
  let {
    channel: a,
    voiceStates: n,
    showPlaceholder: s
  } = e, c = (0, d.useStateFromStores)([_.default], () => _.default.getAllApplicationStreamsForChannel(a.id)[0]), g = (0, d.useStateFromStores)([_.default], () => null != c ? _.default.getActiveStreamForApplicationStream(c) : null), E = (0, d.useStateFromStores)([I.default], () => I.default.getId()), [x, S] = (0, f.useCanWatchStream)(a);
  if (null == c) return null;
  let N = i().chain(n).map("member").find(["userId", c.ownerId]).value(),
    A = i().chain(n).map("user").find(["id", c.ownerId]).value(),
    j = null !== (t = null == N ? void 0 : N.nick) && void 0 !== t ? t : C.default.getName(A),
    M = null != g && null != c && g.state !== p.ApplicationStreamStates.ENDED && g.ownerId === c.ownerId;
  return (0, l.jsxs)(r.Clickable, {
    onClick: () => {
      u.default.selectVoiceChannel(a.id), !M && (0, o.watchStreamAndTransitionToStream)(c)
    },
    className: T.previewContainer,
    children: [s ? (0, l.jsx)(h.DefaultFallback, {
      className: T.previewImage,
      isLoading: !0
    }) : (0, l.jsx)(h.default, {
      className: T.previewImage,
      stream: c
    }), x ? (0, l.jsx)("div", {
      className: T.previewHover,
      children: (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: T.previewButton,
        children: (0, m.default)(c, g, E, S)
      })
    }) : null, null != j ? (0, l.jsxs)("div", {
      className: T.previewName,
      children: [(0, l.jsx)(v.default, {
        width: 18,
        height: 18,
        className: T.icon
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j
      })]
    }) : null]
  })
}

function j(e) {
  var t;
  let {
    guildId: a,
    channel: s,
    voiceStates: r,
    trackChannelClick: u,
    showPreview: o
  } = e, f = r.map(e => e.user), {
    needSubscriptionToAccess: m
  } = (0, g.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), h = (0, d.useStateFromStores)([x.default], () => !x.default.can(p.Permissions.CONNECT, s)), _ = n.useRef(null), I = function(e) {
    let t = n.useRef(null),
      [a, l] = n.useState(!1);
    return n.useEffect(() => {
      t.current = new IntersectionObserver(e => {
        let [t] = e;
        return l(t.isIntersecting)
      })
    }, []), n.useEffect(() => {
      var a;
      if (null != e.current) return null === (a = t.current) || void 0 === a || a.observe(e.current), () => {
        var e;
        null === (e = t.current) || void 0 === e || e.disconnect()
      }
    }, [e]), a
  }(_), v = n.useRef(!1);
  n.useEffect(() => {
    I && (v.current = !0)
  }, [I]);
  let T = i().map(r, e => {
    var t, a;
    return null !== (a = null === (t = e.member) || void 0 === t ? void 0 : t.nick) && void 0 !== a ? a : C.default.getName(e.user)
  }).join(", ");
  return (0, l.jsx)(N.ActiveChannelBase, {
    ref: _,
    guildId: a,
    channel: s,
    text: T,
    usersInSummary: f,
    onChannelClick: () => {
      if (!(0, E.isGuildVocalChannelType)(s.type)) return;
      let e = S.default.getVoiceChannelId(),
        t = !x.default.can(p.Permissions.CONNECT, s);
      u(s), c.default.handleVoiceConnect({
        channel: s,
        locked: t,
        connected: e === s.id,
        needSubscriptionToAccess: m
      })
    },
    channelIconOptions: {
      locked: h
    },
    children: o && (0, l.jsx)(A, {
      channel: s,
      voiceStates: r,
      showPlaceholder: !v.current
    })
  })
}