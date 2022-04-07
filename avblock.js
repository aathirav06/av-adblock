try {

    chrome.declarativeNetRequest.onBeforeRequest.addListener(function(details){
          console.log(" blocked:", details.url)
          return {cancel: true}
      },
      {urls: blocked_sites_v2,blocked_sites_v3},
      ["blocking"]
    );
    } catch (e) {
      console.log(e);
    }
     
