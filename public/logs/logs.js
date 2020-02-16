getData();

async function getData() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    },
  };
  const response = await fetch('/api/getall',options);
  console.log("api chal rha h");
  const json = await response.json();
  console.log("json chal rha h",json);
  const root1 = document.getElementById("row");
  
  for (item of json) {
    console.log(item)
    const root = document.createElement('div');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');
    root.style.textAlign = "center"
    root.style.fontSize = "15px"
    root.style.paddingBottom = "3%"
     root.style.fontStyle = "oblique"
   console.log("for  chal rha h");

    mood.textContent = `Hashtag: ${item.story}`;
    geo.textContent = `${item.lat}°, ${item.longi}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = item.date;
    image.src = item.image;
    image.alt = 'Try to make a good Expression';

    root.append(mood,geo,date,image);
     root.classList.add("col-xs-12")
      root.classList.add("col-md-6")
    root.classList.add("col-lg-4")
    
    //document.("data").appendChild(root)
    root1.appendChild(root);
  }
    console.log("for k baahr chal rha h");
  console.log(data);
}


