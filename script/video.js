  
//   create load catagories
const loadCatagories = () => {
    // fetch the data
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
};
const loadVideos = () => {
    // fetch the data
   fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error));
};

// create display catagories
const displayCategories =(categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to category container
        categoryContainer.appendChild(button);
    })
};

// create display videos
const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('videos');
    videos.forEach(video => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
         <figure class="h-[200px]">
            <img class="h-full w-full object-cover" src=${video.thumbnail} alt="Shoes" />
         </figure>
         <div class="px-0 py-2 flex gap-2">
            <div>
               <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
            </div>
            <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex item-center gap-2">
                <p class="text-gray-400">${video.authors[0].profile_name}</p>
                <img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
            </div>
            
            <p></p>
            </div>
                
         </div>
        `;
        videoContainer.appendChild(card);
    })
};

loadCatagories();
loadVideos();

