const mongoose = require('mongoose')
const Desk = mongoose.model('Desk');

exports.homePage = (req,res) => {
	res.render('index');
}

exports.addDesk = (req,res) => {
	res.render('editDesk', { title: 'Add Desk' });
}

exports.createDesk = async (req,res) => {
	console.log(req.body);
	const desk = new Desk(req.body);
	await desk.save()
	res.redirect('/');
}