
            // $(document).ready(function () {
                $("button").on("click", function (){ 
                
                var restaurant = $(this).attr("data-person");
    
                var inputValue = document.querySelector('.inputValue')
    
    
                function userAction() {
    
                    let box = [];
                    // async function getRestaurants() {
                    let url1 = "https://developers.zomato.com/api/v2.1/search?count=20&lat=34.052235&lon=-118.243683&category=3";
                    let url2 = "https://developers.zomato.com/api/v2.1/search?entity_id=295&entity_type=city";
                    let url3 = "https://developers.zomato.com/api/v2.1/search?count=50&lat=40.2861946111111&lon=-97.6772406111111&radius=50M&sort=real_distance&order=asc";
                    let urlEx = "https://developers.zomato.com/api/v2.1/cities?q=ottawa"
                    var urlCity = "https://developers.zomato.com/api/v2.1/cities?q=" + inputValue.value + ""
                    let h = new Headers();
    
    
    
                    h.append('Accept', 'application/json')
                    h.append('user-key', 'f645d0cea8ceba7e089ecf510192d4fa')
                    let req = new Request(urlCity, {
                        method: 'GET',
                        headers: h,
                        mode: 'cors'
                    });
                    fetch(req).then(function (response) {
                        return response.json();
                    }).then(function (jsonData) {
                        var cityData = (jsonData);
                        console.log(cityData);
                        console.log(cityData.location_suggestions[0].id);
    
                        let urlRes = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityData.location_suggestions[0].id + "&entity_type=city"
                        console.log(urlRes)
    
                        let req1 = new Request(urlRes, {
                            method: 'GET',
                            headers: h,
                            mode: 'cors'
                        });
                        fetch(req1).then(function (response) {
                            return response.json();
                        }).then(function (jsonData1) {
                            var resData = (jsonData1);
                            console.log(resData)
    
                            $.each(resData.restaurants, function (index, value) {
                                console.log(value)
                                var name = value.restaurant.name;
                                console.log(name)
                                var city = value.restaurant.location.city;
                                console.log(city);
                                var rating = value.restaurant.user_rating.aggregate_rating;
                                console.log(rating)
                                var cuisine = value.restaurant.cuisines;
                                console.log(cuisine);
                                var image = value.restaurant.thumb;
                                console.log(image);
                                var price = value.restaurant.average_cost_for_two;
                                console.log(price);
                                console.log(contact);
                                var contact = value.restaurant.phone_numbers;
                                var visit = value.restaurant.menu_url;
                                var reviews = value.restaurant.highlights
                                console.log(reviews)
                                var res_id = value.restaurant.R.res_id
                                console.log(res_id)
    
                                $('.cardio').append(`
    <br>
    
    
    <div class="tile">
    <article class="column is-multiline">
        <div class="column is-12 post-img">
            <img src="${image}" alt="Featured Image">
        </div>
        <div class="column is-12 featured-content ">
            <h3 class="heading post-category">${city}</h3>
            <h1 class="title post-title">${name}</h1>
            <h3 class="heading post-category">${rating}</h3>
            <p class="post-excerpt">${contact}</p>
            <p class="post-excerpt">What to expect? ${reviews.slice(1, 5)}</p>
            <br>
            <a href="restaurant.html" class="button is-primary resClick">${name}</a>
        </div>
    </article>
    </div> 
    
    
    `)
                            })
    
    
    
                        })
    
                    });
                }
    
                userAction();
            })
        