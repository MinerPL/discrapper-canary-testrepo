n.d(t, {
  Z: function() {
return k;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(410575),
  l = n(727637),
  u = n(980591),
  c = n(58540),
  d = n(603113),
  _ = n(420660),
  E = n(100527),
  f = n(906732),
  h = n(812206),
  p = n(835473),
  m = n(199902),
  I = n(271383),
  T = n(430824),
  g = n(158776),
  S = n(699516),
  A = n(626135),
  N = n(785717),
  v = n(621853),
  O = n(505737),
  R = n(318661),
  C = n(502762),
  y = n(192133),
  D = n(240328),
  L = n(436478),
  b = n(131640),
  M = n(664202),
  P = n(228168),
  U = n(981631),
  w = n(616922),
  x = n(452189);

function G(e) {
  e.stopPropagation();
}

function k(e) {
  let {
user: t,
guildId: n,
channelId: k,
messageId: B,
roleId: F,
setNote: V,
closePopout: H,
setPopoutRef: Z,
disableUserProfileLink: Y = __OVERLAY__,
analyticsParams: j = {},
newAnalyticsLocations: W = []
  } = e, K = i.useRef(null), z = (0, R.ZP)(t.id, n), q = (0, l.Z)(K), Q = (0, a.e7)([v.Z], () => {
var e;
return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  }), {
analyticsLocations: X
  } = (0, f.ZP)([
...W,
E.Z.PROFILE_POPOUT
  ]), $ = (0, N.ZB)({
layout: 'POPOUT',
userId: t.id,
guildId: n,
channelId: k,
messageId: B,
roleId: F
  }), J = (0, a.e7)([T.Z], () => null != n ? T.Z.getGuild(n) : null), ee = (0, a.e7)([I.ZP], () => null != n ? I.ZP.getMember(n, t.id) : null), et = t.isNonUserBot(), {
activity: en,
customStatusActivity: er,
status: ei,
isMobile: ea,
isApplicationStreaming: es
  } = (0, a.cj)([
m.Z,
g.Z
  ], () => {
let e = null != m.Z.getAnyStreamForUser(t.id);
return {
  activity: g.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === U.IIU.PLAYING : n !== U.IIU.CUSTOM_STATUS;
  }),
  customStatusActivity: g.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === U.IIU.CUSTOM_STATUS;
  }),
  status: et ? null : g.Z.getStatus(t.id),
  isMobile: g.Z.isMobileOnline(t.id),
  isApplicationStreaming: e
};
  }), [eo, el] = i.useState(!1), eu = i.useMemo(() => null != n ? {
[n]: [t.id]
  } : {}, [
n,
t.id
  ]);
  (0, c.$)(eu);
  let ec = (0, O.Z)(t.id, n),
ed = (0, M.J)({
  popoutUser: t,
  source: L.m.USER_POPOUT,
  guildId: n
}),
[e_, eE] = i.useState(!1);
  (0, u.Z)(() => eE(!0), ed.shouldShow ? 250 : null);
  let ef = (0, p.q)(null == en ? void 0 : en.application_id);
  return i.useEffect(() => {
null == Z || Z(null == K ? void 0 : K.current);
  }, [
K,
Z
  ]), i.useEffect(() => {
if (!eo) {
  if ((null == en ? void 0 : en.application_id) == null || null != ef)
    (null == n || (null == ee ? void 0 : ee.fullProfileLoadedTimestamp) != null) && (function() {
      var e;
      let r, i, a;
      null != en && (r = en.party, i = en.assets, a = null != en.application_id ? h.Z.getApplication(en.application_id) : null);
      let s = ei;
      ei === U.Skl.ONLINE && (s = ea ? U.j28.ONLINE_MOBILE : U.j28.ONLINE_DESKTOP);
      let o = null != ee ? {
          has_nickname: !!(null == ee ? void 0 : ee.nick),
          has_guild_member_avatar: !!(null == ee ? void 0 : ee.avatar),
          has_guild_member_banner: !!(null == z ? void 0 : z.isUsingGuildMemberBanner()),
          has_guild_member_bio: !!(null == z ? void 0 : z.isUsingGuildMemberBio())
        } : {},
        l = null != Q ? {
          other_application_id: null == Q ? void 0 : Q.id,
          other_application_name: t.toString()
        } : {};
      A.default.track(U.rMx.OPEN_POPOUT, {
        type: 'Profile Popout',
        guild_id: n,
        channel_id: k,
        other_user_id: t.id,
        application_id: null != en ? en.application_id : void 0,
        application_name: null != en ? en.name : void 0,
        sku_id: null != a ? a.primarySkuId : null,
        is_friend: S.Z.isFriend(t.id),
        has_images: !!(null !== (e = null == i ? void 0 : i.large_image) && void 0 !== e ? e : null == i ? void 0 : i.small_image),
        party_max: null != r && null != r.size ? r.size[1] : void 0,
        party_id: null != r ? r.id : void 0,
        party_platform: null != r && (0, w.Ps)(r.id) ? U.ABu.SPOTIFY : null,
        game_platform: (0, d.Z)(en),
        profile_user_status: s,
        is_streaming: es,
        has_custom_status: null != er,
        has_avatar_decoration: null != t.avatarDecoration,
        has_profile_effect: (null == z ? void 0 : z.profileEffectId) != null,
        profile_has_nitro_customization: null != z && (null == z ? void 0 : z.hasPremiumCustomization()),
        profile_has_theme_color_customized: null != z && z.hasThemeColors(),
        profile_has_theme_animation: (null == z ? void 0 : z.popoutAnimationParticleType) != null,
        ...o,
        ...l,
        ...j
      });
    }(), el(!0));
}
  }, [
ee,
null == en ? void 0 : en.application_id,
ef,
eo,
n
  ]), (0, r.jsx)(f.Gt, {
value: X,
children: (0, r.jsx)(N.Mt, {
  value: $,
  shouldTrackViewOnMount: null == ee || null != ee.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(o.Z, {
    section: U.jXE.PROFILE_POPOUT,
    children: (0, r.jsx)(s.Dialog, {
      ref: K,
      'aria-label': t.username,
      onClick: G,
      onContextMenu: G,
      style: ed.shouldShow ? {
        marginTop: D.Ao
      } : void 0,
      children: (0, r.jsxs)(C.Z, {
        user: t,
        displayProfile: z,
        profileType: P.y0.POPOUT,
        className: ed.shouldShow ? x.hasCollectiblesUpsell : void 0,
        showOutOfBoundaryComponents: e_,
        children: [
          (0, r.jsx)(b.ZP, {
            user: t,
            displayProfile: z,
            guildId: n,
            channelId: k,
            onClose: () => null == H ? void 0 : H(),
            isMobile: ea,
            isStreaming: (0, _.Z)(en),
            status: ei,
            disableUserProfileLink: Y,
            isHovering: q,
            upsell: ed.shouldShow ? (0, r.jsx)(D.ZP, {
              user: t,
              upsellSource: L.m.USER_POPOUT,
              displayProfile: z,
              onClose: H,
              ...ed
            }) : void 0
          }),
          (0, r.jsx)(C.Z.Overlay, {
            children: (0, r.jsx)(y.Z, {
              activity: en,
              customStatusActivity: er,
              displayProfile: z,
              user: t,
              guild: J,
              guildMember: ee,
              channelId: k,
              onClose: H,
              setNote: V,
              canDM: ec,
              analyticsParams: j
            })
          })
        ]
      })
    })
  })
})
  });
}