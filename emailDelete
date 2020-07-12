/*

Note: Unsubscribing is still the better option. 

East to run code and delete emails. Everything adds up! 

Some emails might become junk after a while- so you can set it to run after many days
*/
function emailDelete(senders) {
  
  
  //Creating a variable with today's date
  var date = new Date();
  //Days to subtract
  n=7
  //Subtracting n days
  var result = new Date(date.getTime()-n*(24*3600*1000));
  //Formatting the date
  formattedDate = Utilities.formatDate(result, "GMT", "yyyy/MM/dd");
  
  //Loop to go through senders
  for(j=0; j<senders.length; j++)
  {
    //Searching for a thread
    var threads = GmailApp.search('from:('+senders[j]+') before:'+formattedDate);
    Logger.log('from:'+senders[j]+' ' +'before:'+formattedDate);
    Logger.log(threads.length)
    //moveToTrash()
    if(threads.length>0)
    {
      //Loop max counter - 10 messges or thread length - whichever is lower
      max=500;
      if(threads.length<500)
      {
        max = threads.length;
      }
      for(i = 0; i < max; i++){
        //Use the following IF statement if you want to preserve emails marked as starred or important
        //if(!threads[i].hasStarredMessages() || !threads[i].isImportant())
        //{
          Logger.log(threads[i].getFirstMessageSubject());
          threads[i].moveToTrash();
        //}
      }
    }
  }
}
  
