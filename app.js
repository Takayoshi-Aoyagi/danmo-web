angular.module('app', []).controller('ScheduleController', function () {
    var scope = this;
    scope.sched_list = [
	{
	    date: "10/24(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "10/25(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "11/1(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "11/8(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "11/15(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)安ヵ川真理　Ba)本間幸夫",
	    charge: 1300
	},
	{
	    date: "11/21(土)",
	    time: "19:00-22:00",
	    name: "ダンモライブ",
	    desc: "Gt)須之内文典　Gt)桜井和樹　Ba)畑中利文",
	    charge: 1000
	}
    ];
});
