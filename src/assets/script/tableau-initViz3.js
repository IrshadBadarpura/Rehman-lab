function initViz3() {

    var containerDiv = document.getElementsByTagName('app-ribo').item(0).getElementsByTagName('div').item(18),
  
    url = "https://public.tableau.com/shared/YRZFR5BTX?:display_count=y&:origin=viz_share_link",
  
    options = {
        
    height: 3260,

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