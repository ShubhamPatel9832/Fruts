

const mainFrutsContainer = document.querySelectorAll(".mainFrutsContainer");
const imageContainers = document.querySelectorAll(".imageContainer"); // Note plural naming

mainFrutsContainer.forEach(container => {
    container.addEventListener("click", () => {
        mainFrutsContainer.forEach(item => {
            item.style.border = " 1px solid rgb(238,238,238) ";
        });

        container.style.borderLeft = "1px solid rgb(238,238,238);";
        container.style.borderLeft = "4px solid rgb(36,150,63)";

        // imageContainers.forEach(image => {
        //     image.classList.add("increseImage");
        // });
    });
});
