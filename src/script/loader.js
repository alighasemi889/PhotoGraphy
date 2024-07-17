// Create a function to display the loader
function showLoader() {
    document.getElementById("loader-container").style.display = "block";
  }
  
  // Create a function to hide the loader
  function hideLoader() {
    document.getElementById("loader-container").style.display = "none";
  }
  
  // Use Ajax to load data from a server-side script
  function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "server-side-script.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        // Process the response data here
        console.log(response);
      } else {
        console.error("Error loading data:", xhr.statusText);
      }
      hideLoader(); // Hide the loader once the data is loaded
    };
    xhr.send();
  }
  
  // Call the loadData function when the page loads
  window.onload = function() {
    showLoader(); // Show the loader before making the Ajax request
    loadData();
  };


  