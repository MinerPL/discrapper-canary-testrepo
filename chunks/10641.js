"use strict";
n.r(t), n.d(t, {
  isDismissibleContentDismissed: function() {
    return v
  },
  useIsDismissibleContentDismissed: function() {
    return S
  },
  requestMarkDismissibleContentAsShown: function() {
    return T
  },
  markDismissibleContentAsDismissed: function() {
    return I
  }
}), n("222007");
var i = n("446674"),
  s = n("151426"),
  r = n("848415"),
  a = n("193302"),
  o = n("872173"),
  l = n("374363"),
  u = n("599110"),
  d = n("674268"),
  c = n("495226"),
  f = n("585653"),
  _ = n("989691"),
  h = n("127746"),
  g = n("862853"),
  m = n("846614"),
  E = n("994428"),
  p = n("49111");

function v(e) {
  var t;
  if ((0, m.disableNewUserDismissibleContent)(e)) return !0;
  let n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
  return null != n && (0, d.hasBit)(n, e)
}

function S(e) {
  return (0, i.useStateFromStores)([l.default], () => v(e))
}

function T(e, t, n) {
  if ((0, g.isContentShown)(e) || r.default.isAnyActive() || _.default.hasUserHitDCCap(e)) return;
  let i = function(e) {
    let t = h.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
      {
        enabled: n
      } = a.default.getCurrentConfig({
        location: "isUserSubjectToDCFHoldout"
      }, {
        autoTrackExposure: !t
      });
    return n && !t
  }(e);
  if (!i) !n && (0, g.addCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName,
    onAdded: () => {
      var n;
      let [i, r] = (0, g.getCurrentlyShownCounts)();
      (0, f.handleDCShownToUser)(e), u.default.track(p.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
        type: s.DismissibleContent[e],
        content_count: i,
        fatigable_content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
        guild_id: null == t ? void 0 : t.guildId
      }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
    }
  })
}
async function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  ((0, g.isContentShown)(e) || t.forceTrack) && function(e, t) {
    var n;
    let [i] = (0, g.getCurrentlyShownCounts)(), r = _.default.getRenderedAtTimestamp(e), a = new Date, o = null == r ? null : a.getTime() - r;
    u.default.track(p.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
      type: s.DismissibleContent[e],
      action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : E.ContentDismissActionType.UNKNOWN,
      content_count: i,
      group_name: null == t ? void 0 : t.groupName,
      bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
      guild_id: null == t ? void 0 : t.guildId,
      shown_duration: o
    })
  }(e, t), (0, f.handleDCDismissed)(e), await (0, o.addDismissedContent)(e);
  let n = !_.default.hasUserHitDCCap();
  (0, g.removeCandidateContent)({
    content: e,
    groupName: null == t ? void 0 : t.groupName
  }, n)
}