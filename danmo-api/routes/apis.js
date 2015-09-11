var express = require('express');
var router = express.Router();

var Models = require('../models/models');

/**
var sched_list = [
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
    },

];
**/

router.get('/sched', function(req, res, next) {
    Models.Schedule.find(function (err, sched_list) {
	if (err) {
	    res.status(500).end();
	} else {
	    res.status(200).send(sched_list);
	}
    });
});

router.post('/shed', function (req, res, next) {
    var json = req.body,
	id = json._id;

    Models.Schedule.find({ _id: id }, function (err, sched) {
	if (!err) {
	    res.status(500).end();
	    return;
	}
	if (!sched) {
	    sched = new Schedule(json);
	}
	sched.save();
	res.status(200).end();
    });
});

router.post('/shed', function (req, res, next) {
    var json = req.body;
});

module.exports = router;
