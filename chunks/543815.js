n(47120);
var i = n(232567),
    a = n(996106),
    s = n(452426),
    r = n(863141),
    l = n(186901),
    o = n(981631);
t.Z = {
    [o.Etm.GET_USER]: {
        scope: l.lH,
        validation: (e) => (0, s.Z)(e).required().keys({ id: e.string().required() }),
        handler(e) {
            let {
                args: { id: t }
            } = e;
            return (0, i.PR)(t)
                .then(r.Z)
                .catch(() => {
                    throw new a.Z({ errorCode: o.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
                });
        }
    }
};
