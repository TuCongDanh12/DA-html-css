let x = document.getElementsByClassName("ele");

// Lặp qua các phần tử có class là menu
for (let i = 0; i < x.length; i++) {
    
    // Lắng nghe sự kiện click
    // và đổi phông màu
    x[i].onclick = function() {
        this.style.backgroundColor = "#CCFFCC"
    };
}
