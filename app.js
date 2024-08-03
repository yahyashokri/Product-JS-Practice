var products = [
    {
      name: "product 1",
      price: 10,
      id: 133,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/c6691393f9fdaa6f782f6b3b1a2f73116d06afa2_1713612612.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 2",
      price: 17,
      id: 234,
      hasDiscount: true,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/e304670318e5c446e4a0a661dadd2e33adebd31f_1620216702.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 3",
      price: 31,
      id: 534,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/02f0e34a248303807e175d1cd7e61dc7d50782c5_1708417372.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 4",
      price: 43,
      id: 131,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/b7502b55d6b4a22495d10e6901526c2b9e4d01e9_1691071853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      name: "product 5",
      price: 13,
      id: 34,
      hasDiscount: true,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/8590fddfbec8d88efc47aa73b9ac7f348d651463_1714194467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];
  function createPTag() {
       var pTag = document.createElement("p");
       return pTag;
     }
  function createATag() {
         var aTag = document.createElement("a");
         return aTag;
  }
  function callProducts(){
    for (var index = 0; index < products.length; index++) {
      var product = products[index];
     var objectKeys = Object.keys(product);
     objectKeys.forEach( function(element) {
      var objectValue = product[element];
      if (element == "name" || element == "price" || element == "id") {
        var tag = createPTag();
        tag.innerText = element + ": " + objectValue
        tag.setAttribute("class", "txt")
        document.getElementById(`product${index+1}`).appendChild(tag)
      }
      if (element == "hasDiscount") {
        if (objectValue == true) {
          var tag = createPTag()
          tag.innerText = "Discount" + ": " + "Yes"
          tag.setAttribute("class", "txt")
          document.getElementById(`product${index+1}`).appendChild(tag)
        }
        else if (objectValue == false) {
          var tag = createPTag()
          tag.innerText = "Discount" + ": " + "No"
          tag.setAttribute("class", "txt")
          document.getElementById(`product${index+1}`).appendChild(tag)
        }
        }
      if (element == "imageSrc") {
        var tag = createATag()
          tag.setAttribute("href", objectValue)
          tag.setAttribute("class", "img")
          document.getElementById(`product${index+1}`).appendChild(tag)
      };

      

     })
    }
  }
  callProducts()