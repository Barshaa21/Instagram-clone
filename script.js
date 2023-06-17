const contents = [
  {
    content: "Random",
    photo: "https://picsum.photos/400?random=3"
  },
  {
    content: "Any",
    photo: "https://placeimg.com/400/400/any"
  },
  {
    content: "Nature",
    photo: "https://placeimg.com/400/400/nature"
  },
  {
    content: "Travel",
    photo: "https://placeimg.com/400/400/travel"
  },
  {
    content: "Arch",
    photo: "https://placeimg.com/400/400/arch"
  },
  {
    content: "Animals",
    photo: "https://placeimg.com/400/400/animals"
  },
  {
    content: "Grayscale",
    photo: "https://placeimg.com/400/400/grayscale"
  }
];
const contentContainer = document.getElementById("story");
function generateContentDiv(content, photo) {
  const divElement = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = content.photo;
  divElement.appendChild(imgElement);

  if (content.content.length > 10) {
    const truncatedContent = content.content.slice(0, 10) + "...";
    const textNode = document.createTextNode(truncatedContent);
    divElement.appendChild(textNode);
  } else {
    const textNode = document.createTextNode(content.content);
    divElement.appendChild(textNode);
  }

  return divElement;
}

for (let i = 0; i < contents.length; i++) {
  const divElement = generateContentDiv(contents[i]);
  contentContainer.appendChild(divElement);
}
