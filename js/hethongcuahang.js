document.addEventListener("DOMContentLoaded", function() {
  const provinceSelect = document.getElementById("province");
  const districtSelect = document.getElementById("district");
  const storeItems = document.getElementsByClassName("store-item");
  const allDistricts = [];
  for (let i = 0; i < districtSelect.options.length; i++) {
    allDistricts.push(districtSelect.options[i].cloneNode(true));
  }

  provinceSelect.addEventListener("change", function() {
    const selectedProvince = this.value;
    districtSelect.options.length = 0; 
    
    allDistricts.forEach(function(option) {
      if (!option.dataset.province || option.dataset.province === selectedProvince) {
        districtSelect.appendChild(option.cloneNode(true));
      }
    });
    
    districtSelect.dispatchEvent(new Event("change"));
  });

  districtSelect.addEventListener("change", function() {
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = this.value;
    let firstVisibleStore = null; 
    
    Array.from(storeItems).forEach(function(item) {
      let shouldShow = false;
      
      if (selectedDistrict !== "") {
        shouldShow = (item.dataset.district === selectedDistrict);
      } else if (selectedProvince !== "") {
        shouldShow = (item.dataset.province === selectedProvince);
      } else {
        shouldShow = false; 
      }

      if (shouldShow) {
        item.style.display = "block"; 
        if (!firstVisibleStore) {
          firstVisibleStore = item;
        }
      } else {
        item.style.display = "none";
      }
    });

    const mapFrame = document.getElementById("khung-map");
    
    if (firstVisibleStore && mapFrame) {
      const mapLinks = firstVisibleStore.getElementsByClassName("btn-map");
      
      if (mapLinks.length > 0) {
        mapFrame.src = mapLinks[0].href;
      }
    } 
  });

  provinceSelect.dispatchEvent(new Event("change"));

});