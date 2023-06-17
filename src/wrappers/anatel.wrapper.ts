import axios from "axios";

export const request = async (props: {callsign: string}): Promise<boolean> => {
   const { callsign } = props;
    
    const url = 'https://sistemas.anatel.gov.br/easp/Novo/ConsultaIndicativo/Tela.asp';
    const data = {
        acao: 'e',
        pindicativo: callsign

    }

    const headers = {'content-type': 'application/x-www-form-urlencoded'};
    
    try {
        const response = await axios.post(url, data, { headers });
        return !response?.data?.includes('N�o foi encontrado nenhum registro com os crit�rios informados');
    } catch( err ){
        console.log('Ocorreu um erro ao realizar request');
        console.log({ err });
        throw err;
    }
}