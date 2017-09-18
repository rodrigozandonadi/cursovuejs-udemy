module.exports = function(application){
  application.get('/', function(req, res){
        res.render('index'); 
  });

  application.get('/classbinding', function(req, res){
        res.render('classbinding'); 
  });

  application.get('/aula19', function(req, res){
      res.render('aula19'); 
});
}