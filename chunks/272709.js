"use strict";
n.d(t, {
  Z: function() {
    return z
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(831209),
  l = n(442837),
  u = n(481060),
  _ = n(700582),
  d = n(812206),
  c = n(924301),
  E = n(454585),
  I = n(565799),
  T = n(501655),
  h = n(427679),
  S = n(543882),
  f = n(592125),
  N = n(496675),
  A = n(594174),
  m = n(979651),
  O = n(366695),
  R = n(119828),
  C = n(737688),
  p = n(242315),
  g = n(630641),
  L = n(158010),
  v = n(944581),
  D = n(645284),
  M = n(632184),
  P = n(170039),
  y = n(806519),
  U = n(912787),
  b = n(623552),
  G = n(718582),
  w = n(177963),
  k = n(835248),
  B = n(437431),
  x = n(874070),
  V = n(185885),
  Z = n(126134),
  H = n(981631),
  F = n(765305),
  Y = n(689938),
  j = n(181096);

function W(e) {
  let t = (0, U.Z)(e),
    {
      category: n
    } = e;
  return (null == t ? void 0 : t.isGuildStageVoice()) ? P.Z : (n === Z.L.GAMING || n === Z.L.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === Z.L.HANGOUT && e.streamUserIds.length > 0 ? D.Z : n === Z.L.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? M.Z : null != t && m.Z.hasVideo(t.id) ? R.Z : M.Z
}

function K(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: j.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(_.Z, {
        user: e,
        size: u.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: j.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(y.ZP, {
        width: 20,
        height: 20,
        mask: y.ZP.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: j.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(u.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: j.othersCount,
      children: ["+", n]
    }), r]
  })
}

function z(e) {
  var t, n;
  let {
    cardData: s,
    guildId: _,
    cardIndex: R
  } = e, {
    category: M
  } = s, [P, y] = r.useState(!1), k = M === Z.L.HANGOUT && s.streamUserIds.length > 0, x = (0, l.e7)([S.Z], () => k ? S.Z.getPreviewURL(_, s.channelId, s.streamUserIds[0]) : null), V = (0, l.e7)([S.Z], () => M === Z.L.HANGOUT ? S.Z.getIsPreviewLoading(_, s.channelId, s.streamUserIds[0]) : null), z = M === Z.L.HANGOUT && s.streamUserIds.length > 0 && null == x && !V, q = (0, l.e7)([f.Z], () => {
    let e = M === Z.L.HANGOUT || M === Z.L.GAMING ? s.channelId : M === Z.L.EVENT ? s.event.channel_id : M === Z.L.EMBEDDED_ACTIVITY ? s.embeddedActivities[0].channelId : null;
    return f.Z.getChannel(e)
  }), X = (0, l.e7)([c.ZP], () => c.ZP.getActiveEventByChannel(null == q ? void 0 : q.id)), {
    usersToShow: Q,
    othersCount: J
  } = (0, G.QO)(null !== (n = null == q ? void 0 : q.id) && void 0 !== n ? n : "", _), {
    usersToShow: $
  } = (0, G.Es)(q), ee = (0, G.ni)(s), et = function(e, t, n, r) {
    let {
      category: s
    } = e, o = (0, U.Z)(e), {
      usersToShow: _
    } = (0, G.Es)(o), c = (0, l.e7)([S.Z], () => s === Z.L.HANGOUT ? S.Z.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (s) {
      case Z.L.GAMING:
        let {
          games: E
        } = e;
        if (null == E[0].application_id) return (0, i.jsx)(C.Z, {});
        return (0, i.jsx)(O.Z, {
          game: d.Z.getApplication(E[0].application_id),
          size: "xl",
          className: j.gameIcon
        });
      case Z.L.EVENT:
        if (_.length > 0) return (0, i.jsx)(b.Z, {
          guildId: t,
          users: _
        });
        return e.isStage ? (0, i.jsx)(B.Z, {
          className: j.imageIcon
        }) : (0, i.jsx)(w.Z, {
          className: j.imageIcon
        });
      case Z.L.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: I
        } = e;
        if (null == I[0].applicationId) return (0, i.jsx)(v.Z, {});
        return (0, i.jsx)(O.Z, {
          game: r,
          size: "xl",
          className: j.gameIcon
        });
      case Z.L.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: o,
          isStage: l
        } = e, d = l ? _ : [];
        if (l) {
          if (0 === d.length) return (0, i.jsx)(B.Z, {
            className: j.imageIcon
          });
          return (0, i.jsx)(b.Z, {
            guildId: t,
            users: d
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(u.TextBadge, {
            text: Y.Z.Messages.LIVE,
            color: a.Z.STATUS_DANGER,
            className: e
          });
          if (c) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Spinner, {
              className: j.streamPreview
            }), e(j.liveBadge)]
          });
          if (null != n) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              src: n,
              alt: "",
              className: j.streamPreview
            }), e(j.liveBadge)]
          });
          let s = r.map(e => A.default.getUser(e)).filter(e => null != e);
          return (0, i.jsx)(b.Z, {
            guildId: t,
            users: s
          })
        }
        let E = s.map(e => A.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(b.Z, {
          guildId: t,
          users: E
        })
      }
    }
  }(s, _, x, ee), en = function(e, t) {
    let {
      category: n
    } = e, r = (0, G.FP)(n === Z.L.HANGOUT ? null == e ? void 0 : e.userIds : []), s = (0, G.FP)(n === Z.L.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, G.FP)(n === Z.L.GAMING ? null == e ? void 0 : e.gameUserIds : []), l = (0, U.Z)(e), {
      hasChannelStatus: _
    } = (0, G.CE)(l), {
      usersToShow: d
    } = (0, G.Es)(l), c = (0, G.FP)(n === Z.L.HANGOUT && e.isStage ? d.map(e => e.id) : []), E = new Set;
    n === Z.L.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      E = new Set([...E, ...e.userIds])
    });
    let I = (0, G.FP)(n === Z.L.EMBEDDED_ACTIVITY ? [...E] : []);
    switch (n) {
      case Z.L.HANGOUT: {
        if (_ && 0 === s.length) {
          let e = (0, G.K6)(r, t, !0),
            n = r.length - 1;
          return (0, i.jsxs)("div", {
            className: j.hangoutStatusTitleContainer,
            children: [(0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: o()(j.hangoutStatusUsername, j.ellipsis),
              children: e
            }), n > 0 && (0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: j.hangoutStatusOthers,
              children: Y.Z.Messages.USER_SUMMARY_AND_OTHERS.format({
                count: n
              })
            })]
          })
        }
        let n = (0, G.K6)(c.length > 0 ? c : s.length > 0 ? s : r, t);
        if (e.isStage) {
          var T, S;
          return null !== (S = null === (T = h.Z.getStageInstanceByChannel(e.channelId)) || void 0 === T ? void 0 : T.topic) && void 0 !== S ? S : n
        }
        return n
      }
      case Z.L.EVENT:
        return e.event.name;
      case Z.L.EMBEDDED_ACTIVITY:
        return (0, G.K6)(I, t);
      case Z.L.GAMING:
        return (0, G.K6)(a, t);
      default:
        return null
    }
  }(s, _), ei = function(e, t, n) {
    var r, s, o;
    let {
      category: a
    } = e, l = (0, U.Z)(e), _ = W(e), {
      audienceCount: d
    } = (0, G.Es)(l), {
      channelStatus: c,
      hasChannelStatus: I
    } = (0, G.CE)(l);
    switch (a) {
      case Z.L.GAMING:
        let {
          games: T, channelId: h
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(C.Z, {
            className: j.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: 1 === T.length ? T[0].name : Y.Z.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: T.length
            })
          }), "•", null != _ && (0, i.jsx)(_, {
            className: j.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: null === (r = f.Z.getChannel(h)) || void 0 === r ? void 0 : r.name
          })]
        });
      case Z.L.EVENT:
        let {
          event: S
        } = e, N = (0, G.NZ)(S), A = null == N ? void 0 : N.IconComponent, m = null == N ? void 0 : N.locationName;
        if (null != A && null != m) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(A, {
            className: j.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: m
          }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(L.Z, {
              className: j.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: d
            })]
          })]
        });
        return null;
      case Z.L.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: O
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.Z, {
            className: j.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: 1 === O.length ? null == t ? void 0 : t.name : Y.Z.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: O.length
            })
          }), "•", null != _ && (0, i.jsx)(_, {
            className: j.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: null === (s = f.Z.getChannel(O[0].channelId)) || void 0 === s ? void 0 : s.name
          })]
        });
      case Z.L.HANGOUT: {
        let {
          channelId: t
        } = e, r = I && null == n;
        return (0, i.jsx)(i.Fragment, {
          children: r ? (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: j.ellipsis,
            children: E.Z.parseVoiceChannelStatus(c, !0, {
              channelId: t
            })
          }) : (0, i.jsxs)(i.Fragment, {
            children: [null != _ && (0, i.jsx)(_, {
              className: j.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: j.ellipsis,
              children: null === (o = f.Z.getChannel(t)) || void 0 === o ? void 0 : o.name
            }), I && null != n && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                className: j.ellipsis,
                children: E.Z.parseVoiceChannelStatus(c, !0, {
                  channelId: t
                })
              })]
            }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(L.Z, {
                className: j.categoryIcon
              }), (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                children: d
              })]
            })]
          })
        })
      }
      default:
        return null
    }
  }(s, ee, x), er = function(e) {
    let {
      category: t
    } = e, n = (0, U.Z)(e), {
      audienceCount: i
    } = (0, G.Es)(n);
    switch (t) {
      case Z.L.EVENT:
        if (null != i) return [{
          icon: p.Z,
          count: i
        }];
        return [];
      case Z.L.HANGOUT:
        let {
          streamUserIds: r, userIds: s, channelId: o, isStage: a
        } = e;
        if (a) {
          var l;
          return [{
            icon: p.Z,
            count: null !== (l = I.Z.getParticipantCount(o, T.pV.AUDIENCE)) && void 0 !== l ? l : 0
          }]
        }
        if (r.length > 0) return [{
          icon: L.Z,
          count: s.length > 0 ? s.length : null
        }];
        return [];
      case Z.L.EMBEDDED_ACTIVITY:
        return [{
          icon: L.Z,
          count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
        }, {
          icon: D.Z,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      case Z.L.GAMING:
        return [{
          icon: L.Z,
          count: e.voiceStates.length > 0 ? e.voiceStates.length : null
        }, {
          icon: D.Z,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      default:
        return []
    }
  }(s), es = (0, G.$1)(s, _, R), eo = function(e, t, n) {
    var r;
    let {
      category: s
    } = e, o = null, a = s === Z.L.EVENT;
    if (null == (o = a ? e.event.channel_id : s === Z.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !a) return;
    let l = null != o && m.Z.isInChannel(o),
      _ = a && (e.event.entity_type === F.WX.EXTERNAL || e.event.entity_type === F.WX.NONE) ? Y.Z.Messages.VIEW : l ? Y.Z.Messages.GUILD_POPOUT_JOINED : Y.Z.Messages.JOIN,
      d = (null === (r = f.Z.getChannel(o)) || void 0 === r ? void 0 : r.isGuildVocal()) && !N.Z.can(H.Plq.CONNECT, f.Z.getChannel(o)),
      c = (0, G.DE)(e, t),
      E = (0, i.jsxs)(u.Button, {
        size: u.Button.Sizes.MIN,
        innerClassName: j.joinButtonInner,
        color: u.Button.Colors.GREEN,
        disabled: l || d,
        onClick: i => {
          i.stopPropagation(), (0, G.ob)(e, t, n, G.pV.JOIN_BUTTON), null == c || c()
        },
        className: j.joinButton,
        children: [_, d && (0, i.jsx)(g.Z, {
          width: 14,
          height: 14
        })]
      });
    return (0, i.jsx)("div", {
      className: j.joinButtonWhatWrapper,
      children: E
    })
  }(s, _, R), {
    hasChannelStatus: ea
  } = (0, G.CE)(q), el = W(s), eu = M === Z.L.HANGOUT && ea && null == x, e_ = (null != X || !!(null == q ? void 0 : q.isGuildStageVoice())) && $.length > 0, ed = M === Z.L.HANGOUT && (0 === s.streamUserIds.length || z) && !(null == q ? void 0 : q.isGuildStageVoice()), ec = M === Z.L.EMBEDDED_ACTIVITY && s.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: j.pill,
    children: [(0, i.jsx)(D.Z, {
      className: j.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: s.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == es ? void 0 : es(),
    tag: "div",
    className: j.container,
    onMouseEnter: () => y(!0),
    onMouseLeave: () => y(!1),
    children: [(0, i.jsx)("div", {
      className: o()(j.image, {
        [j.streamContainer]: k && !z && !(null == q ? void 0 : q.isGuildStageVoice())
      }),
      children: et
    }), (0, i.jsxs)("div", {
      className: o()(j.content, eu && j.hangoutChannelStatusContent),
      children: [null != en && (0, i.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === er.length ? j.multiLineTitle : j.singleLineTitle,
        children: en
      }), null != ei && (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: j.subtitle,
        children: ei
      }), !(e_ || ed) && !(null == q ? void 0 : q.isGuildStageVoice()) && Q.length > 0 && (0, i.jsx)(K, {
        users: Q,
        othersCount: J,
        extraPill: ec
      }), eu && (0, i.jsxs)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: j.hangoutChannel,
        children: [null != el && (0, i.jsx)(el, {
          className: j.categoryIcon
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: null === (t = f.Z.getChannel(s.channelId)) || void 0 === t ? void 0 : t.name
        })]
      })]
    }), P && eo]
  })
}