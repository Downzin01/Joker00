export function convertCountryCode(country) {
    // Cria um objeto 'Intl.DisplayNames' para formatar nomes de regiões (países, estados, etc.)
    // O idioma escolhido é o português do Brasil ('pt-BR')
    // O tipo especificado é 'region', que significa que ele será usado para traduzir ou formatar códigos de países/regiões
    let regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' });

    // Usa o método 'of' do objeto 'regionNames' para converter o código do país (por exemplo, 'US')
    // no nome completo do país (por exemplo, 'Estados Unidos')
    return regionNames.of(country);
}
