document.addEventListener("DOMContentLoaded", function () {
    var photos = [];
    var imageList = [];
    var captions = [];
    var hoverTexts = [];
    var descriptions = [];

    var captionTexts = [
        "Beautiful Winter", "Snow Land", "Winter Road",
        "Frosty Morning", "Frozen Lake", "Icicles Hanging"
    ];

    var descTexts = [
        "A beautiful winter landscape covered in snow.",
        "Most of plants and animals are having their hibernation period...",
        "A quiet road covered in a thick layer of snow.",
        "Sunlight glows through frozen trees in the morning.",
        "A still lake, frozen in time.",
        "Icicles form beautiful patterns on the trees."
    ];

    for (var i = 0; i < captionTexts.length; i++) {
        photos.push("<img src='images/images/winterland" + (i + 1) + ".jpg' alt='" + captionTexts[i] + "'>");
        captions.push("<div class='caption'>" + captionTexts[i] + "</div>");
        hoverTexts.push("<div class='hover-text'>" + captionTexts[i] + "</div>");
        descriptions.push(descTexts[i]);

        var imageItem = "<li class='photo' data-title='" + captionTexts[i] + "' data-desc='" + descriptions[i] + "'>" +
            photos[i] + hoverTexts[i] + "<div class='desc-text'>" + descriptions[i] + "</div>" + captions[i] + "</li>";

        imageList.push(imageItem);
    }

    document.getElementById("album").innerHTML = imageList.join("");

    // Handle Click to Open Info Box
    var infoBox = document.getElementById("infoBox");
    var infoTitle = document.getElementById("infoTitle");
    var infoText = document.getElementById("infoText");
    var closeInfo = document.getElementById("closeInfo");

    document.querySelectorAll(".desc-text").forEach(desc => {
        desc.addEventListener("click", function () {
            infoTitle.textContent = this.closest(".photo").getAttribute("data-title");
            infoText.textContent = this.closest(".photo").getAttribute("data-desc");
            infoBox.style.display = "block";
            document.body.classList.add("info-active"); // Darken background
        });
    });

    closeInfo.addEventListener("click", function (e) {
        e.preventDefault();
        infoBox.style.display = "none";
        document.body.classList.remove("info-active"); // Remove dark background
    });
});
