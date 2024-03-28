"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("653041"), a("390547"), a("733860"), a("47120");
var r = a("735250"),
  n = a("470079"),
  i = a("392711"),
  l = a.n(i),
  s = a("442837"),
  o = a("481060"),
  d = a("304680"),
  u = a("503089"),
  c = a("493544"),
  m = a("210887"),
  f = a("592125"),
  p = a("271383"),
  h = a("19780"),
  g = a("226961"),
  C = a("594174"),
  S = a("285952"),
  v = a("51144"),
  y = a("189648"),
  R = a("775194"),
  D = a("499848"),
  E = a("724392"),
  T = a("442580"),
  F = a("770800"),
  x = a("981631"),
  N = a("65154"),
  b = a("689938"),
  j = a("299552");
let P = (e, t, a) => (0, r.jsx)(S.default, {
    align: S.default.Align.CENTER,
    children: (0, r.jsx)(S.default.Child, {
      children: (0, r.jsxs)(S.default, {
        align: S.default.Align.CENTER,
        children: [(0, r.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(a, 24),
          "aria-label": e.username,
          className: j.avatar
        }), (0, r.jsx)("span", {
          className: j.username,
          children: null != t ? t : v.default.getName(e)
        })]
      })
    })
  }),
  I = e => (0, r.jsx)(S.default, {
    align: S.default.Align.CENTER,
    children: (0, r.jsx)(S.default.Child, {
      children: (0, r.jsx)(S.default, {
        align: S.default.Align.CENTER,
        children: (0, r.jsx)("span", {
          className: j.username,
          children: e
        })
      })
    })
  });

function B(e, t, a, r, n) {
  let i = [];
  if (null == t) return i;
  let {
    transport: s,
    rtp: {
      inbound: o,
      outbound: u
    },
    camera: m
  } = t;
  return i.push({
    section: c.SectionTypes.HEADER,
    label: b.default.Messages.RTC_DEBUG_CONTEXT.format({
      context: e
    })
  }), null != s && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.TRANSPORT, a),
    label: b.default.Messages.RTC_DEBUG_TRANSPORT,
    element: F.default,
    elementProps: {
      context: e,
      index: a
    }
  }), null != u && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.OUTBOUND, a),
    label: b.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
    element: E.default,
    elementProps: {
      context: e,
      index: a
    }
  }), null != m && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.CAMERA, a),
    label: b.default.Messages.RTC_DEBUG_CAMERA,
    element: y.default,
    elementProps: {
      context: e,
      index: a,
      camera: m
    }
  }), null != o && !l().isEmpty(o) && (i.push({
    section: c.SectionTypes.HEADER,
    label: b.default.Messages.RTC_DEBUG_RTP_INBOUND
  }), Object.keys(o).forEach(t => {
    let l = C.default.getUser(t),
      s = p.default.getNick(n, t),
      o = (0, g.keySection)(e, t, a);
    i.push({
      section: o,
      label: null != l ? P(l, s, n) : I(null != s ? s : t),
      ariaLabel: null != l ? l.tag : t,
      onClick: () => {
        d.setSection(o)
      },
      element: D.default,
      elementProps: {
        context: e,
        index: a,
        videoStreams: r
      }
    })
  })), i
}

function A() {
  var e, t;
  let {
    defaultStats: a,
    streamStats: i
  } = (0, s.useStateFromStores)([g.default], () => ({
    defaultStats: g.default.getAllStats(N.MediaEngineContextTypes.DEFAULT),
    streamStats: g.default.getAllStats(N.MediaEngineContextTypes.STREAM)
  }), [], s.statesWillNeverBeEqual), l = (0, s.useStateFromStores)([h.default, f.default], () => f.default.getChannel(h.default.getChannelId())), p = null === (e = a.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, C = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, S = (0, s.useStateFromStores)([m.default], () => m.default.theme), v = (0, s.useStateFromStores)([m.default], () => m.default.darkSidebar ? x.ThemeTypes.DARK : void 0), y = (0, s.useStateFromStores)([g.default], () => g.default.getSection()), D = (0, s.useStateFromStores)([g.default], () => g.default.getVideoStreams()), E = function(e) {
    let {
      defaultStats: t,
      streamStats: a,
      videoStreams: n,
      screenshare: i,
      clips: l,
      channel: s,
      connectionState: d
    } = e, u = t.flatMap((e, t) => B(N.MediaEngineContextTypes.DEFAULT, e, t, n, null == s ? void 0 : s.getGuildId())), m = a.flatMap((e, t) => B(N.MediaEngineContextTypes.STREAM, e, t, n, null == s ? void 0 : s.getGuildId())), f = [], p = [], h = {
      section: c.SectionTypes.DIVIDER
    };
    null != i && (f.push(h), f.push({
      section: x.RTCDebugSections.SCREENSHARE,
      label: b.default.Messages.RTC_DEBUG_SCREENSHARE,
      element: T.default,
      elementProps: {
        screenshare: i
      }
    })), null != l && (p.push(h), p.push({
      section: x.RTCDebugSections.CLIPS,
      label: b.default.Messages.RTC_DEBUG_CLIPS,
      element: R.default,
      elementProps: {
        clips: l
      }
    })), m.length > 0 && m.unshift(h);
    let g = null != s ? [{
      section: c.SectionTypes.CUSTOM,
      label: "Channel Name",
      element: () => (0, r.jsx)(o.Heading, {
        className: j.channelName,
        variant: "heading-lg/semibold",
        children: s.name
      })
    }] : [];
    return [...g, {
      section: c.SectionTypes.CUSTOM,
      label: "Connection State",
      element: () => (0, r.jsx)(o.Heading, {
        className: j.channelName,
        variant: "heading-md/normal",
        children: d === x.RTCConnectionStates.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...u, ...m, ...f, ...p]
  }({
    defaultStats: a,
    streamStats: i,
    videoStreams: D,
    screenshare: p,
    clips: C,
    channel: l,
    connectionState: (0, s.useStateFromStores)([h.default], () => h.default.getState())
  });
  return n.useEffect(() => () => {
    d.close()
  }, []), (0, r.jsx)(u.default, {
    theme: S,
    sidebarTheme: v,
    section: y,
    onSetSection: d.setSection,
    sections: E
  })
}