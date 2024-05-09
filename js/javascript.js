

let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

fetch(url)
    .then(res => res.json())
    .then(data => {
        
        console.log(data)

        let html = `<div class="container text-center row row-cols-3 col-3 mt-3 mb-3 ms-1">`
        for (let drink of data.drinks) {
            
  
        html += `<div class="border border-primary rounded">
                <img src="${drink.strDrinkThumb}" class="img-fluid">
                    <h5>
                        <p>${drink.strCategory} - ${drink.strGlass}</p>
                    </h5>
                    <p>${drink.strInstructionsES}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${drink.strIngredient1}</li>
                        <li class="list-group-item">${drink.strIngredient2}</li>
                        <li class="list-group-item">${drink.strIngredient3}</li>
                    </ul>
                        <a href="${drink.strDrinkThumb}"> 
                            Enlace de Imagen 
                        </a> 
                    </p>
            </div>`
        }
        html += `</div>`
        

        document.getElementById("charContent").innerHTML = html
    })





