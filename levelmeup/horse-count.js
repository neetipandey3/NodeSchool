/** 
 * LEVEL ME UP SCOTTY!!
 * Horse Count (Exercise 7 of 12)
 * 
 * 
 *   You have been provided with a rich and valuable data-set that you need to  
  provide a simple query interface to.  
   
  In this exercise you will be given a LevelDB store that contains over  
  2,000 tweets from [@horse_js](https://twitter.com/horse_js). Your job is  
  to query this dataset and return the number of tweets that occur from a  
  given date to the end of the data set.  
   
  Each entry is a single tweet. The key is the exact time that the tweet was  
  sent, in standard ISO date format (i.e. the format generated by the Date  
  object's toISOString() method.) The value of the entry is simply a String  
  representing the tweet's content.  
   
  Write a module that exports a single function that accepts three  
  arguments: an instance of an existing LevelUP database, a date string, of  
  the form YYYY-MM-DD and a callback function.  
   
  The first argument returned on the callback should be an Error if one  
  occurred or null. The second argument, if there was no error, should be an  
  integer, representing the number of tweets since that date.  
   
  Your solution will be checked against the official solution to ensure that  
  your query is targeting the exact range (see details below). The output  
  will include the number of "streamed entries".
 * 
*/

var level = require('level')
module.exports = function (databaseDir, date, callback) {  
    // .. your code here  
    var leveldb = level(databaseDir)  
    var tweetCount = 0
    var error
    var resultream = leveldb.createReadStream({gte: date})
    resultream.on('data', function (data) {
            tweetCount++ 
          })
    resultream.on('error', function(err){
            error = err
          })
    resultream.on('end', function () {
            leveldb.close(function(err) {
            callback(error || err, tweetCount)
          })
        })
   
  }


