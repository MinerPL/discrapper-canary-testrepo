var a = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd\u2019hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P'
};
i.Z = function (e, i, n, t) {
    return a[e];
};
