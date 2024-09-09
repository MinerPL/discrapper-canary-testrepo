a.d(s, {
    Z: function () {
        return r;
    }
}),
    a(653041);
var E = a(470079),
    _ = a(626135),
    t = a(58346),
    n = a(981631);
function r(e) {
    let s = E.useRef([]);
    E.useEffect(() => {
        if (null != e && e.state !== t.Rj.RESOLVING)
            !s.current.includes(e.code) &&
                (s.current.push(e.code),
                _.default.track(n.rMx.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                }));
    });
}
