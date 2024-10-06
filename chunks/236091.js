var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(692547),
    o = n(481060),
    c = n(358221),
    u = n(594190),
    d = n(199902),
    h = n(924557),
    p = n(435064),
    m = n(354459),
    _ = n(689938),
    f = n(162910);
t.Z = (e) => {
    let { className: t, channelId: n } = e,
        s = (0, h.Go)(),
        E = p.Z.isDecoupledGameClippingEnabled();
    return (0, l.e7)([d.Z, c.Z, p.Z, u.ZP], () => {
        var e;
        if (null == n) return !1;
        let t = d.Z.getCurrentUserActiveStream(),
            i = null === (e = u.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
        return (null != t && !!p.Z.getSettings().clipsEnabled && !!s) || (null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!E) || c.Z.getParticipants(n).some((e) => e.type === m.fO.USER && p.Z.isClipsEnabledForUser(e.user.id));
    })
        ? (0, i.jsxs)(o.TooltipContainer, {
              text: _.Z.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
              color: o.TooltipColors.GREY,
              className: a()(t, f.clipsEnabledIndicator),
              children: [
                  (0, i.jsx)(o.IconBadge, {
                      icon: o.ClipsIcon,
                      shape: o.BadgeShapes.ROUND_LEFT,
                      color: r.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: f.clipBadgeIcon
                  }),
                  (0, i.jsx)(o.TextBadge, {
                      text: _.Z.Messages.CLIPS_ENABLED_BADGE,
                      shape: o.BadgeShapes.ROUND_RIGHT,
                      color: r.Z.unsafe_rawColors.PRIMARY_500.css,
                      className: f.clipBadgeText
                  })
              ]
          })
        : null;
};
