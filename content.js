

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if(message.txt=='clicked'){
        document.querySelectorAll('textarea').forEach((input) => {
        console.log(input.value);
  });
}
    
}






