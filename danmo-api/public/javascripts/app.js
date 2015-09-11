angular.module('app', []).controller('ScheduleController', function() {
    var scope = this;
    scope.sched_list = [
	{
	    date: "9/6(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Ba)御園生弘　Pf)沢本明男",
	    charge: 1000
	},
	{
	    date: "9/13(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "9/20(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "",
	    charge: 1300
	},
	{
	    date: "9/26(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "",
	    charge: 1000
	},
	{
	    date: "9/27(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	}
    ];

    scope.append = function () {
	var json = {};
	json.date = scope.date;
	json.time = scope.begin + '-' + scope.end;
	json.desc = scope.desc;
	json.charge = scope.charge;

	console.log(json);
    };
});

