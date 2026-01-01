const btn = document.querySelector("#btn")
btn.onclick = () => {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
}

let CardWrapper = document.querySelector("#Cards_Wrapper");
for (let i = 1; i < 19; i++) {
    if(i==7){
        continue;
    }
    CardWrapper.innerHTML += `
        <div class="cards child hover:cursor-pointer"  onclick="window.location.href='./singleItem.html'" >
            <div class="p-2 px-1 bg-gray-200 rounded-md hover:border-[red]">
              <div
                class="rounded-full shadow-md px-4 py-2 text-sm   inline-flex items-center justify-center bg-gray-300 m-2"
              >
                <span class="text-[red] ">Sale !</span>
              </div>
              <figure>
                <img src='../assets/img/img-${i}.png' alt="" class="w-full" />
              </figure>
            </div>
            <div class="flex flex-col space-y-1 pt-3">
              <span class="font-semibold text-gray-700"
                >Back Cover - of phone
              </span>
              <span class="font-semibold text-gray-700"> LKR 11${i-10}</span>
            </div>
        </div>
          `;
}