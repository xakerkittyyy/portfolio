  const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JS', 'PUG', 'SASS'],
        datasets: [{
            label: '# of Votes',
            data: [100, 100, 60, 100, 100],
            backgroundColor: [
                '#818181',
                '#D5D5D5',
                '#818181',
                '#D5D5D5',
                '#818181',
                '#D5D5D5'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales:{
          x:{
            ticks:{
              color:'#D5D5D5',
              font:{
                size:24,
                family: 'tenorSans'
              }
            }
          },
          y:{
            ticks:{
              color:'#D5D5D5',
              font:{
                size:15,
                family: 'philosopher'
              }
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
          }
    }
    }    
});


const pug = document.getElementById("tabs-pug"),
sass = document.getElementById("tabs-sass"),
js = document.getElementById("tabs-js");
html = document.getElementById("tabs-hh");

function pugActive() {
pug.classList.remove('hidden');
sass.classList.remove('active');
js.classList.remove('active');
html.classList.remove('active');

pug.classList.add('active');
sass.classList.add('hidden');
js.classList.add('hidden');
html.classList.add('hidden');
}

function sassActive() {
pug.classList.remove('active');
sass.classList.remove('hidden');
js.classList.remove('active');
html.classList.remove('active');

pug.classList.add('hidden');
sass.classList.add('active');
js.classList.add('hidden');
html.classList.add('hidden');
}

function jsActive() {
pug.classList.remove('active');
sass.classList.remove('active');
js.classList.remove('hidden');
html.classList.remove('active');

pug.classList.add('hidden');
sass.classList.add('hidden');
js.classList.add('active'); 
html.classList.add('hidden');
}

function htActive() {
pug.classList.remove('active');
sass.classList.remove('active');
js.classList.remove('active');
html.classList.remove('hidden');


pug.classList.add('hidden');
sass.classList.add('active');
js.classList.add('hidden');
html.classList.add('active');
}
