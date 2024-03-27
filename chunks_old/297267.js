"use strict";
n.r(t), n.d(t, {
  openCreateGuildModal: function() {
    return I
  },
  updateCreateGuildModal: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var r = n("77078"),
  s = n("42963"),
  a = n("599110"),
  i = n("169626"),
  o = n("243338"),
  u = n("49111"),
  c = n("149806");

function d(e, t, n, r) {
  return (0, l.jsx)(i.default, {
    onSuccess: t => {
      s.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.SUCCESS), e.onClose(), null == r || r(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case o.CreateGuildSlideTypes.GUILD_TEMPLATES:
          s.default.flowStepOrStart(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_TEMPLATES), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
          s.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_CREATE), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.CREATION_INTENT:
          a.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case o.CreateGuildSlideTypes.JOIN_GUILD:
          s.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.JOIN_GUILD), a.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: !0,
    ...e
  })
}
let I = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: l
    } = e;
    (0, r.openModal)(e => d(e, t, n, l), {
      modalKey: o.CREATE_GUILD_MODAL_KEY
    })
  },
  p = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, r.updateModal)(o.CREATE_GUILD_MODAL_KEY, e => d(e, t, n))
  }