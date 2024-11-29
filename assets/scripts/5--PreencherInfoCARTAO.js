function toggleCartaoForm(showForm) {
    var cartaoForm = document.getElementById("cartao-form");

    if (showForm) {
        cartaoForm.classList.remove("collapsed");
    } else {
        cartaoForm.classList.add("collapsed");
    }
}