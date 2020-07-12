/*Spreadsheet- A1- Title
B2- "flag"
A2 onwards- list websites/email addresses, Example: "facebook.com" or "abc@googlegroups.com"
*/
function scrapeSheet() {
  //Loading the spreadsheet - SheetID is unique
  var spreadsheetId = '<inset your sheet ID>';
  var ss = SpreadsheetApp.openById(spreadsheetId).getSheetByName("Sheet1");
  var data = ss.getDataRange().getValues();
  for(i = 1; i<data.length;i++)
  {
    values = [];
    //check for flag for previous execution
    if(data[i][1]=="flag" && i <data.length)
    {
      values = [data[i][0]];
      //Logger.log(values);
      //Moving the Flag
      if(ss.getRange(i+2, 1).isBlank())
      {
        ss.getRange(i+1,2).setValue("")
        ss.getRange(2,2).setValue("flag");
        Logger.log(values);
        emailDelete(values);
      }
      
      else
      {
        ss.getRange(i+1,2).setValue("")
        ss.getRange(i+2,2).setValue("flag");
        Logger.log(values);
        emailDelete(values);
      }
    }
    //Calling the emailDelete function
    //emailDelete(values);
  }
}
