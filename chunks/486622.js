"use strict";
n.r(t), n.d(t, {
  useMessageRequestActions: function() {
    return C
  }
}), n("47120");
var a = n("470079"),
  l = n("707019"),
  s = n.n(l),
  i = n("881052"),
  r = n("726521"),
  o = n("621853"),
  u = n("484459"),
  d = n("695346"),
  c = n("626135"),
  f = n("823162"),
  h = n("268699"),
  m = n("9389"),
  p = n("687683"),
  E = n("981631");

function C(e) {
  let {
    user: t,
    onAcceptSuccess: n,
    onRejectSuccess: l,
    onError: C
  } = e, g = (0, m.default)(), [S, _] = a.useState(!1), [T, I] = a.useState(!1), [A, v] = a.useState(!1), [N, x] = a.useState(!1), [M, R] = a.useState(!1), L = S || T || A, y = a.useCallback(async e => {
    if (!L) {
      _(!0);
      try {
        await (0, f.acceptMessageRequest)(e), x(!0), null == n || n()
      } catch (t) {
        let e = new i.APIError(t);
        null == C || C(e)
      } finally {
        _(!1)
      }
    }
  }, [L, n, C]), O = a.useCallback(async e => {
    if (!L) {
      I(!0);
      try {
        await (0, f.rejectMessageRequest)(e), R(!0), null == l || l()
      } catch (t) {
        let e = new i.APIError(t);
        null == C || C(e)
      } finally {
        I(!1)
      }
    }
  }, [L, l, C]), j = a.useCallback(async e => {
    if (L) return;
    I(!0);
    let t = s()(e, p.BATCH_REJECT_LIMIT);
    try {
      for (let e of t) await (0, f.rejectMessageRequestBatch)(e);
      R(!0), null == l || l()
    } catch (t) {
      let e = new i.APIError(t);
      null == C || C(e)
    } finally {
      I(!1)
    }
  }, [L, l, C]), P = a.useCallback(async e => {
    if (L) return;
    if (null != t && null == o.default.getMutualGuilds(t.id)) {
      v(!0);
      try {
        await (0, u.default)(t.id, t.getAvatarURL(void 0, 80), {
          withMutualGuilds: !0,
          withMutualFriendsCount: !0
        })
      } catch (e) {} finally {
        v(!1)
      }
    }
    let n = async () => {
      var n;
      let a = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
      c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
        action: p.MessageRequestAnalyticsAction.ACCEPT_CONFIRMATION_PROMPT,
        channel_id: e,
        mutual_guild_ids: null != a ? a : [],
        other_user_id: null == t ? void 0 : t.id
      }), await y(e)
    };
    (0, h.openAcceptMessageRequestConfirmModal)({
      channelId: e,
      onConfirm: n,
      onCancel: () => {
        var n;
        let a = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
        c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
          action: p.MessageRequestAnalyticsAction.DISMISS_CONFIRMATION_PROMPT,
          channel_id: e,
          mutual_guild_ids: null != a ? a : [],
          other_user_id: null == t ? void 0 : t.id
        })
      }
    })
  }, [y, L, t]), D = a.useCallback((e, t, n) => {
    let a = (a, l) => {
        l && d.NonSpamRetrainingOptIn.updateSetting(a), a && null != t && (0, r.submitHamReportForFirstDM)(t), y(e.id), c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
          action: p.MessageRequestAnalyticsAction.ACCEPT_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id,
          is_dont_show_again_checked: l,
          non_spam_retraining_opt_in: a
        }), null != n && n()
      },
      l = d.NonSpamRetrainingOptIn.getSetting();
    null == l ? (0, h.onMarkAsNotSpamConfirmationModal)({
      channel: e,
      onConfirm: a,
      onCancel: () => {
        c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
          action: p.MessageRequestAnalyticsAction.DISMISS_HAM_CONFIRMATION_PROMPT,
          channel_id: e.id
        })
      }
    }) : a(l)
  }, [y]);
  return {
    acceptMessageRequest: g ? P : y,
    rejectMessageRequest: O,
    rejectAll: j,
    markAsNotSpam: D,
    isAcceptLoading: S,
    isRejectLoading: T,
    isUserProfileLoading: A,
    isOptimisticAccepted: N,
    isOptimisticRejected: M
  }
}