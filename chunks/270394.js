"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("803997"),
  i = l.n(s),
  r = l("512722"),
  o = l.n(r),
  d = l("392711"),
  u = l.n(d),
  c = l("399606"),
  f = l("692547"),
  m = l("481060"),
  I = l("447543"),
  T = l("225433"),
  N = l("129861"),
  E = l("493544"),
  S = l("700582"),
  g = l("410030"),
  h = l("933557"),
  p = l("154285"),
  _ = l("666657"),
  O = l("487419"),
  A = l("699516"),
  C = l("594174"),
  x = l("373791"),
  R = l("186095"),
  M = l("285952"),
  v = l("759231"),
  L = l("965638"),
  j = l("981631"),
  P = l("689938"),
  b = l("238950"),
  D = l("850169"),
  y = l("794711");
let G = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function B(e) {
  var t, l;
  let {
    invite: a,
    showChannel: s = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, d = a.uses;
  return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(M.default, {
    className: i()(b.inviteSettingsInviteRow, D.card, {
      [b.inviteDisabledRow]: r
    }),
    children: [(0, n.jsx)(M.default, {
      grow: G.INVITER,
      basis: 0,
      align: M.default.Align.CENTER,
      className: i()(b.text),
      children: (0, n.jsxs)(M.default.Child, {
        children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
          className: b.user,
          children: [(0, n.jsx)(S.default, {
            user: t,
            size: m.AvatarSizes.SIZE_20,
            className: b.avatar
          }), (0, n.jsx)(N.default, {
            className: b.username,
            discriminatorClass: b.discriminator,
            user: t
          })]
        }), (l = a.channel, s ? (0, n.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, h.computeChannelName)(l, C.default, A.default, !0)
        }) : null)]
      })
    }), (0, n.jsx)(M.default, {
      grow: G.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: M.default.Align.CENTER,
      className: b.text,
      children: (0, n.jsx)(m.Text, {
        className: b.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : a.code
      })
    }), (0, n.jsx)(M.default, {
      grow: G.USES,
      basis: 0,
      justify: M.default.Justify.END,
      align: M.default.Align.CENTER,
      className: i()(b.text),
      children: (0, n.jsx)(m.Text, {
        className: b.uses,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, n.jsx)(M.default, {
      grow: G.EXPIRES,
      basis: 0,
      align: M.default.Align.CENTER,
      justify: M.default.Justify.END,
      className: i()(b.text, b.countdownColumn),
      children: (0, n.jsx)(m.Text, {
        className: b.countdown,
        variant: "text-sm/normal",
        children: (0, n.jsx)(x.default, {
          deadline: a.getExpiresAt()
        })
      })
    }), (0, n.jsx)(T.default, {
      className: b.revokeInvite,
      onClick: () => {
        I.default.revokeInvite(a)
      }
    })]
  })
}

function H(e) {
  let {
    invites: t,
    guild: s,
    hide: i,
    channel: r = null,
    showChannel: d = !1,
    loading: I = !1,
    canCreateInvites: T = !1
  } = e;
  o()(null != s, "guild is required");
  let N = (0, L.useInvitesDisabledPermission)(s),
    {
      enableInvitesDisabled: S
    } = (0, L.useInvitesDisabledExperiment)(s),
    {
      showAlertMode: h
    } = (0, p.useGuildAlertModeEnabled)(s.id),
    A = (0, c.useStateFromStores)([O.default], () => O.default.getGuildIncident(s.id)),
    C = s.hasFeature(j.GuildFeatures.INVITES_DISABLED) || h && (null == A ? void 0 : A.invitesDisabledUntil) != null && new Date(A.invitesDisabledUntil) > new Date,
    [x, D] = a.useState(!1);
  a.useEffect(() => {
    N && L.InvitesDisabledExperiment.trackExposure({
      guildId: s.id,
      location: "5c23b0_1"
    })
  }, [N, S, s.id]);
  let H = (0, g.default)(),
    k = a.useMemo(() => null == t || I ? [] : u()(t).sortBy(e => {
      var t, l;
      return (null !== (l = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : "").toLowerCase()
    }).value(), [t, I]),
    U = () => {
      (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("7654"), l.e("92893")]).then(l.bind(l, "560114"));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: r,
          guild: s,
          source: j.InstantInviteSources.SETTINGS_INVITE
        })
      })
    },
    F = async e => {
      if (!x) {
        D(!0);
        try {
          await (0, L.setInvitesDisabled)(s, e)
        } catch (e) {} finally {
          D(!1)
        }
      }
    }, w = () => {
      if (h) {
        let e = {
          source: _.GuildIncidentActionSources.GUILD_SETTINGS
        };
        (0, m.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([l.e("99387"), l.e("77122")]).then(l.bind(l, "664452"));
          return l => (0, n.jsx)(t, {
            ...l,
            guildId: s.id,
            analyticsData: e
          })
        })
      } else C ? F(!1) : (0, m.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("79267").then(l.bind(l, "302434"));
        return function(t) {
          return (0, n.jsx)(e, {
            ...t,
            onConfirm: () => F(!0)
          })
        }
      })
    };
  return (0, n.jsx)(E.ListContentScroller, {
    sections: [Math.max(1, k.length)],
    renderSection: () => {
      let e;
      return e = 0 !== k.length || I ? (0, n.jsxs)(M.default, {
        children: [(0, n.jsx)(M.default.Child, {
          grow: G.INVITER,
          basis: 0,
          className: y.marginReset,
          children: (0, n.jsx)(m.FormTitle, {
            children: P.default.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, n.jsx)(M.default.Child, {
          basis: 0,
          grow: G.INVITE_CODE,
          className: y.marginReset,
          children: (0, n.jsx)(m.FormTitle, {
            children: P.default.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, n.jsx)(M.default.Child, {
          grow: G.USES,
          basis: 0,
          className: b.textAlignRight,
          children: (0, n.jsx)(m.FormTitle, {
            children: P.default.Messages.INSTANT_INVITE_USES
          })
        }), (0, n.jsx)(M.default.Child, {
          grow: G.EXPIRES,
          basis: 0,
          className: b.textAlignRight,
          children: (0, n.jsx)(m.FormTitle, {
            children: P.default.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, n.jsxs)(R.default, {
        theme: H,
        children: [(0, n.jsx)(R.EmptyStateImage, {
          darkSrc: l("914814"),
          lightSrc: l("370392"),
          width: 256,
          height: 130
        }), (0, n.jsx)(R.EmptyStateText, {
          note: P.default.Messages.NO_INVITES_BODY,
          children: P.default.Messages.NO_INVITES_LABEL
        })]
      }), (0, n.jsx)(m.FormSection, {
        className: b.headerSection,
        children: (0, n.jsxs)(m.HeadingLevel, {
          component: (0, n.jsx)(m.FormTitle, {
            tag: m.FormTitleTags.H1,
            children: P.default.Messages.INVITES
          }),
          children: [(0, n.jsx)(m.FormText, {
            className: y.marginBottom20,
            type: m.FormTextTypes.DESCRIPTION,
            children: T ? P.default.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: U
            }) : P.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (S || h || C) && (0, n.jsxs)("div", {
            className: b.inviteDisabledContainer,
            children: [(0, n.jsx)(m.Button, {
              size: m.Button.Sizes.SMALL,
              color: C ? m.Button.Colors.BRAND : m.Button.Colors.RED,
              disabled: !N,
              submitting: x,
              onClick: w,
              children: C ? P.default.Messages.ENABLE_INVITES : P.default.Messages.DISABLE_INVITES
            }), C && (0, n.jsxs)("div", {
              className: b.inviteDisabledTip,
              children: [(0, n.jsx)(v.default, {
                color: f.default.unsafe_rawColors.YELLOW_300.css
              }), (0, n.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: P.default.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, n.jsx)(m.FormDivider, {
            className: b.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: t,
        row: l
      } = e;
      if (0 === k.length && 0 === l && I) return (0, n.jsx)(m.Spinner, {
        className: y.marginTop20,
        type: m.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (t > 0) return null;
      let a = k[l];
      return null == a ? null : (0, n.jsx)(B, {
        hide: i,
        invite: a,
        showChannel: d,
        inviteDisabled: C
      }, a.code)
    },
    rowHeight: (e, t) => e > 0 ? 0 : 0 === k.length && 0 === t && I ? 62 : null != k[t] ? 62 : 0,
    sectionHeight: () => 0 !== k.length || I ? 120 : 344
  })
}