let data = [];
for (let i = 0; i < 90; i++) {
  let date = new Date();
  date.setDate(date.getDate() - i);
  data.push({
    "time": date.toISOString(),
    "lowPrice": Math.floor(Math.random() * 15),
    "averagePrice": Math.floor(Math.random() * 25),
    "highPrice": Math.floor(Math.random() * 30)
  });
}
console.log(JSON.stringify(data, null, 2));