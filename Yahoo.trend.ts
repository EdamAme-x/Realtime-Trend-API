fetch("https://search.yahoo.co.jp/realtime", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "ja,en-US;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"118.0.5993.88\", \"Google Chrome\";v=\"118.0.5993.88\", \"Not=A?Brand\";v=\"99.0.0.0\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://www.google.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
  .then(r => r.text())
  .then(d => {
    const trends = new DOMParser().parseFromString(d, "text/html");
    const firstList = Array.from(trends.querySelector("#atkey > section").querySelectorAll("ol")[0].children);
    const secondList = Array.from(trends.querySelector("#atkey > section").querySelectorAll("ol")[1].children);
    const combinedList = firstList.concat(secondList);
    console.log(combinedList);
  });
