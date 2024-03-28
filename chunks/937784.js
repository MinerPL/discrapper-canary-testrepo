"use strict";
l.r(t), l.d(t, {
  shareClip: function() {
    return m
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("592125"),
  i = l("703558"),
  o = l("626135"),
  r = l("709054"),
  d = l("127654"),
  c = l("61994"),
  u = l("39604"),
  p = l("356659"),
  f = l("981631");
async function m(e, t) {
  let {
    channelId: m,
    editMetadata: v,
    analyticsLocations: h
  } = t, C = s.default.getChannel(m);
  if (null != C) try {
    var g;
    let t = await (0, u.exportClip)(e, v),
      l = null !== (g = e.name) && void 0 !== g ? g : (0, p.CLIP_NAME_TEMPLATE)(r.default.extractTimestamp(e.id)),
      a = (0, c.default)(l);
    (0, d.promptToUpload)([new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
      type: "video/mp4"
    })], C, i.DraftType.ChannelMessage, {
      filesMetadata: [{
        clip: e
      }]
    }), o.default.track(f.AnalyticEvents.CLIP_SHARED, {
      location_stack: h,
      guild_id: C.guild_id,
      channel_id: C.id,
      channel_type: C.type,
      application_id: e.applicationId,
      clip_id: e.id
    })
  } catch (e) {
    throw p.ClipsLogger.error(e), e
  } else(0, n.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([l.e("49237"), l.e("99387"), l.e("99617")]).then(l.bind(l, "502801"));
    return l => (0, a.jsx)(t, {
      ...l,
      clip: e,
      editMetadata: v
    })
  })
}