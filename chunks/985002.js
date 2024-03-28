"use strict";
n.r(t), n.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  s = n("881052"),
  l = n("280570"),
  i = n("914788"),
  r = n("292352");

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [f, E] = a.useState(!1), [h, _] = a.useState(!1), [C, m] = a.useState(!1), [S, I] = a.useState(!1), [p, T] = a.useState(!1), [g, A] = a.useState(!1), N = o || d || f || h || S || g, v = a.useCallback(async e => {
    if (!N) {
      u(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [N, t, n]), O = a.useCallback(async e => {
    if (!N) {
      c(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [N, t, n]), R = a.useCallback(async e => {
    if (!N) {
      E(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        E(!1)
      }
    }
  }, [N, t, n]), L = a.useCallback(async e => {
    if (!N) {
      _(!0);
      try {
        await (0, l.removeLinkForUserId)(e.id), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [N, t, n]), P = a.useCallback(async () => {
    if (!C) {
      m(!0);
      try {
        await (0, l.getLinkCodeForCurrentUser)(), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [C, t, n]), M = a.useCallback(async e => {
    if (!p) {
      T(!0);
      try {
        await l.default.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        T(!1)
      }
    }
  }, [p, t, n]), y = a.useCallback(async (e, a) => {
    if (!S) {
      I(!0);
      try {
        await l.default.requestLink(e, a), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [S, t, n]);
  return {
    acceptLinkRequest: v,
    declineLinkRequest: O,
    disconnectLinkRequest: R,
    cancelLinkRequest: L,
    selectTeenUser: M,
    getLinkCode: P,
    requestLink: y,
    loadMore: a.useCallback(async e => {
      let n = i.default.getActionsForDisplayType(e),
        a = n[n.length - 1],
        r = i.default.getStartId(),
        o = i.default.getSelectedTeenId();
      if (!g && null != r && null != o) {
        A(!0);
        try {
          await l.default.fetchMoreTeenActivity(o, e, r, a.event_id)
        } catch (n) {
          let e = new s.APIError(n);
          null == t || t(e)
        } finally {
          A(!1)
        }
      }
    }, [g, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: f,
    isCancelLoading: h,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: p,
    isRequestingLink: S,
    isMoreLoading: g
  }
}