export function convertTimeStamp(timestamp, timezone) {
    const convertTimezone = timezone / 3600; // Converte o valor do timezone de segundos para horas (1 hora = 3600 segundos)
    const date = new Date(timestamp * 1000); // Cria um novo objeto Date, multiplicando o timestamp por 1000 (para converter de segundos para milissegundos)

    // Define as opções de formatação para a função toLocaleString
    const options = {
        weekday: 'long', // Exibe o dia da semana por extenso
        day: 'numeric', // Exibe o dia do mês como número
        month: 'long', // Exibe o mês por extenso
        year: 'numeric', // Exibe o ano com 4 dígitos
        hour: 'numeric', // Exibe as horas no formato de 12 horas (AM/PM)
        minute: 'numeric', // Exibe os minutos
        timeZone: `Etc/GMT${convertTimezone >= 0 ? '-' : '+'}${Math.abs(convertTimezone)}`, // Define o fuso horário usando Etc/GMT, com sinais ajustados para o fuso horário calculado
        hour12: true, // Exibe as horas no formato de 12 horas (com AM/PM)
    };

    // Converte a data para uma string formatada de acordo com as opções definidas, usando o idioma "pt-BR" (português brasileiro)
    return date.toLocaleString('pt-BR', options);
}
