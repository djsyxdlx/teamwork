var url = ["./images/image1.jpg","./images/image2.jpg", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.jpg", "./images/image6.jpg", "./images/image7.jpg", "./images/image8.jpg"];

PhotoGalleryLib.onSizeClassChange(function (a) {
    console.log(a);
    var child = document.getElementById("imagesGrid");// 拿到待删除节点
    var parent = document.getElementById("mainBody");// 拿到父节点
    parent.removeChild(child);//删除节点
    var Grid = PhotoGalleryLib.generateGrid(url, a);
    parent.appendChild(Grid);//加入节点
})
