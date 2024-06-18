"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(928518),
  o = n(776862),
  a = n(626135),
  l = n(981631);

function u(e, t) {
  let u = null != t ? t : "".concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
  null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
  a.default.track(l.rMx.OPEN_MODAL, {
    type: u,
    location: e.analyticsSourceLocation
  });
  let {
    openInPopoutEnabled: _,
    ...d
  } = e, c = s.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != _ && _;
  c && (0, o.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
  let E = c ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("89675")]).then(n.bind(n, 146747));
    return t => (0, i.jsx)(e, {
      ...d,
      ...t
    })
  }, {
    onCloseCallback: () => {
      a.default.track(l.rMx.MODAL_DISMISSED, {
        type: u,
        location: e.analyticsSourceLocation
      })
    },
    contextKey: E
  })
}