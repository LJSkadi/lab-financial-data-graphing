const stockInfo  = axios.create({
    baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json',
  });
  let now = new Date;

 function getStringfromDate(date){
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  return `${day}.${month}.${year}`
 }
  
  stockInfo.get(`${stockTicket}/chart`)
    .then(function (response) {
      console.log(response);
      printTheChart(response.data);
    })
    .catch(function (error) {
      console.log(error);
  });

  
  let sD = document.getElementById("startDate");
  let eD = document.getElementById("endDate");

  sD.addEventListener('input', ()=>{
      console.log('INPUT CHANGED!', sD.value)
  })

  eD.addEventListener('input', ()=>{
    console.log('INPUT CHANGED!', eD.value)
})


  let startDate = document.getElementbyId
  
  let printTheChart = ((stockData) => {
    let stockDate = Object.keys(stockData.bpi);
    let stockValue= Object.values(stockData.bpi);
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockDate,
        datasets: [{
          label: "Stock Chart",
        //   backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockValue,
        }]
      }
    });
  });