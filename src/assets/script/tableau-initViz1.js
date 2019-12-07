function initViz1() {

    var containerDiv = document.getElementsByTagName('app-ribo').item(0).getElementsByTagName('div').item(12),
  
    url = "https://public.tableau.com/views/Bar-Plot/BarPlot?:display_count=y&publish=yes&:origin=viz_share_link",
  
    options = {
        
    height: 500,

    width: 800,
    
    hideTabs: true,
  
    onFirstInteractive: function () {
  
    console.log("Run this code when the viz has finished loading.");
  
    }
  
    };
  
   
  
    if(viz != null) {
  
    viz.dispose();
  
    }
  
   
  
    var viz = new tableau.Viz(containerDiv, url, options);
  
    // Create a viz object and embed it in the container div.
  }