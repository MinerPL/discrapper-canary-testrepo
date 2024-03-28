"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("653041");
var s = n("735250"),
  a = n("470079"),
  l = n("913527"),
  i = n.n(l),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("135938"),
  c = n("900164"),
  f = n("554838"),
  E = n("493892"),
  _ = n("37772"),
  T = n("695346"),
  m = n("314897"),
  I = n("496675"),
  p = n("594174"),
  h = n("132338"),
  N = n("55935"),
  S = n("655354"),
  C = n("809780"),
  A = n("981631"),
  g = n("689938"),
  M = n("501247");
let R = {
  left: 4,
  right: -12
};

function O(e) {
  var t;
  let {
    channel: n,
    message: l,
    compact: i,
    isGroupStart: o,
    treatSpam: d,
    gotoChannel: c
  } = e, f = (0, r.useListItem)(null !== (t = l.id) && void 0 !== t ? t : ""), E = a.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, s.jsx)(u.FocusRing, {
    offset: R,
    children: (0, s.jsxs)("div", {
      className: M.messageContainer,
      onKeyDown: E,
      ...f,
      children: [(0, s.jsx)(S.default, {
        className: M.jumpButton,
        onJump: e => c(e, l.id)
      }), (0, s.jsx)(_.default, {
        id: l.id,
        message: l,
        channel: n,
        className: M.message,
        compact: i,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: E,
        treatSpam: d
      })]
    }, l.id)
  })
}

function v(e) {
  var t, n;
  let {
    channel: a,
    channelRecord: l,
    gotoChannel: r
  } = e, {
    enabled: _
  } = d.default.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), S = T.MessageDisplayCompact.useSetting(), R = (0, o.useStateFromStores)([I.default], () => I.default.can(A.Permissions.CREATE_INSTANT_INVITE, l)), v = (0, E.isSpamSupported)(l), L = !1, x = 0 === a.messages.length || i()(a.messages[0].timestamp).isSame(i()(), "day"), D = null !== (n = null === (t = p.default.getUser(m.default.getId())) || void 0 === t ? void 0 : t.hasFlag(A.UserFlags.SPAMMER)) && void 0 !== n && n, P = [];
  if (!a.collapsed) {
    let e = null,
      t = null,
      n = a.messages.slice(0, C.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, R)) {
        if (!x && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, N.dateFormat)(n.timestamp, "LL");
          P.push((0, s.jsx)(h.default, {
            className: M.divider,
            children: t
          }, t)), e = i()(n.timestamp)
        }
        let a = null == t || (0, f.default)(l, t, n);
        t = n, L = L || (0, E.isSpam)(n), P.push((0, s.jsx)(O, {
          channel: l,
          message: n,
          compact: S,
          isGroupStart: a,
          treatSpam: !D && _ && (0, E.isSpam)(n) && v,
          gotoChannel: r
        }, n.id))
      }
    }), a.messages.length >= C.MAX_SHOWN_MESSAGES && P.push((0, s.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [g.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === P.length && (P = [(0, s.jsx)(u.Spinner, {}, "spinner")])
  }
  return L && v && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, s.jsx)("div", {
    className: M.messages,
    children: P
  })
}