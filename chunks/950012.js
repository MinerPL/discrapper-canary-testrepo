a(47120);
var n = a(735250), t = a(470079), l = a(994640), i = a(247007), r = a(999464), o = a(503406), c = a(463115), d = a(888592);
s.Z = e => {
    let {
            onClose: s,
            invite: a,
            forceGuildScrollHeight: N = !0,
            isNUXFlow: u
        } = e, [_, m] = t.useState([d.tF.VERIFY_EMAIL]), [E, I] = t.useState(''), [x, h] = t.useState(''), [C, T] = t.useState(void 0), [g, O] = t.useState([]), v = e => {
            m(_.concat(e).slice(-4));
        };
    switch (_[_.length - 1]) {
    case d.tF.VERIFY_EMAIL:
        return (0, n.jsx)(l.Z, {
            setGuildsInfo: O,
            setStep: v,
            email: E,
            setEmail: I,
            setGuildId: T,
            invite: a,
            onClose: s,
            isNUXFlow: u
        });
    case d.tF.SELECT_SCHOOL:
        return (0, n.jsx)(i.Z, {
            guildsInfo: g,
            setStep: v,
            email: E,
            setGuildId: T,
            forceGuildScrollHeight: N
        });
    case d.tF.SUBMIT_SCHOOL:
        return (0, n.jsx)(r.Z, {
            onBack: () => {
                _.length > 1 && m(_.slice(0, -1).slice(-4));
            },
            setStep: v,
            email: E,
            school: x,
            setSchool: h
        });
    case d.tF.VERIFY_PIN:
        return (0, n.jsx)(o.Z, {
            email: E,
            onClose: s,
            guildId: C
        });
    case d.tF.EMAIL_WAITLIST:
        return (0, n.jsx)(c.Z, {
            setStep: v,
            school: x
        });
    default:
        return null;
    }
};
