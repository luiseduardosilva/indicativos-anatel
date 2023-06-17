import fs from 'fs';

export const addContextToFile = async (props: { context: string }) => {
    const fileName = 'list.txt';
    const { context } = props;
    const path = `${fileName}`;
    fs.writeFile(path, `${context}\n`, { flag: 'a+' }, err => console.log(err));
}