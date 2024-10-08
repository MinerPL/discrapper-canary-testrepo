var n = s(990547),
    i = s(544891),
    a = s(570140),
    r = s(881052),
    o = s(626135),
    l = s(573261),
    u = s(545851),
    c = s(109488),
    d = s(794099),
    E = s(981631),
    _ = s(689938);
s(135200);
t.Z = {
    resetSuggestions: () => a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if (!!(0, d.vc)()) {
            a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var s;
                let n = await i.tn.get({
                    url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t
                });
                if (n.ok && (null === (s = n.body) || void 0 === s ? void 0 : s.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: n.body,
                        source: e
                    });
            } catch (e) {
                return;
            }
        }
    },
    async fetchSuggestions(e) {
        if (!!(0, c.P)())
            try {
                var t;
                a.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let s = await i.tn.get({
                    url: E.ANM.POMELO_SUGGESTIONS,
                    timeout: e
                });
                if (s.ok && (null === (t = s.body) || void 0 === t ? void 0 : t.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_SUGGESTIONS_SUCCESS',
                        suggestion: s.body
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t, s;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let g =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
                ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                : t.includes('..')
                  ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                  : t.length < 2 || t.length > 32
                    ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                          maxNum: 32,
                          minNum: 2
                      })
                    : void 0);
        if (null != g)
            return (
                o.default.track(E.rMx.POMELO_ERRORS, {
                    reason: g,
                    username_error: !0,
                    location: i,
                    one_click_flow: d
                }),
                a.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: g
                })
            );
        if (!!(0, u.E)())
            try {
                let t = await l.Z.post({
                    url: c ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: n.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    }
                });
                t.body.taken &&
                    o.default.track(E.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: i,
                        one_click_flow: d
                    }),
                    a.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (l) {
                let t = new r.Hx(l),
                    n = null !== (s = t.getAnyErrorMessage()) && void 0 !== s ? s : void 0;
                o.default.track(E.rMx.POMELO_ERRORS, {
                    reason: n,
                    username_error: !0,
                    location: i,
                    one_click_flow: d
                }),
                    a.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != t.status && t.status < 500 && 401 !== t.status ? n : void 0,
                        statusCode: t.status,
                        retryAfter: t.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = await l.Z.post({
                body: e,
                url: E.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: n.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                }
            });
        return (
            a.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: s.body
            }),
            s.body
        );
    }
};
