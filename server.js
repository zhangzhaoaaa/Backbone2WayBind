/**
 * Created by mike on 16-1-26.
 */
var express        = require( 'express' );
var http           = require( 'http' );
var path           = require( 'path' );
var static         = require( 'serve-static' );
var fs             = require( 'fs');
var app            = express();

// all environments
app.set( 'port', process.env.PORT || 3001 );
app.engine( 'html', require('ejs').renderFile);

app.set( 'views', path.join( __dirname, 'sample/mvc/pages' ));
app.set( 'view engine', 'html' );
app.use( static( path.join( __dirname, 'sample/mvc' )));

app.get('/notification',function(req, res, next) {
    res.render('notification', { title: 'Express' });
});

app.get('/shoppingcart',function(req, res, next) {
    res.render('shoppingcart', { title: 'Express' });
});

app.get(    '/getNixle',      function(req,res,next){
    var data={
        nixleId:'1',
        nixleTitle:'123',
        nixleMessage:'1234',
        nixleCheck:[]
    };
    res.send({
        message:"success",
        data:data
    });
});
http.createServer( app ).listen( app.get( 'port' ), function (){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
});