let url = "https://fakestoreapi.com/products";

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(item => {
            let colDiv = document.createElement("div");
            colDiv.className = "col-md-3 mb-4"; 

            let cardDiv = document.createElement("div");
            cardDiv.className = "store-card card h-100"; 

            let img = document.createElement("img");
            img.src = item.image;
            img.className = "card-img-top";

            let cardBody = document.createElement("div");
            cardBody.className = "card-body";

            let text = document.createElement("h5");
            text.className = "card-title";
            text.textContent = item.title;

            let price = document.createElement("p");
            price.className = "card-text";
            price.textContent = `Price: $${item.price}`;

            cardBody.appendChild(text);
            cardBody.appendChild(price);

            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);
            colDiv.appendChild(cardDiv);

            document.getElementById('row').appendChild(colDiv); 
        });
    })