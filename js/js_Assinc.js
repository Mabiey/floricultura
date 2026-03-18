async function carregarPagina(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar: ${response.status}`);
        }
        const conteudo = await response.text();
        // Extrai só o corpo da página (opcional)
        const temp = document.createElement("div");
        temp.innerHTML = conteudo;
        const bodyContent = temp.querySelector("body") || temp;
        document.getElementById("principal").innerHTML = bodyContent.innerHTML;
    } catch (error) {
        console.error("Erro:", error);
        document.getElementById("principal").innerHTML = `
            <div class="alert alert-danger">
                Falha ao carregar a página: ${error.message}
            </div>
        `;
    }
}