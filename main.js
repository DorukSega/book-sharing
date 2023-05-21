const ContainerContainer = { "thome": "head", "ttrades": "trades", "tsettings": "settings" }

window.onload = () => {
    Array.from(document.getElementsByClassName("tab")).forEach(tab =>
        tab.addEventListener("click", tked => {
            const tid = tab.getAttribute("id");
            const VisibleContainer = document.querySelector(".container.visible")
            const VisContName = document.querySelector(".container.visible").getAttribute("id");

            if (VisContName && tid && ContainerContainer[tid] !== VisContName) {
                //VisibleContainer.classList.remove("visible");
                //document.getElementById(ContainerContainer[tid]).classList.add("visible");
            }
        })
    )
}