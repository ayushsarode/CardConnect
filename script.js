const cardContainer = document.getElementById('cardContainer')
fetch("./db.json")
    .then(res => res.json())
    .then((user) => {
        cardContainer.innerHTML = user.map((data)=>{
            return(`<figure class="Card">
                <div class="profile-image"><img src=${data.img}
                    alt="profile-sample6" /></div>
                <figcaption>
                    <h3>${data.name}</h3>
                    <h5 class="Main">${data.role}</h5>
                    <div class="line"></div>
                    <div class="icons">
                        ${data.github ? `<a href=${data.github} target="_blank"><i class="ion-social-github" class="github"></i></a>`:""}
                        ${data.twitter ? `<a href=${data.twitter} target="_blank"> <i class="ion-social-twitter" class="twitter"></i></a>`:""}
                        ${data.linkedIn ? `<a href=${data.linkedIn} target="_blank"> <i class="ion-social-linkedin" class="linkedin"></i></a>`:""}
                    </div>
                </figcaption>
            </figure>`)
        }
        ).join("")
    })