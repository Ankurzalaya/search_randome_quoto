var arrayOfQuotes = [
  {
    "quote": "पर्यटन् पृथिवीं सर्वां, गुणान्वेषणतत्परः।"
  },
  {
    "quote": "हदये सुखसम्पत्तिः पदे पर्यटनं फलम्।"
  },
  {
    "quote": "चरैवेति चरैवेति॥"
  },

  {
    "quote": "यस्मिन्प्रचीर्णे च पुनश्चरन्ति; स वै श्रेष्ठो गच्छत यत्र कामः। "
  },

  {
    "quote": "चरन्ति वसुधां कृत्स्नां वावदूका बहुश्रुताः।"
  },

  {
    "quote": " चरन्मार्गान्विजानाति |"
  },

  {
    "quote": " आस्ते भग आसीनस्य, ऊध्वर्स्तिष्ठति तिष्ठतः।"

  }
]

function randomSelector(arrayLength){
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
  var randomNumber = randomSelector(arrayOfQuotes.length)
  document.getElementById("quoteOutput").innerHTML = ` Quote :- " ${arrayOfQuotes[randomNumber].quote} "`;
  // document.getElementById("authorOutput").innerHTML = `Author :- " ${arrayOfQuotes[randomNumber].author} "`;
  // document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote  + '"';
  // document.getElementById("authorOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].author  + '"';
}