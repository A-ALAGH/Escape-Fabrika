var myChart = echarts.init(document.getElementById("chart"));
myChart.showLoading();

$.get(
  "https://code.highcharts.com/mapdata/custom/world-continents.geo.json",
  function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap("world", usaJson, {});
    option = {
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
          var value = (params.value + "").split(".");
          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
          return params.name;
        }
      },


      toolbox: {
        show: true,
        //orient: 'vertical',
        left: "left",
        top: "top",
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "World Population",
          type: "map",
          map: "world",
          itemStyle: {
            emphasis: {
              label: {
                show: false
              }
            }
          },
          zoom: 1.2,
          data: [
            {
              name: "Europe",
              url: "https://fr.wikipedia.org/wiki/Europe"            },
            {
              name: "Oceania",
              url: "https://fr.wikipedia.org/wiki/Oc%C3%A9anie"            },
            {
              name: "Africa",
              url: "https://fr.wikipedia.org/wiki/Afrique",
            },
            {
              name: "Asia",
              url: "https://fr.wikipedia.org/wiki/Asie"            },
            {
              name: "North America",
              url: "https://fr.wikipedia.org/wiki/Am%C3%A9rique"            },
            {
              name: "South America",
              url: "https://fr.wikipedia.org/wiki/Am%C3%A9rique"            }
          ]
        }
      ]
    };

    myChart.setOption(option);
  }
);
myChart.on("click", function (params) {
    // vérifier que le clic est sur une barre
    if (params.componentType === "series") {
      // récupérer l'url associée à la barre
      var url = params.data.url;
      // ouvrir l'url dans une nouvelle fenêtre
      window.open(url);
    }
  });
  
  // définir les options du graphique
  var option = {
    // ...
    series: [
      {
        // ...
        data: data,
        tooltip: "none" // désactiver le tooltip
      }
    ]
  };
