var n = a(799761),
    t = {
        ordinalNumber: function (e, i) {
            var a,
                n = Number(e),
                t = null == i ? void 0 : i.unit;
            return 0 === n ? '0' : ((a = 1 === n ? (t && ['year', 'week', 'hour', 'minute', 'second'].includes(t) ? 'ère' : 'er') : 'ème'), n + a);
        },
        era: (0, n.Z)({
            values: {
                narrow: ['av. J.-C', 'ap. J.-C'],
                abbreviated: ['av. J.-C', 'ap. J.-C'],
                wide: ['avant Jésus-Christ', 'après Jésus-Christ']
            },
            defaultWidth: 'wide'
        }),
        quarter: (0, n.Z)({
            values: {
                narrow: ['T1', 'T2', 'T3', 'T4'],
                abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
                wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre']
            },
            defaultWidth: 'wide',
            argumentCallback: function (e) {
                return e - 1;
            }
        }),
        month: (0, n.Z)({
            values: {
                narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
                wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
            },
            defaultWidth: 'wide'
        }),
        day: (0, n.Z)({
            values: {
                narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
                abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
                wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
            },
            defaultWidth: 'wide'
        }),
        dayPeriod: (0, n.Z)({
            values: {
                narrow: {
                    am: 'AM',
                    pm: 'PM',
                    midnight: 'minuit',
                    noon: 'midi',
                    morning: 'mat.',
                    afternoon: 'ap.m.',
                    evening: 'soir',
                    night: 'mat.'
                },
                abbreviated: {
                    am: 'AM',
                    pm: 'PM',
                    midnight: 'minuit',
                    noon: 'midi',
                    morning: 'matin',
                    afternoon: 'après-midi',
                    evening: 'soir',
                    night: 'matin'
                },
                wide: {
                    am: 'AM',
                    pm: 'PM',
                    midnight: 'minuit',
                    noon: 'midi',
                    morning: 'du matin',
                    afternoon: 'de l\u2019après-midi',
                    evening: 'du soir',
                    night: 'du matin'
                }
            },
            defaultWidth: 'wide'
        })
    };
i.Z = t;
