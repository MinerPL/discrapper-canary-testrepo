var i = t(799761),
	n = {
		ordinalNumber: function (e, a) {
			var t = Number(e);
			return (null == a ? void 0 : a.unit) === 'week' ? t + 'ª' : t + 'º';
		},
		era: (0, i.Z)({
			values: {
				narrow: ['AC', 'DC'],
				abbreviated: ['AC', 'DC'],
				wide: ['antes de cristo', 'depois de cristo']
			},
			defaultWidth: 'wide'
		}),
		quarter: (0, i.Z)({
			values: {
				narrow: ['1', '2', '3', '4'],
				abbreviated: ['T1', 'T2', 'T3', 'T4'],
				wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
			},
			defaultWidth: 'wide',
			argumentCallback: function (e) {
				return e - 1;
			}
		}),
		month: (0, i.Z)({
			values: {
				narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
				abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
				wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
			},
			defaultWidth: 'wide'
		}),
		day: (0, i.Z)({
			values: {
				narrow: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
				short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
				abbreviated: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
				wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
			},
			defaultWidth: 'wide'
		}),
		dayPeriod: (0, i.Z)({
			values: {
				narrow: {
					am: 'a',
					pm: 'p',
					midnight: 'mn',
					noon: 'md',
					morning: 'manhã',
					afternoon: 'tarde',
					evening: 'tarde',
					night: 'noite'
				},
				abbreviated: {
					am: 'AM',
					pm: 'PM',
					midnight: 'meia-noite',
					noon: 'meio-dia',
					morning: 'manhã',
					afternoon: 'tarde',
					evening: 'tarde',
					night: 'noite'
				},
				wide: {
					am: 'a.m.',
					pm: 'p.m.',
					midnight: 'meia-noite',
					noon: 'meio-dia',
					morning: 'manhã',
					afternoon: 'tarde',
					evening: 'tarde',
					night: 'noite'
				}
			},
			defaultWidth: 'wide',
			formattingValues: {
				narrow: {
					am: 'a',
					pm: 'p',
					midnight: 'mn',
					noon: 'md',
					morning: 'da manhã',
					afternoon: 'da tarde',
					evening: 'da tarde',
					night: 'da noite'
				},
				abbreviated: {
					am: 'AM',
					pm: 'PM',
					midnight: 'meia-noite',
					noon: 'meio-dia',
					morning: 'da manhã',
					afternoon: 'da tarde',
					evening: 'da tarde',
					night: 'da noite'
				},
				wide: {
					am: 'a.m.',
					pm: 'p.m.',
					midnight: 'meia-noite',
					noon: 'meio-dia',
					morning: 'da manhã',
					afternoon: 'da tarde',
					evening: 'da tarde',
					night: 'da noite'
				}
			},
			defaultFormattingWidth: 'wide'
		})
	};
a.Z = n;
