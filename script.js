
let attractions;

// TODO: load the dataset 
fetch('./attractions.json')
    .then(res => res.json())
    .then(data => {
        attractions = data;
        attractions.sort(topFiveSort);
        filterData();
    }
);


function topFiveSort(first, second) {
    return second.Visitors - first.Visitors;
}

function filterByCategory(item) {
    return item.Category === this.toString();
}

function filterData(category = 'all') {
    // TODO: filter attractions by the selected category
    // TODO: filter top 5 attractions
    let topFive;
    
    if(category !== 'all') {
        let temp = attractions.filter(filterByCategory, category);
        topFive = temp.slice(0, 5);
    } else {
        topFive = attractions.slice(0, 5);
    }
    renderBarChart(topFive);

}


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

const selectElement = document.querySelector('#attraction-category');

selectElement.addEventListener("change", function(event){
    let category = event.target.value;
    filterData(category);
});