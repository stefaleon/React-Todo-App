const express=require('express');
const app=express();
const PORT = process.env.PORT || 3000;

// redirect https traffic to http, due to open weather api restriction
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, process.env.IP, () => {
	console.log(`Server started on port ${PORT}.`);
});
