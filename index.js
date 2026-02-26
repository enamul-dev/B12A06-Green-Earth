const categories = [
{
"id": 1,
"category_name": "Fruit Tree",
"small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
},
{
"id": 2,
"category_name": "Flowering Tree",
"small_description": "Trees grown for their beautiful and fragrant flowers."
},
{
"id": 3,
"category_name": "Shade Tree",
"small_description": "Large trees providing cool shade and shelter."
},
{
"id": 4,
"category_name": "Medicinal Tree",
"small_description": "Trees valued for their healing and herbal properties."
},
{
"id": 5,
"category_name": "Timber Tree",
"small_description": "Trees cultivated for strong, valuable wood."
},
{
"id": 6,
"category_name": "Evergreen Tree",
"small_description": "Trees that remain green throughout the year."
},
{
"id": 7,
"category_name": "Ornamental Plant",
"small_description": "Plants grown for decorative purposes indoors or outdoors."
},
{
"id": 8,
"category_name": "Bamboo",
"small_description": "Fast-growing versatile plants with woody stems."
},
{
"id": 9,
"category_name": "Climber",
"small_description": "Plants that grow by climbing on supports."
},
{
"id": 10,
"category_name": "Aquatic Plant",
"small_description": "Plants that grow in or near water bodies."
}
]


const treeContainer = document.getElementById("categoryTree");

categories.forEach(category => {
  const li = document.createElement("li");
  li.textContent = category.category_name; 
  treeContainer.appendChild(li);
});

// GG


const trees = [
 {
"id": 1,
"image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
"name": "Mango Tree",
"description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
"category": "Fruit Tree",
"price": 500
},
{
"id": 2,
"image": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
"name": "Guava Tree",
"description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.",
"category": "Fruit Tree",
"price": 350
},
{
"id": 3,
"image": "https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg",
"name": "Jackfruit Tree",
"description": "A large tropical tree that bears the world’s biggest fruit, the jackfruit. Its sweet and aromatic flesh is both nutritious and filling, and the tree itself provides generous shade.",
"category": "Fruit Tree",
"price": 800
},
{
"id": 4,
"image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
"name": "Gulmohar",
"description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
"category": "Flowering Tree",
"price": 400
},
{
"id": 5,
"image": "https://i.ibb.co.com/qY8qS7YN/champa-min.jpg",
"name": "Champa",
"description": "A fragrant flowering tree that adorns gardens with its delicate white blossoms. Widely cherished in traditional rituals and perfumery.",
"category": "Flowering Tree",
"price": 300
},
{
"id": 6,
"image": "https://i.ibb.co.com/MxPrt83c/Krishnachura-min.jpg",
"name": "Krishnachura",
"description": "A striking ornamental tree famous for its brilliant orange-red blossoms. Its wide canopy adds a festive charm to parks and roadsides.",
"category": "Flowering Tree",
"price": 450
},

];


function displayTrees() {
  const treeContainer = document.getElementById("treeContainer");

  treeContainer.innerHTML = ""; // clear any existing content

  trees.forEach(tree => {
    // Create a card div
    const card = document.createElement("div");
    card.className = "card";

    // Fill card with tree info
    card.innerHTML = `
      <img src="${tree.image}" alt="${tree.name}" class="w-[850px] h-64 gap-4">
      <h3 class="font-bold">${tree.name}</h3>
      <p>${tree.description}</p>
      <span style="display: flex; justify-content: space-between">
      <button>Fruit</button>
      <p>Price: $${tree.price}</p>
      </span>
      <button class="bg-green-700 px-4 py-2 rounded-full text-white">Plant a Tree</button>
    `;

    // Add card to treeContainer
    treeContainer.appendChild(card);
  });
}


 displayTrees();



//  Modal


// Get elements
const treeContainerElement = document.getElementById("treeContainer");

// Attach event listener to this variable
treeContainerElement.addEventListener("click", () => {
  treeModal.classList.remove("hidden");
  treeModal.classList.add("flex");
});


// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
  treeModal.classList.add("hidden");   // hide modal
  treeModal.classList.remove("flex");
});

// Optional: close modal when clicking outside modal content
treeModal.addEventListener("click", (e) => {
  if (e.target === treeModal) { 
    treeModal.classList.add("hidden");
    treeModal.classList.remove("flex");
  }
});




function displayTrees() {
  const treeContainer = document.getElementById("treeContainer");
  treeContainer.innerHTML = ""; // clear any existing content

  trees.forEach(tree => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${tree.image}" alt="${tree.name}" class="w-[850px] h-64 gap-4 rounded">
      <h3 class="font-bold">${tree.name}</h3>
      <p>${tree.description}</p>
      <span style="display: flex; justify-content: space-between">
        <button>${tree.category}</button>
        <p>Price: $${tree.price}</p>
      </span>
      <button class="bg-green-700 px-4 py-2 rounded-full text-white">Plant a Tree</button>
    `;

    // Attach click event to each card
    card.addEventListener("click", () => {
      document.getElementById("demo").innerText = tree.name; // show name in modal
      document.getElementById("modalImage").src = tree.image;
      document.getElementById("modalCategory").innerText = "Category: " + tree.category;
      document.getElementById("modalPrice").innerText = "Price: " + tree.price;
      document.getElementById("modalDescription").innerText = tree.description;


      treeModal.classList.remove("hidden");
      treeModal.classList.add("flex");
    });

    treeContainer.appendChild(card);
  });
}
