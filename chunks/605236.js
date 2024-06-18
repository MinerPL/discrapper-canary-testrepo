"use strict";
n.d(t, {
  EW: function() {
    return m
  },
  kk: function() {
    return A
  },
  un: function() {
    return f
  },
  wE: function() {
    return N
  }
}), n(47120);
var i = n(442837),
  r = n(704215),
  s = n(561746),
  o = n(675478),
  a = n(581883),
  l = n(626135),
  u = n(915486),
  _ = n(261376),
  d = n(883904),
  c = n(68985),
  E = n(952193),
  I = n(211644),
  T = n(57207),
  h = n(921944),
  S = n(981631);

function f(e) {
  var t;
  if ((0, T.B)(e)) return !0;
  let n = null === (t = a.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
  return null != n && (0, u.jl)(n, e)
}

function N(e) {
  return (0, i.e7)([a.Z], () => f(e))
}

function A(e, t, n) {
  if (!((0, I.cI)(e) || c.Z.hasUserHitDCCap(e) || function(e) {
      let t = E.$.has(e),
        {
          enabled: n
        } = s.Z.getCurrentConfig({
          location: "isUserSubjectToDCFHoldout"
        }, {
          autoTrackExposure: !t
        });
      return n && !t
    }(e)) && !n)(0, I.f0)({
    content: e,
    groupName: null == t ? void 0 : t.groupName,
    onAdded: () => {
      var n;
      let [i, s] = (0, I.Aq)();
      (0, d.cm)(e), l.default.track(S.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.z[e],
        content_count: i,
        fatigable_content_count: s,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: _.O.has(e),
        guild_id: null == t ? void 0 : t.guildId
      }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
    }
  })
}
async function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ((0, I.cI)(e) || t.forceTrack) && function(e, t) {
    var n;
    let [i] = (0, I.Aq)(), s = c.Z.getRenderedAtTimestamp(e), o = new Date, a = null == s ? null : o.getTime() - s;
    l.default.track(S.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
      type: r.z[e],
      action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : h.L.UNKNOWN,
      content_count: i,
      group_name: null == t ? void 0 : t.groupName,
      bypass_fatigue: _.O.has(e),
      guild_id: null == t ? void 0 : t.guildId,
      shown_duration: a
    })
  }(e, t), (0, d.Vr)(e), await (0, o.nm)(e);
  let n = !c.Z.hasUserHitDCCap();
  (0, I.gE)({
    content: e,
    groupName: null == t ? void 0 : t.groupName
  }, n)
}